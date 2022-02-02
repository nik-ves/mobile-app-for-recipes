import { Text, TextInput, StyleSheet, View } from "react-native";
import { useState, useContext } from "react";
import CustomButton from "../UI/CustomButton";
import { AuthContext } from "../../context/AuthContext";

const SignIn = (props) => {
  const { login, currentUser } = useContext(AuthContext);

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const loginHandler = () => {
    login(emailValue, passwordValue);

    setErrorMessage("Wrong credentials!");
  };

  if (errorMessage) {
    setTimeout(() => {
      setErrorMessage(null);
    }, 5000);
  }

  return (
    <View style={styles.center}>
      <Text style={styles.title}>Pizza & Pasta</Text>

      {/* EMAIL */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Your Email"
          placeholderTextColor="white"
          onChangeText={(newText) => setEmailValue(newText)}
          defaultValue={emailValue}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* PASSWORD */}
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Your Password"
          placeholderTextColor="white"
          onChangeText={(newText) => setPasswordValue(newText)}
          defaultValue={passwordValue}
        />
      </View>

      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}

      <CustomButton onPress={loginHandler}>Sign In</CustomButton>

      <View style={styles.createAccount}>
        <Text
          onPress={() => {
            props.navigation.navigate("SignUp");
          }}
          style={styles.createAccount}
        >
          No account? Create one here!
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#166974",
  },
  title: {
    fontFamily: "poppins-bold",
    fontSize: 42,
    color: "#fff",
  },
  input: {
    width: "100%",
    color: "#fff",
    borderWidth: 1,
    borderColor: "#fff",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "transparent",
    fontSize: 15,
    fontFamily: "poppins-regular",
  },
  inputContainer: {
    height: 100,
    justifyContent: "space-between",
    width: "70%",
  },
  createAccount: {
    fontSize: 15,
    color: "#fff",
  },
  errorMessage: {
    color: "white",
    borderWidth: 1,
    borderColor: "red",
    fontSize: 20,
    padding: 5,
    marginTop: 15,
  },
});

export default SignIn;

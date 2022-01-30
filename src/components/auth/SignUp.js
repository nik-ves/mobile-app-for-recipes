import { Text, TextInput, StyleSheet, View } from "react-native";
import { useState, useContext } from "react";
import CustomButton from "../UI/CustomButton";
import { AuthContext } from "../../context/AuthContext";

const SignUp = (props) => {
  const { createUser } = useContext(AuthContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const resetValues = () => {
    setFirstName("");
    setLastName("");
    setEmailValue("");
    setPasswordValue("");
  };

  const createUserHandler = () => {
    if (
      firstName.length <= 0 ||
      lastName.length <= 0 ||
      emailValue.length <= 0 ||
      passwordValue.length <= 0
    ) {
      setErrorMessage("Fields must not be empty!");
      return;
    }

    createUser({
      firstName,
      lastName,
      email: emailValue,
      password: passwordValue,
    });

    resetValues();
    setSuccessMessage("Account created successfully!");
  };

  return (
    <View style={styles.center}>
      <Text style={styles.title}>Pizza & Pasta</Text>

      {/* FIRST NAME */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          placeholderTextColor="white"
          onChangeText={(newText) => setFirstName(newText)}
          defaultValue={firstName}
          keyboardType="email-address"
          autoCapitalize="words"
        />

        {/* LAST NAME */}
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          placeholderTextColor="white"
          onChangeText={(newText) => setLastName(newText)}
          defaultValue={lastName}
          autoCapitalize="words"
        />

        {/* EMAIL */}
        <TextInput
          style={styles.input}
          placeholder="Your Email"
          placeholderTextColor="white"
          onChangeText={(newText) => setEmailValue(newText)}
          defaultValue={emailValue}
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

      {successMessage && (
        <Text style={styles.successMessage}>{successMessage}</Text>
      )}
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}

      <CustomButton onPress={createUserHandler}>Sign Up</CustomButton>

      <View style={styles.createAccount}>
        <Text
          onPress={() => {
            props.navigation.navigate("SignIn");
          }}
          style={styles.createAccount}
        >
          Already have an account? Log in here!
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
    height: 230,
    justifyContent: "space-between",
    width: "70%",
  },
  createAccount: {
    fontSize: 15,
    color: "#fff",
  },
  successMessage: {
    color: "green",
    borderWidth: 1,
    borderColor: "green",
    fontSize: 20,
    padding: 5,
    marginTop: 15,
  },
  errorMessage: {
    color: "red",
    borderWidth: 1,
    borderColor: "red",
    fontSize: 20,
    padding: 5,
    marginTop: 15,
  },
});

export default SignUp;

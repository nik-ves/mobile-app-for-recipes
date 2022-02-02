import { Text, TextInput, StyleSheet, View } from "react-native";
import { useState, useContext } from "react";
import CustomButton from "../UI/CustomButton";
import { AuthContext } from "../../context/AuthContext";

const EditProfile = (props) => {
  const { currentUser, editCurrentUser } = useContext(AuthContext);

  const [firstName, setFirstName] = useState(currentUser.firstName);
  const [lastName, setLastName] = useState(currentUser.lastName);
  const [emailValue, setEmailValue] = useState(currentUser.email);

  const resetValues = () => {
    setFirstName("");
    setLastName("");
    setEmailValue("");
  };

  const editUserHandler = () => {
    editCurrentUser(firstName, lastName, emailValue);

    resetValues();
  };

  return (
    <View style={styles.center}>
      <Text style={styles.title}>Edit Profile</Text>

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
      </View>

      <View style={styles.actions}>
        <CustomButton onPress={editUserHandler}>Save Changes</CustomButton>
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
    height: 160,
    justifyContent: "space-between",
    width: "70%",
  },
  actions: {
    flexDirection: "row",
  },
});

export default EditProfile;

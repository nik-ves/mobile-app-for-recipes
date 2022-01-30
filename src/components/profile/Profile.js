import { useContext, useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
import { AuthContext } from "../../context/AuthContext";
import CustomButton from "../UI/CustomButton";

const Profile = (props) => {
  const { currentUser } = useContext(AuthContext);

  return (
    <View style={styles.screen}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome Back</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.key}>First Name:</Text>
          <Text style={styles.value}>{currentUser.firstName}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.key}>Last Name:</Text>
          <Text style={styles.value}>{currentUser.lastName}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.key}>Email Address:</Text>
          <Text style={styles.value}>{currentUser.email}</Text>
        </View>
      </View>

      <View style={styles.actions}>
        <CustomButton
          onPress={() => {
            props.navigation.navigate("EditProfile");
          }}
        >
          Edit Profile
        </CustomButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#166974",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    width: "90%",
  },
  actions: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontFamily: "poppins-bold",
    textAlign: "center",
    color: "white",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  key: {
    fontFamily: "poppins-bold",
    fontSize: 18,
    color: "white",
  },
  value: {
    fontFamily: "poppins-regular",
    fontSize: 18,
    color: "white",
  },
});

export default Profile;

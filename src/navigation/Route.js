import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import AppTabs from "./AppTabs";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Route = (props) => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem("user")
      .then((userString) => {
        if (userString) {
          setCurrentUser(JSON.parse(userString));
          setIsLoading(false);
        } else {
          setIsLoading(false);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  if (loading) {
    return (
      <View style={styles.screen}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {currentUser ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#166974",
  },
});

export default Route;

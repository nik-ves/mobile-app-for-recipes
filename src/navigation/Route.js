import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import AppTabs from "./AppTabs";

const Route = (props) => {
  const { currentUser } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {currentUser ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Route;

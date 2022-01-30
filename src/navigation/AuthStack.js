import { createStackNavigator } from "@react-navigation/stack";

const Auth = createStackNavigator();

import SignUp from "../components/auth/SignUp";
import SignIn from "../components/auth/SignIn";

const AuthStack = (props) => {
  return (
    <Auth.Navigator
      screenOptions={{
        header: () => null,
      }}
    >
      <Auth.Screen name="SignIn" component={SignIn} />
      <Auth.Screen name="SignUp" component={SignUp} />
    </Auth.Navigator>
  );
};

export default AuthStack;

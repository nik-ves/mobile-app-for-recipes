import { createStackNavigator } from "@react-navigation/stack";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/UI/CustomHeaderButton";

import Profile from "../components/profile/Profile";
import EditProfile from "../components/profile/EditProfile";

const Stack = createStackNavigator();

const ProfileStack = (props) => {
  const { logout } = useContext(AuthContext);

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#0b343a",
          borderColor: "white",
          borderBottomWidth: 2,
        },
      }}
    >
      <Stack.Screen
        options={{
          title: "Your Profile",
          headerTintColor: "white",
          headerTitleStyle: {
            fontFamily: "poppins-regular",
            textAlign: "left",
          },
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title="logout"
                iconName="logout"
                onPress={() => {
                  logout();
                }}
              />
            </HeaderButtons>
          ),
        }}
        name="Profile"
        component={Profile}
      />
      <Stack.Screen
        options={{
          title: "Edit Profile",
          headerTintColor: "white",
          headerTitleStyle: {
            fontFamily: "poppins-regular",
            textAlign: "right",
          },
        }}
        name="EditProfile"
        component={EditProfile}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;

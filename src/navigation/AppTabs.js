import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, AntDesign } from "@expo/vector-icons";

// EKRANI
import ProfileStack from "./ProfileStack";
import MealsStack from "./MealsStack";
import FavoriteMeals from "../components/favorite/FavoriteMeals";

const Tabs = createBottomTabNavigator();

const AppTabs = (props) => {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        showLabel: "false",
        style: {
          backgroundColor: "#0b343a",
        },
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          if (route.name === "Profile") {
            return <AntDesign name="user" size={size} color={color} />;
          } else if (route.name === "Cart") {
            return <Ionicons name="cart" size={size} color={color} />;
          } else if (route.name === "Meals") {
            return <Ionicons name="restaurant" size={size} color={color} />;
          } else if (route.name === "Favorites") {
            return <Ionicons name="star" size={size} color={color} />;
          }
        },
      })}
    >
      <Tabs.Screen name="Meals" component={MealsStack} />
      <Tabs.Screen name="Profile" component={ProfileStack} />
      <Tabs.Screen name="Favorites" component={FavoriteMeals} />
      <Tabs.Screen
        name="Cart"
        component={FavoriteMeals}
        options={{ tabBarBadge: 1 }}
      />
    </Tabs.Navigator>
  );
};

export default AppTabs;

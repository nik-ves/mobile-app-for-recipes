import { createStackNavigator } from "@react-navigation/stack";

import Meals from "../components/meals/Meals";
import MealDetails from "../components/meals/MealDetails";
import { MealsContext } from "../context/MealsContext";
import { useContext } from "react";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/UI/CustomHeaderButton";

const Stack = createStackNavigator();

const MealsStack = (props) => {
  const { meals, addToFavorites, favMeals } = useContext(MealsContext);

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
          title: "Our Meals",
          headerTintColor: "white",
          headerTitleStyle: {
            fontFamily: "poppins-regular",
            textAlign: "center",
          },
        }}
        name="Meals"
        component={Meals}
      />
      <Stack.Screen
        options={({ route }) => ({
          headerTitle: route.params.name,
          headerTintColor: "white",
          headerTitleStyle: {
            fontFamily: "poppins-regular",
            textAlign: "center",
          },
          headerRight: () => {
            const selectedMeal = meals.find(
              (meal) => meal.title === route.params.name
            );

            const isFav = favMeals.find(
              (meal) => meal.title === selectedMeal.title
            );

            return (
              <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                  title="star-outline"
                  iconName={isFav ? "star" : "star-outline"}
                  onPress={() => {
                    addToFavorites(selectedMeal);
                  }}
                />
              </HeaderButtons>
            );
          },
        })}
        name="MealDetails"
        component={MealDetails}
      />
    </Stack.Navigator>
  );
};

export default MealsStack;

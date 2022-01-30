import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import { MealsContext } from "../context/MealsContext";
import { useContext } from "react";

import FavoriteMeals from "../components/favorite/FavoriteMeals";
import MealDetails from "../components/meals/MealDetails";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/UI/CustomHeaderButton";

const FavoritesStack = (props) => {
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
          title: "Favorite Meals",
          headerTintColor: "white",
          headerTitleStyle: {
            fontFamily: "poppins-regular",
            textAlign: "center",
          },
        }}
        name="FavoriteMeals"
        component={FavoriteMeals}
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

            const isFav = favMeals.some(
              (meal) => meal.recipe_id === selectedMeal.recipe_id
            );

            return (
              <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                  title="star-outline"
                  iconName={isFav ? "star" : "star-outline"}
                  // iconName="star"
                  onPress={() => {
                    addToFavorites(selectedMeal.recipe_id);
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

export default FavoritesStack;

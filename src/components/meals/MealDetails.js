import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { MealsContext } from "../../context/MealsContext";
import { useContext, useEffect, useState } from "react";
import { uid } from "uid";

const MealDetails = ({ route }) => {
  const { meals } = useContext(MealsContext);
  const [currentMeal, setCurrentMeal] = useState({});
  const [ingredients, setIngredients] = useState(currentMeal?.ingredients);

  const selectedMeal = meals.find((meal) => meal.title === route.params.name);

  const fetchMealData = (mealId) => {
    fetch(`https://forkify-api.herokuapp.com/api/get?rId=${mealId}`)
      .then((response) => response.json())
      .then((data) => setCurrentMeal(data.recipe));
  };

  useEffect(() => {
    fetchMealData(selectedMeal.recipe_id);
  }, []);

  const renderIngredients = currentMeal.ingredients?.map((ingredient) => (
    <View key={uid(15)} style={styles.ingredientBox}>
      <Text style={styles.ingredientText}>{ingredient}</Text>
    </View>
  ));

  return (
    <ScrollView>
      <View style={styles.screen}>
        <Image style={styles.image} source={{ uri: currentMeal.image_url }} />
        <Text style={styles.title}>{route.params.name}</Text>
        <Text style={styles.publisher}>Recipe by: {currentMeal.publisher}</Text>

        <View style={styles.details}>
          <Text style={styles.title}>Ingredients</Text>

          {!renderIngredients && (
            <ActivityIndicator size="large" color="#00ff00" />
          )}
          {renderIngredients}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#166974",
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
    fontFamily: "poppins-bold",
    marginTop: 10,
  },
  publisher: {
    color: "white",
    fontFamily: "poppins-regular",
    textAlign: "center",
    fontSize: 12,
  },
  details: {
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  ingredientBox: {
    flex: 1,
    borderColor: "white",
    borderWidth: 1,
    width: "80%",
    marginBottom: 10,
    padding: 10,
  },
  ingredientText: {
    color: "white",
  },
});

export default MealDetails;

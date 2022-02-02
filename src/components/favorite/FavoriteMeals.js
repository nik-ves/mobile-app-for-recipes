import { View, Text, StyleSheet, FlatList } from "react-native";
import { useContext } from "react";
import { MealsContext } from "../../context/MealsContext";
import MealCard from "../meals/MealCard";

const FavoriteMeals = (props) => {
  const { favMeals } = useContext(MealsContext);

  if (favMeals.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackMessage}>
          No favorite meals, maybe add some!
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <FlatList
        style={styles.list}
        keyExtractor={(item) => item.recipe_id}
        // keyExtractor={(item, index) => "key" + index}
        data={favMeals}
        renderItem={({ item }) => {
          return (
            <MealCard
              item={item}
              link={() => {
                props.navigation.navigate("MealDetails", {
                  name: item.title,
                });
              }}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#166974",
    padding: 20,
  },
  list: {
    height: 200,
    width: "100%",
  },
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#166974",
  },
  fallbackMessage: {
    fontSize: 18,
    fontFamily: "poppins-regular",
    textAlign: "center",
    color: "white",
  },
});

export default FavoriteMeals;

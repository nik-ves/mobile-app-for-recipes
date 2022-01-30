import { View, Text, StyleSheet, FlatList } from "react-native";
import { useContext } from "react";
import { MealsContext } from "../../context/MealsContext";
import MealCard from "../meals/MealCard";

const FavoriteMeals = (props) => {
  const { favMeals } = useContext(MealsContext);

  return (
    <View style={styles.screen}>
      <Text>This is favorites screen</Text>

      <FlatList
        style={styles.list}
        keyExtractor={(item) => item.recipe_id}
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
    backgroundColor: "#ccc",
  },
  list: {
    height: 200,
  },
});

export default FavoriteMeals;

import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import { MealsContext } from "../../context/MealsContext";

const FavoriteMeals = (props) => {
  const { favMeals } = useContext(MealsContext);
  console.log(favMeals);

  return (
    <View style={styles.screen}>
      <Text>This is favorites screen</Text>
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
});

export default FavoriteMeals;

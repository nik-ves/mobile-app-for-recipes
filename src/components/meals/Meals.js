import { useContext, useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TextInput,
  ActivityIndicator,
} from "react-native";

import { MealsContext } from "../../context/MealsContext";
import MealCard from "./MealCard";

const Meals = (props) => {
  const { meals, fetchMeals } = useContext(MealsContext);
  const [searchParam, setSearchParam] = useState("");

  const displayData = meals.filter((meal) =>
    meal.title.toLowerCase().includes(searchParam.toLowerCase())
  );

  let userMessage;

  if (displayData.length < 1 && searchParam) {
    userMessage = (
      <View style={styles.userMessageConatiner}>
        <Text style={styles.userMessage}>
          We have nothing like that in our store! Try Again!
        </Text>
      </View>
    );
  }

  if (displayData.length < 1 && !searchParam) {
    userMessage = <ActivityIndicator size="large" color="#fff" />;
  }

  useEffect(() => {
    fetchMeals();
  }, []);

  return (
    <View style={styles.screen}>
      <View style={styles.filterBox}>
        <TextInput
          style={styles.input}
          placeholder="Search our meals here..."
          placeholderTextColor="white"
          onChangeText={(newText) => setSearchParam(newText)}
          defaultValue={searchParam}
        />
      </View>

      {userMessage}

      <FlatList
        style={styles.list}
        keyExtractor={(item) => item.recipe_id}
        // keyExtractor={(item, index) => 'key'+index}
        data={displayData}
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
    backgroundColor: "#166974",
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontFamily: "poppins-bold",
    color: "black",
  },
  list: {
    height: 200,
  },
  filterBox: {
    width: "100%",
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    color: "#fff",
    borderWidth: 1,
    borderColor: "#fff",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "transparent",
    fontSize: 15,
    fontFamily: "poppins-regular",
    width: "100%",
  },
  userMessageConatiner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  userMessage: {
    fontFamily: "poppins-regular",
    fontSize: 17,
    textAlign: "center",
    color: "white",
  },
});

export default Meals;

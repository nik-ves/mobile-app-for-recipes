import React, { useState } from "react";

export const MealsContext = React.createContext({
  meals: [],
  currentMeal: {},
  favMeals: null,
  fetchMeals: () => {},
  fetchMealData: () => {},
  addToFavorites: () => {},
});

const MealsContextProvider = (props) => {
  const [currentMeal, setCurrentMeal] = useState(null);
  const [meals, setMeals] = useState([]);
  const [favMeals, setFavMeals] = useState([]);

  const fetchMeals = () => {
    let urls = [
      "https://forkify-api.herokuapp.com/api/search?q=pizza",
      // "https://forkify-api.herokuapp.com/api/search?q=pasta",
    ];
    Promise.all(urls.map((url) => fetch(url).then((resp) => resp.json()))).then(
      (data) => {
        data.map((singleData) => {
          setMeals((prevState) => [...prevState, ...singleData.recipes]);
        });
      }
    );
  };

  const fetchMealData = (mealId) => {
    fetch(`https://forkify-api.herokuapp.com/api/get?rId=${mealId}`)
      .then((response) => response.json())
      .then((data) => setCurrentMeal(data));
  };

  // const addToFavorites = (meal) => {
  //   setFavMeals((prevState) => [...prevState, meal]);
  // };

  const addToFavorites = (selectedMeal) => {
    const existingMeal = favMeals.find(
      (meal) => meal.recipe_id === selectedMeal.recipe_id
    );

    // if (existingMeal) {
    //   const updatedFavMeals = [...favMeals];
    // }

    if (existingIndex >= 0) {
      const updatedFavMeals = [...favMeals];
      updatedFavMeals.splice(existingIndex, 1);
      setFavMeals((prevState) => [...prevState, updatedFavMeals]);
      // return [...prevState, setFavMeals(updatedFavMeals)];
    } else {
      const meal = meals.find(
        (meal) => meal.recipe_id === selectedMeal.recipe_id
      );
      setFavMeals((prevState) => [...prevState, favMeals.concat(meal)]);
      // return [...prevState, setFavMeals(favMeals.concat(meal))];
    }
  };

  const providerValue = {
    meals,
    currentMeal,
    favMeals,
    fetchMeals,
    fetchMealData,
    addToFavorites,
  };

  return (
    <MealsContext.Provider value={providerValue}>
      {props.children}
    </MealsContext.Provider>
  );
};

export default MealsContextProvider;

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
      "https://forkify-api.herokuapp.com/api/search?q=pasta",
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

  const addToFavorites = (mealId) => {
    const mealExists = favMeals.findIndex((meal) => meal.recipe_id === mealId);

    if (mealExists > -1) {
      const updatedArray = [...favMeals];
      updatedArray.splice(mealExists, 1);
      setFavMeals(updatedArray);
    } else {
      const meal = meals.find((meal) => meal.recipe_id === mealId);
      setFavMeals((prevState) => [...prevState, meal]);
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

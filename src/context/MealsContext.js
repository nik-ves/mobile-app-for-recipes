import React, { useState } from "react";

const DUMMY_ARRAY = [
  {
    image_url:
      "http://forkify-api.herokuapp.com/images/best_pizza_dough_recipe1b20.jpg",
    publisher: "101 Cookbooks",
    publisher_url: "http://www.101cookbooks.com",
    recipe_id: "47746",
    social_rank: 100,
    source_url: "http://www.101cookbooks.com/archives/001199.html",
    title: "Best Pizza Dough Ever",
  },
  {
    image_url:
      "http://forkify-api.herokuapp.com/images/nokneadpizzadoughlahey6461467.jpg",
    publisher: "Bon Appetit",
    publisher_url: "http://www.bonappetit.com",
    recipe_id: "49346",
    social_rank: 99.99999999743466,
    source_url:
      "http://www.bonappetit.com/recipes/2012/03/no-knead-pizza-dough",
    title: "No-Knead Pizza Dough",
  },
  {
    image_url:
      "http://forkify-api.herokuapp.com/images/nokneadpizzadoughlahey6461467.jpg",
    publisher: "Bon Appetit",
    publisher_url: "http://www.bonappetit.com",
    recipe_id: "49346",
    social_rank: 99.99999999743466,
    source_url:
      "http://www.bonappetit.com/recipes/2012/03/no-knead-pizza-dough",
    title: "No-Knead Pizza Dough",
  },
  {
    image_url:
      "http://forkify-api.herokuapp.com/images/nokneadpizzadoughlahey6461467.jpg",
    publisher: "Bon Appetit",
    publisher_url: "http://www.bonappetit.com",
    recipe_id: "49346",
    social_rank: 99.99999999743466,
    source_url:
      "http://www.bonappetit.com/recipes/2012/03/no-knead-pizza-dough",
    title: "No-Knead Pizza Dough",
  },
];

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

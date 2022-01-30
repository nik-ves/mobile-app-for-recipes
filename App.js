import { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

// CONTEXT
import AuthContextProvider from "./src/context/AuthContext";
import MealsContextProvider from "./src/context/MealsContext";

// RUTE
import Route from "./src/navigation/Route";

const fetchFonts = async () => {
  return await Font.loadAsync({
    "poppins-bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "poppins-regular": require("./assets/fonts/Poppins-Regular.ttf"),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={(error) => console.log(error)}
      />
    );
  }

  return (
    <AuthContextProvider>
      <MealsContextProvider>
        <Route />
      </MealsContextProvider>
    </AuthContextProvider>
  );
}

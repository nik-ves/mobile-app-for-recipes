import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = React.createContext({
  currentUser: {},
  editCurrentUser: () => {},
  setCurrentUser: () => {},
  isLoggedIn: "",
  createUser: () => {},
  login: () => {},
  logout: () => {},
});

const AuthContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [usersList, setUsersList] = useState([
    {
      firstName: "Nikola",
      lastName: "Veselinovic",
      email: "nikola@test.com",
      password: "nikola123",
    },
  ]);

  const isLoggedIn = AsyncStorage.getItem("userTest");

  const createUserHandler = (user) => {
    setUsersList((prevState) => [...prevState, user]);
  };

  const loginUserHandler = (email, password) => {
    let user = usersList.find((user) => {
      return email === user.email && password === user.password;
    });

    AsyncStorage.setItem("user", JSON.stringify(user));
    setCurrentUser(user);
  };

  const logoutUserHandler = () => {
    AsyncStorage.removeItem("user");
    setCurrentUser(null);
  };

  const providerValue = {
    currentUser,
    editCurrentUser: setCurrentUser,
    setCurrentUser,
    isLoggedIn,
    createUser: createUserHandler,
    login: loginUserHandler,
    logout: logoutUserHandler,
  };

  return (
    <AuthContext.Provider value={providerValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

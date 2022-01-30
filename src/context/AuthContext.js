import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = React.createContext({
  currentUser: {},
  editCurrentUser: () => {},
  isLoggedIn: "",
  createUser: () => {},
  login: () => {},
  logout: () => {},
});

const AuthContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({
    firstName: "Nikola",
    lastName: "Veselinovic",
    email: "nikola@test.com",
    password: "nikola123",
  });
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

    AsyncStorage.setItem("userTest", JSON.stringify(user));
    setCurrentUser(user);
  };

  const logoutUserHandler = () => {
    AsyncStorage.removeItem("userTest");
    setCurrentUser(null);
  };

  const providerValue = {
    currentUser,
    editCurrentUser: setCurrentUser,
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

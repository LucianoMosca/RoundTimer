import React, { useState, useContext, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const EditContext = createContext();

export const EditContextProvider = ({ children }) => {

const [coso, setCoso] =useState();
  var value = {
    firstEditable: { roundEdit: 3, restEdit: 1 },
    secondEditable: { roundEdit: 5, restEdit: 1 },
    thirdEditable: { roundEdit: 2, restEdit: 2 },
    fourthEditable: { roundEdit: 1, restEdit: 0.3 },
  };

  const getData = async () => {
    try {
      const storedData = await AsyncStorage.getItem("@EditedTimer");
      if (storedData !== null) {
       value = JSON.parse(storedData);
      } else {
       value = JSON.parse({
        firstEditable: { roundEdit: 2, restEdit: 1 },
        secondEditable: { roundEdit: 5, restEdit: 1 },
        thirdEditable: { roundEdit: 2, restEdit: 2 },
        fourthEditable: { roundEdit: 1, restEdit: 0.3 },
      });
      }
    } catch (e) {
      console.log("error loading", e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return <EditContext.Provider value={value}>{children}</EditContext.Provider>;
};

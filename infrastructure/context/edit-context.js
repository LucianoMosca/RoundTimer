import React, { useState, useContext, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TimerContext } from "./timer-context";

export const EditContext = createContext();

export const EditContextProvider = ({ children }) => {
  const [editContextValue, setEditContextValue] = useState();

  const timerContext = useContext(TimerContext);
  const editContext = useContext(EditContext);
  var value = {
    firstEditable: { roundEdit: 3, restEdit: 1 },
    secondEditable: { roundEdit: 5, restEdit: 1 },
    thirdEditable: { roundEdit: 2, restEdit: 2 },
    fourthEditable: { roundEdit: 1, restEdit: 0.3 },
  }


  //this function is used to retrieve data from nested JSON objects
  function iterateObject(obj) {
    for (var prop in obj) {
      if (typeof obj[prop] == "object") {
        {
          prop == "firstEditable" && iterateObject(obj[prop]);
        }
      } else {
        if (prop == "roundEdit") {
          console.log("este es el round " + prop + ": " + obj[prop]);
          console.log("++++++++++++++++++++++++++++++++++++");

          timerContext.first.round = obj[prop];
          console.log("coso round" + timerContext.first.round);

          console.log("++++++++++++++++++++++++++++++++++++");
          //
        }
        if (prop == "restEdit") {
          console.log("este es el descanso " + prop + ": " + obj[prop]);

          timerContext.first.rest = obj[prop];
          console.log("coso rest " + timerContext.first.rest);

          //
        }
      }
    }
  }

  const getData = async (key) => {
    // get Data from Storage
    try {
      const data = await AsyncStorage.getItem(key);
      if (data !== null) {
        console.log(iterateObject(JSON.parse(data)));
        console.log(
          "---------------------------------------------------------------------"
        );
        return data;
      }
    } catch (error) {
      console.log("error while loading", error);
    }
  };
/*
  useEffect(() => {
  
    getData("value")
      .then((data) => data)
      .then((theValue) => {
        value = theValue;
      })
      .catch((err) => console.log(err));

     
    //getData("value");
  }, []);

  useEffect(() => {
  
    getData("value")
      .then((data) => data)
      .then((theValue) => {
        value = theValue;        
      })
      .catch((err) => console.log(err));
    //getData("value");
  }, [timerContext]) 
*/
  return (
    <EditContext.Provider value={value}>
      {children}
    </EditContext.Provider>
  );
};

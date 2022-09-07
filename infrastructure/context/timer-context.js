import React, { useState, useContext, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


export const TimerContext = createContext();

export const TimerContextProvider = ({ children }) => {
  const round = null;
  const rest = null;
  const name = "first";

  var value = {
    first: { round: 3, rest: 1 },
    second:{ round: 5, rest: 1 },
    third: { round: 2, rest: 2 },
    fourth: { round: 0.5, rest: 0.2 },
    name: name,
  }
/*
  function iterateObject(obj) {
    for (var prop in obj) {
      if (typeof obj[prop] == "object") {
        {
          prop == "firstEditable" && iterateObject(obj[prop]);
        }
      } else {
        if (prop == "roundEdit") {
          console.log("este es el round " + prop + ": " + obj[prop]);
          console.log(value)
          console.log("++++++++++++++++++++++++++++++++++++");
 
          value.first.round = obj[prop];
          console.log("coso round" + value.first.round);

          console.log("++++++++++++++++++++++++++++++++++++");
          //
        }
        if (prop == "restEdit") {
          console.log("este es el descanso " + prop + ": " + obj[prop]);

          value.first.rest = obj[prop];
          console.log("coso rest " + value.first.rest);

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
      } else{
        value = {
          first: { round: 3, rest: 1 },
          second:{ round: 5, rest: 1 },
          third: { round: 5, rest: 1 },
          fourth: { round: 0.5, rest: 0.5},
          name: name,
        }
      }
    } catch (error) {
      console.log("error while loading", error);
    }
  };

  useEffect(() => {
  
    getData("value")
      .then((data) => data)
      .then((theValue) => {
        console.log(value)
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
  }, [AsyncStorage]);
*/

  return (
    <TimerContext.Provider
      value={{
        first: { round: 3, rest: 1 },
        second:{ round: 5, rest: 1 },
        third: { round: 2, rest: 2 },
        fourth: { round: 0.5, rest: 0.2 },
        name: name,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

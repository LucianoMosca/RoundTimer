import React, { useState, useContext, createContext, useEffect } from "react";

export const TimerContext = createContext();

export const TimerContextProvider = ({ children }) => {
  const round = null;
  const rest = null;
  const name = "first";
  return (
    <TimerContext.Provider
      value={{
        first: { round: round, rest: rest },
        second:{ round: round, rest: rest },
        third: { round: round, rest: rest },
        fourth: { round: round, rest: rest },
        name: name,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

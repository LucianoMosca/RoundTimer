import React, { useState, useContext, createContext, useEffect } from "react";

export const TimerContext = createContext();

export const TimerContextProvider = ({ children }) => {
  const round = null;
  const rest = null;
  const name = "coso";
  return (
    <TimerContext.Provider
      value={{ round: round, rest: rest, name: name}}
    >
      {children}
    </TimerContext.Provider>
  );
};

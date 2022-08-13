import React, { useEffect, useState, useContext } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

import {
  ButtonText,
  ModifierButton,
  EditContainer,
  EditButtonText,
  TimeText,
  EditTimerContainer,
  SaveButton,
} from "./editor-styles";

import { theme } from "../../infrastructure/theme";
import { ThemeProvider } from "styled-components";
import { EditContext } from "../../infrastructure/context/edit-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TimerContext } from "../../infrastructure/context/timer-context";

export const Editor = ({ roundOrRest }) => {
  // Subject: What we modify. It can be minutes or seconds
  const [subject, setSubject] = useState("minutes");

  //Edittable minutes/seconds: These int variables are used to modify the timer on screen
  const [edittableMinutes, setEdittableMinutes] = useState(0);
  const [edittableSeconds, setEdittableSeconds] = useState(0);

  //Strings: To show on the screen
  const [stringMinutes, setStringMinutes] = useState("00");
  const [stringSeconds, setStringSeconds] = useState("00");

  //Coso
  const [floatRound, setFloatRound] = useState(null);
  const [floatRest, setFloatRest] = useState(null);

  const editContext = useContext(EditContext);
  const timerContext = useContext(TimerContext);
  ////////////////////////////////////////////////////////////////////////

  //this function is to avoid getting a "1:0" format instead of the desired "01:00" format
  const pad = (num) => {
    if (num < 10) {
      return "0" + num.toString();
    } else {
      return num.toString();
    }
  };

  const operation = () => {
    return ((edittableMinutes * 60 + edittableSeconds) * 100) / 6000;
  };
  ////////////////////////////////////////////////////////////////////////
  //what happens when we plus the minus button
  const plusPressHandler = () => {
    if (subject == "minutes") {
      setEdittableMinutes(edittableMinutes + 1);
      //With the code below we avoid a possible "60:00" time
      if (edittableMinutes > 58) {
        setEdittableMinutes(0);
      }
    } else {
      setEdittableSeconds(edittableSeconds + 10);
      //With the code below we avoid a possible "00:60" time
      if (edittableSeconds > 40) {
        setEdittableSeconds(0);
      }
    }

    //We set what the user sees with the code below
    setStringMinutes(pad(edittableMinutes));
  };

  ////////////////////////////////////////////////////////////////////////
  //what happens when we press the minus button
  const minusPressHandler = () => {
    if (subject == "minutes") {
      setEdittableMinutes(edittableMinutes - 1);
      //With the code below we avoid a possible "-01:00" time
      if (edittableMinutes < 1) {
        setEdittableMinutes(59);
      }
    } else {
      setEdittableSeconds(edittableSeconds - 10);
      //With the code below we avoid a possible "00:-10" time
      if (edittableSeconds < 2) {
        setEdittableSeconds(50);
      }
    }
  };
  ////////////////////////////////////////////////////////////////////////
  //When the user press on top of the minutes
  const minutesPressHandler = () => {
    setSubject("minutes");
  };
  //When the user press on top of the seconds
  ////////////////////////////////////////////////////////////////////////
  const secondsPressHandler = () => {
    setSubject("seconds");
  };
  ////////////////////////////////////////////////////////////////////////
  //we will have to edit this, right now is just for testing purposes
  const savePressHandler = () => {
    if (timerContext.name == "first") {
      if (roundOrRest == "roundEdittor") {
        setFloatRound(operation());
        editContext.firstEditable.roundEdit = floatRound;

        console.log(editContext.firstEditable.roundEdit);
      }
      if (roundOrRest == "restEdittor") {
        setFloatRest(operation());
        editContext.firstEditable.restEdit = floatRest;

        console.log(editContext.firstEditable.restEdit);
      }
    }

    if (timerContext.name == "second") {
      if (roundOrRest == "roundEdittor") {
        setFloatRound(operation());
        editContext.secondEditable.roundEdit = floatRound;

        console.log(editContext.secondEditable.roundEdit);
      }
      if (roundOrRest == "restEdittor") {
        setFloatRest(operation());
        editContext.secondEditable.restEdit = floatRest;

        console.log(editContext.secondEditable.restEdit);
      }
    }

    if (timerContext.name == "third") {
      if (roundOrRest == "roundEdittor") {
        setFloatRound(operation());
        editContext.thirdEditable.roundEdit = floatRound;

        console.log(editContext.thirdEditable.roundEdit);
      }
      if (roundOrRest == "restEdittor") {
        setFloatRest(operation());
        editContext.thirdEditable.restEdit = floatRest;

        console.log(editContext.thirdEditable.restEdit);
      }
    }
    if (timerContext.name == "fourth") {
      if (roundOrRest == "roundEdittor") {
        setFloatRound(operation());
        editContext.fourthEditable.roundEdit = floatRound;

        console.log(editContext.fourthEditable.roundEdit);
      }
      if (roundOrRest == "restEdittor") {
        setFloatRest(operation());
        editContext.fourthEditable.restEdit = floatRest;

        console.log(editContext.fourthEditable.restEdit);
      }
    }
  };

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@EditedTimer", jsonValue);
    } catch (e) {
      console.log("error while storing", e);
    }
  };

  useEffect(() => {
    storeData(editContext);
  }, [editContext]);

  ////////////////////////////////////////////////////////////
  //everytime the edittableMinutes or edittableSeconds are changed we show the same change
  //in the stringMinutes or stringSeconds variables
  //We also modify the floatRound and floatRest variables
  useEffect(() => {
    setStringMinutes(pad(edittableMinutes));
    if (roundOrRest == "roundEdittor") {
      setFloatRound(operation());
    }
    if (roundOrRest == "restEdittor") {
      setFloatRest(operation());
    }
  }, [edittableMinutes]);

  useEffect(() => {
    setStringSeconds(pad(edittableSeconds));

    if (roundOrRest == "roundEdittor") {
      setFloatRound(operation());
    }
    if (roundOrRest == "restEdittor") {
      setFloatRest(operation());
    }
  }, [edittableSeconds]);
  //////////////////////////////////////////////////////////

  return (
    <ThemeProvider theme={theme}>
      <EditContainer>
        <ModifierButton onPress={minusPressHandler}>
          <EditButtonText>-</EditButtonText>
        </ModifierButton>

        <EditTimerContainer>
          <TouchableOpacity onPress={minutesPressHandler}>
            <TimeText>{stringMinutes}</TimeText>
          </TouchableOpacity>

          <TimeText>:</TimeText>

          <TouchableOpacity onPress={secondsPressHandler}>
            <TimeText>{stringSeconds}</TimeText>
          </TouchableOpacity>
        </EditTimerContainer>

        <ModifierButton onPress={plusPressHandler}>
          <EditButtonText>+</EditButtonText>
        </ModifierButton>
      </EditContainer>
      <SaveButton onPress={savePressHandler}>
        <EditButtonText>SAVE</EditButtonText>
      </SaveButton>
    </ThemeProvider>
  );
};

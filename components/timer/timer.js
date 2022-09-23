import React, { useEffect, useState } from "react";
import { View, Text, Vibration } from "react-native";
import { Countdown } from "../../components/countdown/countdown";
import { useKeepAwake } from "expo-keep-awake";
import { StartButton, StopButton, ButtonText } from "./timer-styles";
import { Spacer } from "../../utils/spacer";

export const Timer = ({ onTimerEnd, round, rest, roundAmount, navigation }) => {
  const ONE_SECOND_IN_MS = 1000;
  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
  ];

  useKeepAwake();
  const [isStarted, setIsStarted] = useState(null);
  const [isFightTime, setIsFightTime] = useState(null);
  const [isRestTime, setIsRestTime] = useState(null);
  const [isPrepTime, setIsPrepTime] = useState(null);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(round);
  const [isStopped, setIsStopped] = useState(null);
  
  //We will use this variable in order to avoid memory leaks
  let unmounted = false;

  const prepTime = 0.18;

  //With this useEffect we make sure nothing wierd happens while mounting the component
  useEffect(() => {
    setMinutes(round);
    setIsStarted(null);
    setIsStopped(null);

    return () => {
      unmounted = true;
    };
  }, []);

  const onPhaseChange = () => {
    // Vibration.vibrate(PATTERN);

    setProgress(1);
    setMinutes(round);
  };

  //Callback function that will mantain the fighting and resting rounds in a loop
  const loop = () => {

    if (roundAmount <= 0 || isStopped) {
      return;
    }
    //fightTime
     if (!unmounted) {
    console.log("Training time");

    toTrainTime();

    setTimeout(() => {
      //restTime
       if (!unmounted) {
      console.log("Resting time");

      toRestTime();

      setTimeout(() => {
        roundAmount -= 1;
        loop();
      }, (60 * rest + 1) * 1000);
        }
    }, (60 * round + 1) * 1000);
      }
  };

  //Function to call the loop() function
  const startPressHandler = () => {
    if (!isStarted) {
      setIsStopped(false);
      setIsStarted(true);
      setIsPrepTime(true);

      setTimeout(() => {
        setIsPrepTime(false);
      loop();

       }, (60 * prepTime) * 1000);
    }
  };

  const stopPressHandler = () => {
    setIsStopped(true);
    setIsStarted(false);
    roundAmount = 0;
    navigation.navigate("Main");
  };

  const toTrainTime = () => {
    setMinutes(round);

    setIsFightTime(true);
    setIsRestTime(false);
  };

  const toRestTime = () => {
    setMinutes(rest);

    setIsRestTime(true);
    setIsFightTime(false);
  };

  //Below this line we will find three different Countdown components.
  //The first one is just what the user will see when opening the TimerScreen
  //The second one is rendered and activated when it's fight time
  //While the last one will be rendered and activated when it's rest time.

  /*

   
      
  */

  return (
    <View>
      {!isStopped && isPrepTime &&(
        <Countdown
          minutes={prepTime}
          isPaused={!isPrepTime}
          onProgress={setProgress}
          onEnd={onPhaseChange}
        ></Countdown>
      )}
      {isStopped && (
        <Countdown
          minutes={round}
          isPaused={true}
          onProgress={setProgress}
          onEnd={onPhaseChange}
        ></Countdown>
      )}

      {!isStopped && isFightTime && (
        <Countdown
          minutes={round}
          isPaused={!isFightTime}
          onProgress={setProgress}
          onEnd={onPhaseChange}
        ></Countdown>
      )}

      {!isStopped && isRestTime && (
        <Countdown
          minutes={rest}
          isPaused={!isRestTime}
          onProgress={setProgress}
          onEnd={onPhaseChange}
        ></Countdown>
      )}

      <Spacer position="top" size="xl"></Spacer>

      {!isStarted ? (
        <StartButton onPress={startPressHandler}>
          <ButtonText>START</ButtonText>
        </StartButton>
      ) : (
        <StopButton onPress={stopPressHandler}>
          <ButtonText>STOP</ButtonText>
        </StopButton>
      )}
    </View>
  );
};

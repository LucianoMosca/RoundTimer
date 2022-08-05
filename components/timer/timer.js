import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Countdown } from "../../components/countdown/countdown";
import { useKeepAwake } from "expo-keep-awake";
import { TimerButton, ButtonText } from "./timer-styles";
import { Spacer } from "../../utils/spacer";

export const Timer = ({ navigation, onTimerEnd, round, rest, roundAmount }) => {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(null);
  const [isFightTime, setIsFightTime] = useState(null);
  const [isRestTime, setIsRestTime] = useState(null);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(round);

  const phaseChange = () => {
    setIsFightTime(!isFightTime);
    setIsRestTime(!isRestTime);
  };

  useEffect(() => {
    setMinutes(round);
    setIsStarted(false);
  }, []);

 /* useEffect(() => {
    if (isStarted) {
      setIsFightTime(true);
    }
  }, [isStarted]);*/

  const onEnd = () => {
    // Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgress(1);
    setMinutes(round);
    //phaseChange();
  };
  console.log(isFightTime);

  var roundAmount = roundAmount;

  const loop = () => {
    if (roundAmount <= 0) {
        return;
    }

    setTimeout(() => {
        setIsFightTime(true);
        setIsRestTime(false);

        setTimeout(() => {

            setIsFightTime(false);
            setIsRestTime(true);

            setTimeout(() => {
                roundAmount -= 1;

                loop();
            },1000 )
        }, 13*1000 )
    },7*1000);
  };

const theFunction = () => {
   if(!isStarted){
    loop();

    setIsStarted(true);
   }  
}




  return (
    <View>
      {isFightTime && 
        <Countdown
          minutes={round}
          isPaused={!isFightTime}
          onProgress={setProgress}
          onEnd={onEnd}
        ></Countdown>
      }

      {isRestTime && 
        <Countdown
          minutes={rest}
          isPaused={!isRestTime}
          onProgress={setProgress}
          onEnd={onEnd}
        ></Countdown>
      }

      <Spacer position="top" size="xl"></Spacer>
      <TimerButton
        onPress={() => {
          !isStarted ? theFunction() : setIsStarted(false);
        }}
      >
        {!isStarted ? (
          <ButtonText>START</ButtonText>
        ) : (
          <ButtonText>PAUSE</ButtonText>
        )}
      </TimerButton>

      <Spacer position="top" size="xl">
        <TimerButton onPress={() => onEnd()}>
          <ButtonText>STOP</ButtonText>
        </TimerButton>
      </Spacer>
    </View>
  );
};

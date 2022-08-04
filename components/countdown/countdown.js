import React, { useState, useEffect } from "react";
import { CountDownText } from "./countdown-styles";

const minutesToMillis = (min) => min * 1000 * 60;
const formatTime = (time) => (time < 10 ? `0${time}` : time);

export const Countdown = ({ minutes = 0.1, isPaused, onProgress, onEnd }) => {
  const interval = React.useRef(null);

  const [millis, setMillis] = useState(null);
  const reset = () => {
    setMillis(minutesToMillis(minutes));
  };

  const countDown = () => {
    setMillis((time) => {
      if (time === 0) {
        setTimeout(() => clearInterval(interval.current), 0);
        setTimeout(() => onEnd(reset), 0);

        return time;
      }
      const timeLeft = time - 1000;
      return timeLeft;
    });
  };

  useEffect(() => {
    setMillis(minutesToMillis(minutes));
  }, [minutes]);

  useEffect(() => {
    onProgress(millis / minutesToMillis(minutes));
  }, [millis]);

  useEffect(() => {
    if (isPaused) {
      if (interval.current) clearInterval(interval.current);
      return;
    }

    interval.current = setInterval(countDown, 1000);

    return () => clearInterval(interval.current);
  }, [isPaused]);

  const minute = Math.floor(millis / 1000 / 60) % 60;
  const seconds = Math.floor(millis / 1000) % 60;
  return (
    <CountDownText>
      {formatTime(minute)}:{formatTime(seconds)}
    </CountDownText>
  );
};

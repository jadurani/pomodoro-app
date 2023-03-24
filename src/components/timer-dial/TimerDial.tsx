import ThemeContext, { ThemeColors } from "@/state/theme/ThemeContext";
import { useContext, useEffect, useState } from "react";
import styles from "./TimerDial.module.css";

export interface ITimerDial {
  /**
   * Time left in seconds
   */
  timeLeft: number;
  /**
   * Full time duration in seconds
   */
  timeDuration: number;
}

/**
 * How many seconds in a minute
 */
const ONE_MINUTE = 60;
/**
 * How many milliseconds in a second
 */
const ONE_SECOND = 1000;

const TextColor: Record<ThemeColors, `text-${ThemeColors}`> = {
  [ThemeColors.RED]: "text-red",
  [ThemeColors.TEAL]: "text-teal",
  [ThemeColors.MAGENTA]: "text-magenta",
};

const secondsToMinutesString = (seconds: number) =>
  parseInt(`${seconds}`).toString().padStart(2, "0");

const TimerDial: React.FC<ITimerDial> = ({ id, timeLeft, timeDuration }) => {
  const [timeRemaining, setTimeRemaining] = useState(timeLeft);
  const { color } = useContext(ThemeContext);
  const [paused, setPaused] = useState(true);

  const circleLength = (timeDuration - timeRemaining) / timeDuration;
  const minutesTime = secondsToMinutesString(timeRemaining / ONE_MINUTE);
  const secondsTime = secondsToMinutesString(timeRemaining % ONE_MINUTE);
  const timeDisplay = `${minutesTime}:${secondsTime}`;
  const isFinished = timeRemaining <= 0;

  let buttonText = "Pause";
  if (paused) {
    buttonText = "Resume";
  }
  if (isFinished) {
    buttonText = "Restart";
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!paused && !isFinished) {
        setTimeRemaining((t) => t - 1);
      }
    }, ONE_SECOND);

    return () => clearInterval(intervalId);
  }, [paused, isFinished]);

  const handleToggle = () => {
    setPaused(!paused);

    if (isFinished) {
      setTimeRemaining(timeDuration);
      setPaused(false);
    }
  };

  return (
    <div className={styles.timer} id={id}>
      <svg className={`h-full w-full ${TextColor[color]}`}>
        <circle
          cx="50%"
          cy="50%"
          r="150"
          pathLength="1"
          className={styles.countdown}
          style={{
            strokeDashoffset: circleLength,
          }}></circle>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          className={styles.countdownText}>
          {timeDisplay}
        </text>
      </svg>
      <button
        className="uppercase text-grey text-h3 absolute left-1/2 -translate-x-1/2 bottom-1/3 text-center"
        onClick={() => handleToggle()}>
        {buttonText}
      </button>
    </div>
  );
};

export default TimerDial;

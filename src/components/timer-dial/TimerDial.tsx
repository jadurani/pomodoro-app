import ThemeContext, { ThemeColors } from "@/state/theme/ThemeContext";
import TimerContext from "@/state/timer/TimerContext";
import { useContext, useEffect } from "react";
import styles from "./TimerDial.module.css";

export interface ITimerDial {
  /**
   * Time left in seconds
   */
  timeRemaining: number;
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

const convertMinutesToSeconds = (minutes: number): number =>
  +(minutes * ONE_MINUTE).toFixed(2);

const convertSecondsToMinutes = (seconds: number): number =>
  +(seconds / ONE_MINUTE).toFixed(2);

const TextColor: Record<ThemeColors, `text-${ThemeColors}`> = {
  [ThemeColors.RED]: "text-red",
  [ThemeColors.TEAL]: "text-teal",
  [ThemeColors.MAGENTA]: "text-magenta",
};

const getButtonText = (
  paused: boolean,
  isFinished: boolean,
  isDefault: boolean
): string => {
  if (!paused && !isFinished) {
    return "Pause";
  }

  if (isDefault) {
    return "Start";
  }

  if (isFinished) {
    return "Restart";
  }

  return "Resume";
};

const secondsToMinutesString = (seconds: number) =>
  parseInt(`${seconds}`).toString().padStart(2, "0");

const TimerDial: React.FC<ITimerDial> = ({ timeRemaining, timeDuration }) => {
  const { paused, setPaused, setTimeRemaining } = useContext(TimerContext);
  const { color } = useContext(ThemeContext);

  const secTimeDuration = convertMinutesToSeconds(timeDuration);
  const secTimeRemaining = convertMinutesToSeconds(timeRemaining);

  const circleLength = (secTimeDuration - secTimeRemaining) / secTimeDuration;
  const minutesTime = secondsToMinutesString(secTimeRemaining / ONE_MINUTE);
  const secondsTime = secondsToMinutesString(secTimeRemaining % ONE_MINUTE);
  const timeDisplay = `${minutesTime}:${secondsTime}`;

  const isFinished = secTimeRemaining <= 0;
  const isDefault = secTimeRemaining === secTimeDuration;
  const buttonText = getButtonText(paused, isFinished, isDefault);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!paused && !isFinished) {
        const minutesRemaining = convertSecondsToMinutes(secTimeRemaining - 1);
        setTimeRemaining(minutesRemaining);
      }
    }, ONE_SECOND);

    return () => clearInterval(intervalId);
  }, [paused, isFinished, secTimeRemaining, setTimeRemaining]);

  const handleToggle = () => {
    setPaused(!paused);

    if (isFinished) {
      setTimeRemaining(timeDuration);
      setPaused(false);
    }
  };

  return (
    <div className={styles.timer}>
      <svg className={`h-full w-full ${TextColor[color]} transition-colors`}>
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
        aria-label="toggle-timer"
        className="uppercase text-grey text-h3 absolute left-1/2 -translate-x-1/2 bottom-1/3 text-center"
        onClick={() => handleToggle()}>
        {buttonText}
      </button>
    </div>
  );
};

export default TimerDial;

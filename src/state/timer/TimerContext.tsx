import { createContext, PropsWithChildren, useState } from "react";

export enum TimerVariants {
  POMODORO = "pomodoro",
  SHORT = "short-break",
  LONG = "long-break",
}

export type TimerDurations = Record<TimerVariants, number>;

type ITimerContext = {
  activeTimer: TimerVariants;
  setActiveTimer: (variant: TimerVariants) => void;

  timeRemaining: number;
  setTimeRemaining: (t: number) => void;

  timerDurations: TimerDurations;
  setTimerDuration: (td: TimerDurations) => void;
};

const defaultValue: ITimerContext = {
  activeTimer: TimerVariants.POMODORO,
  setActiveTimer: (variant: TimerVariants) => undefined,

  timeRemaining: 0,
  setTimeRemaining: (t: number) => undefined,

  timerDurations: {
    pomodoro: 25,
    "short-break": 5,
    "long-break": 15,
  },
  setTimerDuration: (td: TimerDurations) => undefined,
};

const TimerContext = createContext<ITimerContext>(defaultValue);

export const TimerProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [activeTimer, setActiveTimer] = useState(defaultValue.activeTimer);
  const [timerDurations, setTimerDuration] = useState(
    defaultValue.timerDurations
  );

  const defaultTimeRemaining =
    defaultValue.timerDurations[defaultValue.activeTimer];
  const [timeRemaining, setTimeRemaining] = useState(defaultTimeRemaining);

  return (
    <TimerContext.Provider
      value={{
        activeTimer,
        setActiveTimer,
        timeRemaining,
        setTimeRemaining,
        timerDurations,
        setTimerDuration,
      }}>
      {children}
    </TimerContext.Provider>
  );
};

export default TimerContext;

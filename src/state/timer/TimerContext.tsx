import { PropsWithChildren, createContext, useState } from "react";

export enum TimerVariants {
  POMODORO = "pomodoro",
  SHORT = "short-break",
  LONG = "long-break",
}

type TimerVariantDurationID = `${TimerVariants}-duration`;

type ITimerContext = {
  activeTimer: TimerVariants;
  setActiveTimer: (variant: TimerVariants) => void;

  timerDurations: Record<TimerVariantDurationID, number>;
  setTimerDuration: (td: Record<TimerVariantDurationID, number>) => void;
};

const defaultValue: ITimerContext = {
  activeTimer: TimerVariants.POMODORO,
  setActiveTimer: (variant: TimerVariants) => undefined,

  timerDurations: {
    "pomodoro-duration": 25,
    "short-break-duration": 5,
    "long-break-duration": 15,
  },
  setTimerDuration: (td: Record<TimerVariantDurationID, number>) => undefined,
};

const TimerContext = createContext<ITimerContext>(defaultValue);

export const TimerProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [activeTimer, setActiveTimer] = useState(defaultValue.activeTimer);
  const [timerDurations, setTimerDuration] = useState(
    defaultValue.timerDurations
  );

  return (
    <TimerContext.Provider
      value={{ activeTimer, setActiveTimer, timerDurations, setTimerDuration }}>
      {children}
    </TimerContext.Provider>
  );
};

export default TimerContext;

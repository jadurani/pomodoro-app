import { TimerVariantDurationID } from "@/state/timer/TimerContext";
import { IInput } from "./Input";

const pomodoro: IInput = {
  id: "pomodoro-duration",
  label: "pomodoro",
  value: 25,
  setValue: (id: TimerVariantDurationID, v: number) => undefined,
};

export const mockInputProps = {
  pomodoro,
};

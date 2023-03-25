import {
  TimerDurations,
  TimerVariantDurationID,
} from "@/state/timer/TimerContext";
import Input from "../input/Input";
import "./TimeSettings.module.css";

interface ITimerSettings {
  durations: TimerDurations;
  setDurations: (td: TimerDurations) => void;
}

const TimeSettings: React.FC<ITimerSettings> = ({
  durations,
  setDurations,
}) => {
  const handleDurationChange = (id: TimerVariantDurationID, v: number) => {
    const newDurations = {
      ...durations,
      [id]: v,
    };
    setDurations(newDurations);
  };

  return (
    <>
      <h3 className="uppercase text-indigo2 text-h3 text-center mx-auto sm:mr-auto sm:text-left">
        time (minutes)
      </h3>
      <div className="flex flex-col sm:flex-row gap-4 my-4">
        <Input
          id="pomodoro-duration"
          label="pomodoro"
          value={durations["pomodoro-duration"]}
          setValue={handleDurationChange}
        />

        <Input
          id="short-break-duration"
          label="short break"
          value={durations["short-break-duration"]}
          setValue={handleDurationChange}
        />

        <Input
          id="long-break-duration"
          label="long break"
          value={durations["long-break-duration"]}
          setValue={handleDurationChange}
        />
      </div>
    </>
  );
};

export default TimeSettings;

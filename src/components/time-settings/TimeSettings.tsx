import Input from "../input/Input";
import "./TimeSettings.module.css";

const TimeSettings: React.FC = () => (
  <>
    <h3 className="uppercase text-indigo2 text-h3 text-center mx-auto sm:mr-auto sm:text-left">
      time (minutes)
    </h3>
    <div className="flex flex-col sm:flex-row gap-4 my-4">
      <Input id="pomodoro" label="pomodoro" value={25} />
      <Input id="short-break" label="short break" value={5} />
      <Input id="long-break" label="long break" value={15} />
    </div>
  </>
);

export default TimeSettings;

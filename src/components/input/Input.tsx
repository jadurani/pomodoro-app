import { useState } from "react";
import "./Input.module.css";

export interface IInput {
  id: string;
  label: string;
  value: number;
}

const Input: React.FC<IInput> = ({ id, label, value }) => {
  const [minutes, setMinutes] = useState(value);

  return (
    <div className="inline-flex justify-between w-full items-center sm:flex-col sm:items-start">
      <label className="my-2 text-indigo1 opacity-25">{label}</label>
      <div className="inline-flex items-center max-w-[140px] bg-grey2 px-4 py-2 rounded-lg text-body1">
        <input
          id={id}
          type="number"
          value={minutes}
          onChange={(e) => setMinutes(+e.target.value)}
          placeholder="25"
          className="outline-none bg-grey2 text-indigo1 font-bold w-10/12"
        />
        <span className="inline-flex flex-col">
          {/* Up button */}
          <button
            className="opacity-25 hover:opacity-100 transition-opacity py-1"
            onClick={() => setMinutes(minutes + 1)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="7">
              <path
                fill="none"
                stroke="#1E213F"
                stroke-width="2"
                d="M1 6l6-4 6 4"
              />
            </svg>
          </button>

          {/* Down button */}
          <button
            className="opacity-25 hover:opacity-100 transition-opacity py-1"
            onClick={() => setMinutes(minutes - 1)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="7">
              <path
                fill="none"
                stroke="#1E213F"
                stroke-width="2"
                d="M1 1l6 4 6-4"
              />
            </svg>
          </button>
        </span>
      </div>
    </div>
  );
};

export default Input;

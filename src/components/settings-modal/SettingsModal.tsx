import ColorSelector from "../color-selector/ColorSelector";
import { mockColorSelectorProps } from "../color-selector/ColorSelector.mocks";
import FontSelector from "../font-selector/FontSelector";
import { mockFontSelectorProps } from "../font-selector/FontSelector.mocks";
import TimeSettings from "../time-settings/TimeSettings";
import "./SettingsModal.module.css";

export interface ISettingsModal {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
}

const SettingsModal: React.FC<ISettingsModal> = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`
      fixed
      top-0
      left-0
      h-full
      w-full
      items-center
      justify-center
      overflow-x-hidden
      overflow-y-scroll
      flex
      ${isOpen ? "sm:flex" : "hidden sm:hidden"}`}>
      <div
        className={`
        bg-white
        z-20
        text-indigo2
        content-['']
        mx-4
        mt-4
        mb-8
        sm:m-auto
        h-min
        border
        rounded-2xl
        relative
        `}>
        {/* Settings header */}
        <div className="px-8 py-4 items-center flex justify-between">
          <h1 className="text-indigo2 text-[20px] sm:text-h2 font-bold">
            Settings
          </h1>
          <button onClick={() => setIsOpen(false)}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.5">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.3639 2.05044L11.9497 0.63623L6.99995 5.58598L2.0502 0.63623L0.635986 2.05044L5.58573 7.00019L0.635986 11.9499L2.0502 13.3642L6.99995 8.4144L11.9497 13.3642L13.3639 11.9499L8.41416 7.00019L13.3639 2.05044Z"
                  fill="#1E213F"
                />
              </g>
            </svg>
          </button>
        </div>

        <hr className="opacity-10" />

        <div className="px-8 py-4">
          <TimeSettings></TimeSettings>
        </div>

        <hr className="opacity-10 sm:mx-8" />

        <div className="px-8 py-4">
          <FontSelector {...mockFontSelectorProps}></FontSelector>
        </div>

        <hr className="opacity-10 sm:mx-8" />

        <div className="px-8 py-4">
          <ColorSelector {...mockColorSelectorProps}></ColorSelector>
        </div>

        {/* Button */}
        <div className="w-full absolute -translate-y-1/2 flex z-30">
          <button
            onClick={() => setIsOpen(false)}
            className="
              cursor-pointer
              mx-auto
              px-8
              py-2
              text-white
              rounded-full
              font-bold
              bg-red">
            Apply
          </button>
        </div>
      </div>
      {/* Backdrop */}
      <div
        className={`
        ${isOpen ? "" : "hidden"}
        fixed w-full h-full
        bg-[#0A0C1C] bg-opacity-50
        top-0 left-0 z-10`}></div>
    </div>
  );
};

export default SettingsModal;

import ColorSelector from "../color-selector/ColorSelector";
import { mockColorSelectorProps } from "../color-selector/ColorSelector.mocks";
import FontSelector from "../font-selector/FontSelector";
import { mockFontSelectorProps } from "../font-selector/FontSelector.mocks";
import TimeSettings from "../time-settings/TimeSettings";
import "./SettingsModal.module.css";

export interface ISettingsModal {
  isOpen: boolean;
}

const SettingsModal: React.FC<ISettingsModal> = ({ isOpen }) => {
  return (
    <>
      <div
        className={`
        ${isOpen ? "" : "hidden"}
        fixed
        bg-white
        z-10
        text-indigo2
        content-['']
        w-11/12
        xs:w-[512px]
        h-min
        inset-1/2
        -translate-x-1/2
        -translate-y-1/2
        border
        border-solid
        border-grey2
        rounded-2xl
        `}>
        {/* Settings header */}
        <div className="px-8 py-4 items-center flex justify-between">
          <h1 className="text-indigo2 text-[20px] sm:text-h2 font-bold">
            Settings
          </h1>
          <button>
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
      </div>
      <div
        className={`
        ${isOpen ? "" : "hidden"}
        fixed w-full h-full bg-[#0A0C1C] bg-opacity-50 top-0 left-0`}></div>
    </>
  );
};

export default SettingsModal;

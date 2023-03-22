import { ThemeColors } from "@/state/theme/ThemeContext";
import ColorChoice, { IColorChoice } from "../color-choice/ColorChoice";
import "./ColorSelector.module.css";

export interface IColorSelector {
  selectedColor: ThemeColors;
  colorChoiceList: IColorChoice[];
}

const ColorSelector: React.FC<IColorSelector> = ({
  selectedColor,
  colorChoiceList,
}) => (
  <div className="flex flex-col items-center sm:flex-row sm:justify-between">
    <h3 className="uppercase text-indigo2 text-h3">color</h3>
    <div className="flex gap-4 my-4">
      {colorChoiceList.map((tab) => (
        <ColorChoice
          key={tab.id}
          id={tab.id}
          color={tab.color}
          isSelected={tab.id === selectedColor}
        />
      ))}
    </div>
  </div>
);

export default ColorSelector;

import { ThemeColors } from "@/state/theme/ThemeContext";
import { IColorChoice } from "../color-choice/ColorChoice";
import { IColorSelector } from "./ColorSelector";

const redChoice: IColorChoice = {
  id: ThemeColors.RED,
  color: ThemeColors.RED,
  isSelected: false,
};

const tealChoice: IColorChoice = {
  id: ThemeColors.TEAL,
  color: ThemeColors.TEAL,
  isSelected: false,
};

const magentaChoice: IColorChoice = {
  id: ThemeColors.MAGENTA,
  color: ThemeColors.MAGENTA,
  isSelected: false,
};

export const mockColorSelectorProps: IColorSelector = {
  selectedColor: magentaChoice.color,
  colorChoiceList: [redChoice, tealChoice, magentaChoice],
};

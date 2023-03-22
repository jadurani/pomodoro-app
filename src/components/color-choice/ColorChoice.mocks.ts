import { ThemeColors } from "@/state/theme/ThemeContext";
import { IColorChoice } from "./ColorChoice";

const selected: IColorChoice = {
  id: "red-choice",
  color: ThemeColors.RED,
  isSelected: true,
};

const unSelected: IColorChoice = {
  id: "red-choice",
  color: ThemeColors.RED,
  isSelected: false,
};

export const mockColorChoiceProps = {
  selected,
  unSelected,
};

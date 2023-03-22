import { IFontChoice } from "../font-choice/FontChoice";
import { IFontSelector } from "./FontSelector";

const shortBreak: IFontChoice = {
  id: "short-break",
  isSelected: false,
};

const longBreak: IFontChoice = {
  id: "long-break",
  isSelected: false,
};

const pomodoro: IFontChoice = {
  id: "pomodoro",
  isSelected: false,
};

export const mockFontSelectorProps: IFontSelector = {
  selectedFont: pomodoro.id,
  fontChoiceList: [shortBreak, longBreak, pomodoro],
};

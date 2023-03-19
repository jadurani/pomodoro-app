import { ITab } from "../tab/Tab";
import { ITabBar } from "./TabBar";

const shortBreak: ITab = {
  text: "short break",
  id: "short-break",
  isSelected: false,
};

const longBreak: ITab = {
  text: "long break",
  id: "long-break",
  isSelected: false,
};

const pomodoro: ITab = {
  text: "pomodoro",
  id: "pomodoro",
  isSelected: false,
};

export const mockTabBarProps: ITabBar = {
  selectedTabID: pomodoro.id,
  tabList: [shortBreak, longBreak, pomodoro],
};

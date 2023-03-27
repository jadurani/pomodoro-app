import ThemeContext, { BackgroundColor } from "@/state/theme/ThemeContext";
import { TimerVariants } from "@/state/timer/TimerContext";
import { useContext } from "react";
import styles from "./Tab.module.css";

export interface ITab {
  text: string;
  id: TimerVariants;
  isSelected: boolean;
  selectTab: (id: TimerVariants) => void;
}

const Tab: React.FC<ITab> = ({ text, id, isSelected, selectTab }) => {
  const { color } = useContext(ThemeContext);

  return (
    <button
      onClick={() => selectTab(id)}
      className={`
        cursor-pointer
        px-4 py-2 rounded-full
        text-body2 sm:text-body1
        ${styles.tabLabel}
        ${
          isSelected ? BackgroundColor[color] + " text-indigo1" : "text-grey1"
        }`}>
      {text}
    </button>
  );
};

export default Tab;

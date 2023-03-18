import "./Tab.module.css";

export interface ITab {
  text: string;
  tabID: string;
  isSelected: boolean;
}

const Tab: React.FC<ITab> = ({ text, tabID, isSelected }) => (
  <>
    <input
      type="radio"
      className=""
      id={tabID}
      name="tabs"
      checked={isSelected}
    />
    <label htmlFor={tabID} className="">
      {text}
    </label>
  </>
);

export default Tab;

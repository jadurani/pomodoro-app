import Tab, { ITab } from "../tab/Tab";
import "./TabBar.module.css";

export interface ITabBar {
  selectedTabID: string;
  tabList: ITab[];
}

const TabBar: React.FC<ITabBar> = ({ selectedTabID, tabList }) => (
  <div className="inline-flex relative rounded-full gap-2 m-4 p-2 bg-indigo2">
    {tabList.map((tab) => (
      <Tab
        key={tab.id}
        id={tab.id}
        text={tab.text}
        isSelected={tab.id === selectedTabID}
      />
    ))}
  </div>
);

export default TabBar;

import "./Tab.module.css";

export interface ITab {
  text: string;
  id: string;
  isSelected: boolean;
}

const Tab: React.FC<ITab> = ({ text, id, isSelected }) => (
  <>
    <input
      type="radio"
      name="tabs"
      className=""
      id={id}
      value={id}
      checked={isSelected}
    />
    <label htmlFor={id} className="">
      {text}
    </label>
  </>
);

export default Tab;

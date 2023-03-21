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
      className="d-none"
      id={id}
      value={id}
      checked={isSelected}
    />
    <label
      htmlFor={id}
      className="cursor-pointer px-4 py-2 text-grey1 rounded-full">
      {text}
    </label>
  </>
);

export default Tab;

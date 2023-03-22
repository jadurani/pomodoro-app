import FontChoice, { IFontChoice } from "../font-choice/FontChoice";
import "./FontSelector.module.css";

export interface IFontSelector {
  selectedFont: string;
  fontChoiceList: IFontChoice[];
}

const FontSelector: React.FC<IFontSelector> = ({
  selectedFont,
  fontChoiceList,
}) => (
  <div className="flex flex-col items-center sm:flex-row sm:justify-between">
    <h3 className="uppercase text-indigo2 text-h3">Font</h3>
    <div className="flex gap-4 my-4">
      {fontChoiceList.map((tab) => (
        <FontChoice
          key={tab.id}
          id={tab.id}
          isSelected={tab.id === selectedFont}
        />
      ))}
    </div>
  </div>
);

export default FontSelector;

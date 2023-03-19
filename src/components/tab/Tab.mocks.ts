import { ITab } from './Tab';

const selected: ITab = {
  text: 'short break',
  tabID: 'short-break',
  isSelected: true,
};

const unSelected: ITab = {
  text: 'short break',
  tabID: 'short-break',
  isSelected: false,
};

export const mockTabProps = {
  selected,
  unSelected
};

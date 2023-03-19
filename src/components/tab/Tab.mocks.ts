import { ITab } from './Tab';

const selected: ITab = {
  text: 'short break',
  id: 'short-break',
  isSelected: true,
};

const unSelected: ITab = {
  text: 'short break',
  id: 'short-break',
  isSelected: false,
};

export const mockTabProps = {
  selected,
  unSelected
};

import { StoryFn, Meta } from '@storybook/react';
import Tab, { ITab } from './Tab';
import { mockTabProps } from './Tab.mocks';

export default {
  title: 'Components/Tab',
  component: Tab,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof Tab>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Tab> = (args) => (
  <Tab {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockTabProps.base,
} as ITab;

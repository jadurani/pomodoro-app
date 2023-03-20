import { Meta, StoryObj } from "@storybook/react";
import TabBar, { ITabBar } from "./TabBar";
import { mockTabBarProps } from "./TabBar.mocks";

const meta: Meta<typeof TabBar> = {
  title: "components/Tab Bar",
  component: TabBar,
};

export default meta;

export const SelectedPomodoro: StoryObj<typeof TabBar> = {
  render: (args) => <TabBar {...args} />,
};

SelectedPomodoro.args = {
  ...mockTabBarProps,
} as ITabBar;

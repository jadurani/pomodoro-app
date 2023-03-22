import type { StorybookConfig } from "@storybook/nextjs";

const path = require("path");
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  /** Expose public folder to storybook as static */
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  webpackFinal: async (config) => {
    // @ts-ignore: Object is possibly 'null'.
    config.resolve.alias = {
      // @ts-ignore: Object is possibly 'null'.
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "../src/"),
    };
    return config;
  },
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;

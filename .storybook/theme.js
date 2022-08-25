import { create } from "@storybook/theming";

export default create({
  base: "light",
  brandTitle: process.env.STORYBOOK_PROJECT_NAME,
  brandUrl: process.env.STORYBOOK_PROJECT_URL,
  brandImage: process.env.STORYBOOK_PROJECT_LOGO,
  brandTarget: "_self",
});

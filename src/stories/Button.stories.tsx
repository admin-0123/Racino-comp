import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Stack from "@mui/material/Stack";

import { Button } from "../components/button.component";

export default {
  title: "Example/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Stack spacing={2} maxWidth={300}><Button {...args} /></Stack>;

export const RacinoButton = Template.bind({});
RacinoButton.args = {
  label: "Label",
};

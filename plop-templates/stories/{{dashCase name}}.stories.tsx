import { Meta, Story } from "@storybook/react"
import { {{properCase name}}, {{properCase name}}Props } from "../src"

export default {
  title: "{{type}}/{{properCase name}}",
  component: {{properCase name}},
} as Meta

const Template: Story<{{properCase name}}Props> = (args) => {
  return (
      <{{properCase name}} {...args}  />
  )
}

export const Basic = Template.bind({})

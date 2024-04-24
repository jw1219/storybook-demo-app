import {ButtonGroup} from './ButtonGroup'
import {Button, Filled, Outlined, FilledFullWidth, OutlinedFullWidth} from '../../components/button'

export default {
  title: "Design System/Patterns/ButtonGroup",
  component: ButtonGroup,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    numButtons: {
      options: [2, 3],
      control: 'radio',
      table: {
        category: 'Storybook Only'
      }
    },
    button1: {
      options: ['Filled', 'Outlined', 'Plain'],
      control: 'select',
    }
  }
}

export const Default = {
  args: {
    children: <><Button {...Filled.args} style={{marginRight: "1rem"}}>Button</Button>
      <Button {...Outlined.args}>Button</Button></>
  }
}

export const Narrow = {
  args: {
    children: <><Button {...Filled.args} style={{marginRight: "0.5rem"}}>Button</Button>
      <Button {...Outlined.args}>Button</Button></>
  }
}

export const Wide = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button {...Filled.args} style={{marginRight: "2rem"}}>Button</Button>
      <Button {...Outlined.args}>Button</Button>
    </ButtonGroup>
  )
}

export const Vertical = {
  render: (args) => (
    <ButtonGroup {...args} classNames="flex-col">
      <Button {...Filled.args} style={{marginBottom: "1rem"}}>Button</Button>
      <Button {...Outlined.args}>Button</Button>
    </ButtonGroup>
  )
}

export const VerticalFullWidth = {
  render: (args) => (
    <ButtonGroup {...args} classNames="flex-col w-48">
      <Button {...FilledFullWidth.args} style={{marginBottom: "1rem"}}>Button</Button>
      <Button {...OutlinedFullWidth.args}>Button</Button>
    </ButtonGroup>
  )
}
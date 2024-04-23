import {ButtonGroup} from './ButtonGroup'
import {Button, Filled, Outlined, FilledFullWidth, OutlinedFullWidth} from '../../components/button'

export default {
  title: "Design System/Patterns/ButtonGroup",
  component: ButtonGroup,
  subcomponents: { 
    Button,
  },
  parameters: {
    layout: "centered",
  },
  argTypes: {
    // classNames: {
    //   table: {
    //     disable: true,
    //   },
    // },
  },
}

export const Default = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button {...Filled.args} style={{marginRight: "1rem"}}>Button</Button>
      <Button {...Outlined.args}>Button</Button>
    </ButtonGroup>
  )
}

export const Narrow = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button {...Filled.args} style={{marginRight: "0.5rem"}}>Button</Button>
      <Button {...Outlined.args}>Button</Button>
    </ButtonGroup>
  )
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
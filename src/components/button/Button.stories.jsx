import { Button } from './Button';

export default {
  title: "Design System/Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className=''>
        <Story/>
      </div>
    )
  ],
  argTypes: {
    classNames: {
      table: {
        disable: true,
      },
    },
    size: {
      options: ['Default', 'Large'],
      mapping: {
        Default: null,
        Large: 'large'
      },
      control: 'select'
    }
  },
  args: {
    children: "Button",
    size: null
  },
};

export const Filled = {
  args: {
    classNames: "text-white bg-[#2187F2] border-2 border-[#2187F2] hover:bg-[#4FA3FA] hover:border-[#4FA3FA] rounded-lg"
  },
};
export const Outlined = {
  args: {
    classNames: "text-[#2187F2] border-2 border-[#2187F2] hover:text-[#4FA3FA] hover:border-[#4FA3FA] rounded-lg"
  },
};
export const Plain = {
  args: {
    classNames: "text-[#2187F2] hover:underline hover:underline-offset-2"
  },
};
export const FilledCritical = {
  args: {
    classNames: "text-white bg-[#dc3545] border-2 border-[#dc3545] hover:bg-transparent	hover:text-[#dc3545] rounded-lg"
  },
};
export const FilledFullWidth = {
  args: {
    classNames: "w-full text-white bg-[#2187F2] border-2 border-[#2187F2] hover:bg-[#4FA3FA] hover:border-[#4FA3FA] rounded-lg"
  },
};
export const OutlinedFullWidth = {
  args: {
    classNames: "w-full text-[#2187F2] border-2 border-[#2187F2] hover:text-[#4FA3FA] hover:border-[#4FA3FA] rounded-lg"
  },
};

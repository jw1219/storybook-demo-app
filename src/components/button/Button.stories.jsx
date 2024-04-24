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
    variant: {
      table: {
        disable: true
      }
    },
    width: {
      table: {
        disable: true
      }
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
    variant: 'filled',
    children: "Button",
  },
};

export const Filled = {
  args: {
    variant: 'filled',
  },
};
export const Outlined = {
  args: {
    variant: 'outlined',
  },
};
export const Plain = {
  args: {
    variant: 'plain',
  },
};
export const FilledCritical = {
  args: {
    variant: 'filled',
    role: 'critical'
  },
};
export const FilledFullWidth = {
  args: {
    variant: 'filled',
    width: 'fullWidth'

  },
};
export const OutlinedFullWidth = {
  args: {
    variant: 'outlined',
    width: 'fullWidth'
  },
};

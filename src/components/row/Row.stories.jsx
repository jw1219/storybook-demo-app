import { Row } from './Row';
import { MdPerson } from "react-icons/md";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Design System/Components/Row",
  component: Row,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  // tags: ["autodocs"],
  parameters: {
    // componentSubtitle: "Hello"  
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    label: { control: "text" },
    icon: {
      options: ['None', 'Account'],
      mapping: {
        None: null,
        Account: <MdPerson />
      }
    },
    hasButton: {
      options: ['Yes', 'No'],
      control: "radio",
      mapping: {
        Yes: true,
        No: false
      }
    },
    hasCheckbox: {
      options: ['Yes', 'No'],
      control: "radio",
      mapping: {
        Yes: true,
        No: false
      }
    }
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    label: "山田　太郎",
    hasButton: true,
    hasCheckbox: true,
    icon: <MdPerson />
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {
    icon: <MdPerson />
  },
};

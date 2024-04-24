/* eslint-disable react/prop-types */
import './button.css';
import clsx from 'clsx';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ variant, size, role, width, children, ...props }) => {
  let classNames;
  switch (variant) {
    case 'outlined':
      classNames = "text-[#2187F2] border-2 border-[#2187F2] hover:text-[#4FA3FA] hover:border-[#4FA3FA] rounded-lg"
      break
    case 'plain':
      classNames = "text-[#2187F2] hover:underline hover:underline-offset-2 hover:text-[#ed5c6b]"
      break
    case 'filled':
    default:
      classNames = "text-white bg-[#2187F2] border-2 border-[#2187F2] hover:bg-[#4FA3FA] hover:border-[#4FA3FA] rounded-lg"
      break
  }

  switch (size) {
    case 'large':
      classNames += " text-lg h-12"
      break
    default:
      break
  }

  switch (role) {
    case 'critical':
      if (variant === 'outlined') {
        classNames += " text-[#dc3545] border-[#dc3545] hover:text-[#ed5c6b] hover:border-[#ed5c6b]"
      } else if (variant === 'plain') {
        classNames += " text-[#dc3545] border-[#dc3545] hover:text-[#ed5c6b]"
      } else {
        classNames += " bg-[#dc3545] border-[#dc3545] hover:bg-[#ed5c6b] hover:border-[#ed5c6b]"
      }
      break
    default:
      break
  }

  switch (width) {
    case 'fullWidth':
      classNames += " w-48"
      break
    default:
      break
  }

  return (
    <button
      type="button"
      className={clsx('flex h-10 items-center justify-center px-4', classNames)}
      {...props}
    >
      {children}
    </button>
  );
};

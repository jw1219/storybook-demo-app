/* eslint-disable react/prop-types */
import './button.css';
import clsx from 'clsx';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ size, classNames, children, ...props }) => {
  return (
    <button
      type="button"
      className={clsx('flex h-10 items-center justify-center px-4', `${size === "large" && "text-lg h-12"}`, classNames)}
      {...props}
    >
      {children}
    </button>
  );
};

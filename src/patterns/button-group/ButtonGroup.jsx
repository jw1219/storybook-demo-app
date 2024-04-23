/* eslint-disable react/prop-types */
import clsx from 'clsx';

export const ButtonGroup = ({children, classNames}) => {
  return (
    <div className={clsx(`flex`, classNames)}>
      {children}
    </div>
  )
}
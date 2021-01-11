
import React from 'react';
import s from './Button.scss';

type ButtonProps  = {
  text: string,
  type: string,
  getTargetIndex: (type: string) => void
}

const Button: React.FunctionComponent<ButtonProps> = (props) => {
  const {text, type } = props
  return (
    <div className={s.ButtonContainer}>
      <a className={s.NavigationItem} onClick={() => props.getTargetIndex(type)} href='#'>{text}</a>
    </div>
  )
};
export default Button;

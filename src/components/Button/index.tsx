import React from 'react';

import style from './Button.module.scss';

type ButtonProps = {
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

function Button({ children, onClick }: ButtonProps) {
  return (
    <button className={style['button']} type="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;

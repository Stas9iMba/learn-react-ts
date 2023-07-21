import React from 'react';

import style from './Button.module.scss';

type ButtonProps = {
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<'button'>;

function Button({ children, ...rest }: ButtonProps) {
  return (
    // eslint-disable-next-line react/button-has-type -- правило не работает в ts
    <button className={style['button']} {...rest} type={rest.type ?? 'button'}>
      {children}
    </button>
  );
}

export default Button;

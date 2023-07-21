import ThemeSwitcher from '~components/ThemeSwitcher';

import style from './TheHeader.module.scss';

function TheHeader() {
  return (
    <div className={style['header']}>
      <div className={style['logo']}>devfinder</div>
      <ThemeSwitcher />
    </div>
  );
}

export default TheHeader;

import { useCallback, useEffect, useMemo, useState } from 'react';

import { ReactComponent as MoonIcon } from '~assets/icon-moon.svg';
import { ReactComponent as SunIcon } from '~assets/icon-sun.svg';

import style from './ThemeSwitcher.module.scss';

function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(false);

  const ThemeIcon = useMemo(() => (isDark ? MoonIcon : SunIcon), [isDark]);

  useEffect(() => {
    document.body.dataset['theme'] = isDark ? 'dark' : 'light';
  }, [isDark]);

  const handleToggleTheme = useCallback(() => {
    setIsDark((previous) => !previous);
  }, []);

  return (
    <button className={style['switcher']} onClick={handleToggleTheme} type="button">
      <span>{isDark ? 'Dark' : 'Light'}</span>
      <ThemeIcon className={style['icon']} />
    </button>
  );
}

export default ThemeSwitcher;

import React, { useCallback } from 'react';

import { ReactComponent as SearchIcon } from '~assets/icon-search.svg';
import Button from '~components/Button';

import style from './Search.module.scss';

type SearchProps = {
  hasError: boolean;
  onSubmit: (text: string) => void;
};

type FormFields = {
  username: HTMLInputElement;
};

function Search({ hasError, onSubmit }: SearchProps) {
  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement & FormFields>) => {
      event.preventDefault();
      const text = event.currentTarget.username.value;

      if (text) {
        onSubmit(text);
        event.currentTarget.reset();
      }
    },
    [onSubmit],
  );

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className={style['search']}>
        <label className={style['label']} htmlFor="search">
          <SearchIcon className={style['icon']} />
        </label>
        <input
          className={style['textField']}
          type="text"
          id="search"
          name="username"
          placeholder="Search GitHub username..."
        />

        {hasError && <div className={style['error']}>No result</div>}
        <Button type="submit">Search</Button>
      </div>
    </form>
  );
}

export default Search;

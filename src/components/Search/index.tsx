import React, { useCallback, useRef } from 'react';

import { ReactComponent as SearchIcon } from '~assets/icon-search.svg';
import Button from '~components/Button';

import style from './Search.module.scss';

type SearchProps = {
  hasError: boolean;
  onSubmit: (text: string) => void;
};

function Search({ hasError, onSubmit }: SearchProps) {
  const searchRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      const text = searchRef.current?.value;
      if (text) {
        onSubmit(text);
        if (searchRef.current) {
          searchRef.current.value = '';
        }
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
          ref={searchRef}
        />

        {hasError && <div className={style['error']}>No result</div>}
        <Button type='submit' >Search</Button>
      </div>
    </form>
  );
}

export default Search;

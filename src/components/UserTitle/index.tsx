import React from 'react';

import { LocalGithubUser } from '~types/Users';

import style from './UserTitle.module.scss';

type UserTitleProps = Pick<LocalGithubUser, 'name' | 'login' | 'created'>;

const localDate = new Intl.DateTimeFormat('en-GB', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
});

function UserTitle({ name, login, created }: UserTitleProps) {
  const joinDate = localDate.format(new Date(created));
  return (
    <div className={style['userTitle']}>
      <h2>{name}</h2>
      <h3>{login}</h3>
      <span>{joinDate}</span>
    </div>
  );
}

export default UserTitle;

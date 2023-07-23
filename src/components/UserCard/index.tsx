import React from 'react';

import UserStat from '~components/UserStat';
import { LocalGithubUser } from '~types/Users';

import style from './UserCard.module.scss';

type UserCardProps = Pick<LocalGithubUser, 'repos' | 'followers' | 'following'>;

function UserCard({ repos, followers, following }: UserCardProps) {
  return (
    <div className={style['userCard']}>
      <UserStat repos={repos} followers={followers} following={following} />
    </div>
  );
}

export default UserCard;

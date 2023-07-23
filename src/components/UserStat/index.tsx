import React from 'react';

import { LocalGithubUser } from '~types/Users';

import style from './UserStat.module.scss';

export type UserStatProps = Pick<LocalGithubUser, 'repos' | 'followers' | 'following'>;

function UserStat({ repos, followers, following }: UserStatProps) {
  return (
    <div className={style['userStat']}>
      <div className={style['info']}>
        <div className={style['infoTitle']}>Repos</div>
        <div className={style['infoNumber']}>{repos}</div>
      </div>
      <div className={style['info']}>
        <div className={style['infoTitle']}>Following</div>
        <div className={style['infoNumber']}>{following}</div>
      </div>
      <div className={style['info']}>
        <div className={style['infoTitle']}>Followers</div>
        <div className={style['infoNumber']}>{followers}</div>
      </div>
    </div>
  );
}

export default UserStat;

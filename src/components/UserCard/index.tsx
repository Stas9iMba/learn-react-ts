import React from 'react';

import UserInfo from '~components/UserInfo';
import UserStat from '~components/UserStat';
import UserTitle from '~components/UserTitle';
import { LocalGithubUser } from '~types/Users';

import style from './UserCard.module.scss';

type UserCardProps = LocalGithubUser;

function UserCard({
  repos,
  followers,
  following,
  login,
  created,
  name,
  avatar,
  bio,
  company,
  location,
  twitter,
  blog,
}: UserCardProps) {
  return (
    <div className={style['userCard']}>
      <img src={avatar} alt={login} className={style['avatar']} loading="lazy" />
      <UserTitle name={name} login={login} created={created} />
      <p className={bio ? style['bio'] : style['empty']}>{bio || 'This profile has no bio'}</p>
      <UserStat repos={repos} followers={followers} following={following} />
      <UserInfo company={company} location={location} twitter={twitter} blog={blog} />
    </div>
  );
}

export default UserCard;

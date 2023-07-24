import React from 'react';

import { ReactComponent as CompanyIcon } from '~assets/icon-company.svg';
import { ReactComponent as LocationIcon } from '~assets/icon-location.svg';
import { ReactComponent as TwitterIcon } from '~assets/icon-twitter.svg';
import { ReactComponent as WebsiteIcon } from '~assets/icon-website.svg';
import InfoItem, { InfoItemProps } from '~components/InfoItem';
import { LocalGithubUser } from '~types/Users';

import style from './UserInfo.module.scss';

export type UserStatProps = Pick<LocalGithubUser, 'blog' | 'company' | 'location' | 'twitter'>;

function UserInfo({ blog, company, location, twitter }: UserStatProps) {
  const items: InfoItemProps[] = [
    {
      icon: <LocationIcon />,
      text: location,
    },
    {
      icon: <CompanyIcon />,
      text: company,
      isLink: true,
    },
    {
      icon: <TwitterIcon />,
      text: twitter,
      isLink: true,
    },
    {
      icon: <WebsiteIcon />,
      text: blog,
      isLink: true,
    },
  ];

  return (
    <div className={style['userInfo']}>
      {items.map(({ icon, text, isLink }) => (
        <InfoItem key={text} icon={icon} text={text} isLink={isLink} />
      ))}
    </div>
  );
}

export default UserInfo;

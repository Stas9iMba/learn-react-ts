import { clsx } from 'clsx';
import React from 'react';

import style from './InfoItem.module.scss';

export type InfoItemProps = {
  icon: React.ReactNode;
  text?: string | null;
  isLink?: boolean;
};

function InfoItem({ icon, text, isLink }: InfoItemProps) {
  const currentText = text || 'Not Available';
  let currentHref = '';

  if (isLink && text) {
    currentHref = text.toString().startsWith('http') ? text.toString() : `https://${text}`;
  }

  return (
    <div className={clsx(style['infoItem'], !text && style['empty'])}>
      {icon}
      <div>
        {isLink && text ? (
          <a href={currentHref} target="_blank" rel="noreferrer" className={style['link']}>
            {currentText}
          </a>
        ) : (
          currentText
        )}
      </div>
    </div>
  );
}

export default InfoItem;

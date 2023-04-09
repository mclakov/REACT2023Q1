import React from 'react';
import style from './Card.module.scss';
import { TCardProps, TImage } from '../../types';

export const Card = ({ card, handleClick }: TCardProps) => {
  const { id, url_n, title, ownername, datetaken, views } = card;

  return (
    <div className={style.card} data-testid="card" onClick={() => handleClick(id)}>
      <img src={url_n} className={style.cardImg} />
      <div className={style.cardBody}>
        <p className={style.cardTitle}>{title}</p>
        <p className={style.cardOwner}>By {ownername}</p>
        <div className={style.cardDateViewWrapper}>
          <p className={style.cardDate}>{datetaken}</p>
          <div className={style.cardViews}>
            <div className={style.cardViewsImg}></div>
            {views}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

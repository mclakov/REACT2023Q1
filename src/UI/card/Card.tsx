import React from 'react';
import style from './Card.module.scss';
import { TCardProps } from '../../types';

const Card = (props: TCardProps) => {
  return (
    <div className={style.card} data-testid="card">
      <img src={props.url} className={style.cardImg}></img>
      <div className={style.cardBody}>
        <p className={style.cardTitle}>{props.title}</p>
        <p className={style.cardOwner}>By {props.author}</p>
        <div className={style.cardDateViewWrapper}>
          <p className={style.cardDate}>{props.date}</p>
          <p className={style.cardViews}>Views: {props.views}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;

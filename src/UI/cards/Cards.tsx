import React from 'react';
import Card from '../card/Card';
import style from './Cards.module.scss';
import { TCardsProps } from '../../types';

const Cards = (props: TCardsProps) => {
  return (
    <div className={style.cards} data-testid="cards">
      {props.cards && props.cards.map((card) => <Card key={card.id} {...card} />)}
    </div>
  );
};

export default Cards;

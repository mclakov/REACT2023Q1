import React, { Component } from 'react';
import style from './Card.module.scss';

type TCardProps = {
  id: string;
  title: string;
  author: string;
  url: string;
  date: string;
  views: string;
  likes: string;
  dislikes: string;
  comments: string;
};

type TCardState = Record<string, never>;

class Card extends Component<TCardProps, TCardState> {
  render() {
    return (
      <div className={style.card} data-testid="card">
        <img src={this.props.url} className={style.cardImg}></img>
        <div className={style.cardBody}>
          <p className={style.cardTitle}>{this.props.title}</p>
          <p className={style.cardOwner}>By {this.props.author}</p>
          <div className={style.cardDateViewWrapper}>
            <p className={style.cardDate}>{this.props.date}</p>
            <p className={style.cardViews}>Views: {this.props.views}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;

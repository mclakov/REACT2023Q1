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
  getImgUrl(name: string) {
    return new URL(name, import.meta.url).href;
  }

  render() {
    return (
      <div className={style.card}>
        <img
          src={this.getImgUrl(`../assets/jpg/${this.props.id}.jpg`)}
          className={style.cardImg}
        ></img>
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

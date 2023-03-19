import React, { Component } from 'react';
import Card from './Card';

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

type TCardsProps = {
  cards: TCardProps[];
};

type TCardsState = {
  state: Record<string, never>;
};

class Cards extends Component<TCardsProps, TCardsState> {
  render() {
    return (
      <div>
        {this.props.cards.map((card) => (
          <Card key={this.props.cards.indexOf(card)} {...card} />
        ))}
      </div>
    );
  }
}

export default Cards;

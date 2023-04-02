import React from 'react';
import style from './UserCard.module.scss';
import { TUserCardModel } from '../../types';
import avatar from '../../assets/data/avatar';

const UserCard = (props: TUserCardModel) => {

  console.log('props.photo[0]', props);
  const src = props.photo[0] ? URL.createObjectURL(props.photo[0]) : avatar;

  return (
    <div className={style.userCard} data-testid="user-card">
      <img src={src} className={style.userImg} />
      <div className={style.row}>
        <div className={`${style.col} ${style.userTitle}`}>First Name:</div>
        <div className={`${style.col} ${style.userText}`}>{props.firstName}</div>
      </div>
      <div className={style.row}>
        <div className={`${style.col} ${style.userTitle}`}>Last Name:</div>
        <div className={`${style.col} ${style.userText}`}>{props.lastName}</div>
      </div>
      <div className={style.row}>
        <div className={`${style.col} ${style.userTitle}`}>Birth Date:</div>
        <div className={`${style.col} ${style.userText}`}>{props.birthDate}</div>
      </div>
      <div className={style.row}>
        <div className={`${style.col} ${style.userTitle}`}>Gender:</div>
        <div className={`${style.col} ${style.userText}`}>{props.gender}</div>
      </div>
      <div className={style.row}>
        <div className={`${style.col} ${style.userTitle}`}>Country:</div>
        <div className={`${style.col} ${style.userText}`}>{props.country}</div>
      </div>
      <div className={style.row}>
        <div className={`${style.col} ${style.userTitle}`}>Agree:</div>
        <div className={`${style.col} ${style.userText}`}>{props.agree.toString()}</div>
      </div>
    </div>
  );
};

export default UserCard;

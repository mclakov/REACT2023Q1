import React from 'react';
import Form from '../../UI/form/Form';
import UserCard from '../../UI/usercard/UserCard';
import { addUser } from '../../features/form';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { TUserCardModel } from '../../types';
import style from './FormPage.module.scss';

export const FormPage = () => {
  const { formValues } = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();

  const setValues = (user: TUserCardModel) => {
    dispatch(addUser(user));
  };

  return (
    <div data-testid="form-page">
      <Form setValues={setValues} />
      <div className={style.userCards} data-testid="user-cards">
        {formValues && formValues.map((item, index) => <UserCard key={index} {...item} />)}
      </div>
    </div>
  );
};

export default FormPage;

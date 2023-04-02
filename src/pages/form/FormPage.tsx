import React, { useState } from 'react';
import Form from '../../UI/form/Form';
import UserCard from '../../UI/usercard/UserCard';
import style from './FormPage.module.scss';
import { TUserCardModel } from '../../types';

const FormPage = () => {
  const [formValues, setFormValues] = useState<TUserCardModel[]>([]);

  function setValues(data: TUserCardModel) {
    setFormValues([...formValues, data]);
  }

  return (
    <div data-testid="form-page">
      <Form setValues={setValues} />
      <div className={style.userCards} data-testid="user-cards">
        {formValues &&
          formValues.map((item: TUserCardModel, index: number) => (
            <UserCard key={index} {...item} />
          ))}
      </div>
    </div>
  );
};

export default FormPage;

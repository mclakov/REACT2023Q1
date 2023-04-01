import React from 'react';
import Form from '../../UI/form/Form';
import UserCard from '../../UI/usercard/UserCard';
import style from './FormPage.module.scss';

type TUserCardModel = {
  [key: string]: string | boolean;
};

type TFormPageState = {
  formValues: TUserCardModel[];
};

type TFormPageProps = Record<string, never>;

class FormPage extends React.Component<TFormPageProps, TFormPageState> {
  constructor(props: TFormPageProps) {
    super(props);
    this.state = {
      formValues: [],
    };
    this.setFormValues = this.setFormValues.bind(this);
  }

  setFormValues(data: TUserCardModel) {
    this.setState({
      formValues: [...this.state.formValues, data],
    });
  }

  render() {
    return (
      <div data-testid="form-page">
        <Form setFormValues={this.setFormValues} />
        <div className={style.userCards} data-testid="user-cards">
          {this.state.formValues &&
            this.state.formValues.map((item: TUserCardModel, index: number) => (
              <UserCard key={index} {...item} />
            ))}
        </div>
      </div>
    );
  }
}

export default FormPage;

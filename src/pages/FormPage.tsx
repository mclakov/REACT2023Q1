import React from 'react';
import Form from '../widgets/Form';
import UserCard from '../widgets/UserCard';
import style from './FormPage.module.scss';

type UserCardModel = {
  [key: string]: string | boolean;
};

type FormPageState = {
  formValues: UserCardModel[];
};

type FormPageProps = Record<string, never>;

class FormPage extends React.Component<FormPageProps, FormPageState> {
  constructor(props: FormPageProps) {
    super(props);
    this.state = {
      formValues: [],
    };
    this.setFormValues = this.setFormValues.bind(this);
  }

  setFormValues(data: UserCardModel) {
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
            this.state.formValues.map((item: UserCardModel, index: number) => (
              <UserCard key={index} {...item} />
            ))}
        </div>
      </div>
    );
  }
}

export default FormPage;

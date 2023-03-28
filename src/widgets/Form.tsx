import React from 'react';
import avatar from '../assets/data/avatar';

import style from './Form.module.scss';

type TUserCard = {
  firstName: string;
  lastName: string;
  birthDate: string;
  gender: string;
  country: string;
  photo: string;
  agree: boolean;
  [key: string]: string | boolean;
};

type TFormErrors = {
  [key: string]: string | boolean | undefined;
};

type TFormProps = {
  setFormValues: (value: TUserCard) => void;
};

type TFormState = {
  formValues: TUserCard;
  errors: TFormErrors;
  formMessage: boolean;
};

class Form extends React.Component<TFormProps, TFormState> {
  form: React.RefObject<HTMLFormElement>;
  firstNameInput: React.RefObject<HTMLInputElement>;
  lastNameInput: React.RefObject<HTMLInputElement>;
  countrySelect: React.RefObject<HTMLSelectElement>;
  birthDateInput: React.RefObject<HTMLInputElement>;
  maleInput: React.RefObject<HTMLInputElement>;
  femaleInput: React.RefObject<HTMLInputElement>;
  fileInput: React.RefObject<HTMLInputElement>;
  agreeInput: React.RefObject<HTMLInputElement>;

  constructor(props: TFormProps) {
    super(props);
    this.form = React.createRef();
    this.firstNameInput = React.createRef();
    this.lastNameInput = React.createRef();
    this.countrySelect = React.createRef();
    this.birthDateInput = React.createRef();
    this.maleInput = React.createRef();
    this.femaleInput = React.createRef();
    this.fileInput = React.createRef();
    this.agreeInput = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.hasError = this.hasError.bind(this);

    this.state = {
      formValues: {
        firstName: '',
        lastName: '',
        birthDate: '',
        gender: '',
        country: '',
        photo: '',
        agree: false,
      },
      errors: {},
      formMessage: false,
    };
  }

  async setFormState() {
    this.setState({
      formValues: structuredClone({
        firstName: (this.firstNameInput.current as HTMLInputElement).value,
        lastName: (this.lastNameInput.current as HTMLInputElement).value,
        birthDate: (this.birthDateInput.current as HTMLInputElement).value,
        gender: (this.maleInput.current as HTMLInputElement).checked ? 'male' : 'female',
        country: (this.countrySelect.current as HTMLSelectElement).value,
        photo:
          (this.fileInput.current?.files as FileList)[0] !== undefined
            ? URL.createObjectURL((this.fileInput.current?.files as FileList)[0])
            : avatar,
        agree: (this.agreeInput.current as HTMLInputElement).checked,
      }),
      errors: {},
      formMessage: false,
    });
  }

  async validateField(fieldName: string) {
    if (!this.state.formValues[fieldName]) {
      await this.setState({
        errors: { ...this.state.errors, [fieldName]: this.state.formValues[fieldName] },
      });
    }
  }

  async validate() {
    await this.setFormState();

    await this.validateField('firstName');
    await this.validateField('lastName');
    await this.validateField('birthDate');
    await this.validateField('agree');
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const name = event.target.name;
    this.setState({
      errors: { ...this.state.errors, [name]: undefined },
    });
  }

  hasError() {
    if (
      this.state?.errors.firstName === '' ||
      this.state?.errors.lastName === '' ||
      this.state?.errors.birthDate === '' ||
      this.state?.errors.agree !== undefined ||
      Object.keys(this.state.errors).length === 0
    ) {
      return true;
    }
    return false;
  }

  async handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    await this.validate();

    if (Object.keys(this.state.errors).length === 0) {
      this.props.setFormValues(this.state.formValues);

      this.form.current?.reset();
      setTimeout(() => {
        this.setState({ formMessage: true });
      }, 0);
      setTimeout(() => {
        this.setState({ formMessage: false });
      }, 3000);
      (this.agreeInput.current as HTMLInputElement).checked = false;
      (this.birthDateInput.current as HTMLInputElement).value = '';
    }
  }

  render() {
    return (
      <div data-testid="form" className={style.formWrapper}>
        <form className={style.form} onSubmit={this.handleSubmit} ref={this.form}>
          <label className={style.formLabel}>
            <p>
              First Name
              {this.state.errors.firstName === '' && (
                <span className={style.error} data-testid="errorFirstName">
                  * first name should be fill
                </span>
              )}
            </p>
            <input
              type="text"
              className={style.formInput}
              name="firstName"
              ref={this.firstNameInput}
              placeholder="First name"
              onChange={this.handleChange}
              autoComplete="off"
            />
          </label>
          <label className={style.formLabel}>
            <p>
              Last Name
              {this.state.errors.lastName === '' && (
                <span className={style.error} data-testid="errorLastName">
                  * last name should be fill
                </span>
              )}
            </p>
            <input
              type="text"
              className={style.formInput}
              name="lastName"
              ref={this.lastNameInput}
              onChange={this.handleChange}
              placeholder="Last name"
              autoComplete="off"
            />
          </label>
          <label className={style.formLabel}>
            <p>
              Birth Date
              {this.state?.errors.birthDate === '' && (
                <span className={style.error} data-testid="errorBirthDate">
                  * birth date should be fill
                </span>
              )}
            </p>
            <input
              type="date"
              className={style.formInput}
              name="birthDate"
              ref={this.birthDateInput}
              onChange={this.handleChange}
              data-testid="birthDate"
            />
          </label>
          <p className={style.radioWrapper}>
            <label className={style.formLabel}>Gender</label>
            <label>
              <input
                type="radio"
                name="gender"
                ref={this.maleInput}
                defaultValue="male"
                defaultChecked
                className={style.formRadio}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                ref={this.femaleInput}
                defaultValue="female"
                className={style.formRadio}
              />
              Female
            </label>
          </p>
          <label className={style.formLabel}>
            Country
            <select name="country" ref={this.countrySelect} className={style.formSelect}>
              <option value="Russia">Russia</option>
              <option value="Ukraine">Ukraine</option>
              <option value="Belarus">Belarus</option>
            </select>
          </label>
          <label className={style.formLabel}>
            Profile picture
            <input type="file" name="photo" ref={this.fileInput} className={style.fileInput} />
          </label>
          <label className={style.formLabel}>
            <input
              type="checkbox"
              className={style.formCheckbox}
              name="agree"
              ref={this.agreeInput}
              onChange={this.handleChange}
              data-testid="agree"
            />
            I agree to the Terms and Conditions
            {this.state?.errors.agree !== undefined && (
              <p className={style.error} data-testid="errorAgree">
                * agree should be checked
              </p>
            )}
          </label>
          <input
            className={style.formBtn}
            disabled={this.hasError()}
            type="submit"
            value="Submit"
            data-testid="formSubmit"
          />
          {this.state.formMessage && (
            <p style={{ color: 'green' }} className="form-add">
              User was created
            </p>
          )}
        </form>
      </div>
    );
  }
}

export default Form;

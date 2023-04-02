import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import style from './Form.module.scss';
import { TFormProps, TUserCard } from '../../types';

export const Form = ({ setValues }: TFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TUserCard>({
    defaultValues: {
      firstName: '',
      lastName: '',
      birthDate: '',
      agree: false,
    },
  });

  const onSubmit: SubmitHandler<TUserCard> = (data) => {
    setValues(structuredClone(data));
    reset();
  };

  const hasError = () => {
    if (Object.keys(errors).length !== 0) {
      return true;
    }
    return false;
  };

  return (
    <div data-testid="form" className={style.formWrapper}>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <label className={style.formLabel}>
          <p>
            First Name
            {errors?.firstName && (
              <span className={style.error} data-testid="errorFirstName">
                * first name should be fill
              </span>
            )}
          </p>
          <input
            type="text"
            className={style.formInput}
            {...register('firstName', { required: true })}
            placeholder="First name"
            autoComplete="off"
          />
        </label>
        <label className={style.formLabel}>
          <p>
            Last Name
            {errors?.lastName && (
              <span className={style.error} data-testid="errorLastName">
                * last name should be fill
              </span>
            )}
          </p>
          <input
            type="text"
            className={style.formInput}
            {...register('lastName', { required: true })}
            placeholder="Last name"
            autoComplete="off"
          />
        </label>
        <label className={style.formLabel}>
          <p>
            Birth Date
            {errors?.birthDate && (
              <span className={style.error} data-testid="errorBirthDate">
                * birth date should be fill
              </span>
            )}
          </p>
          <input
            type="date"
            className={style.formInput}
            {...register('birthDate', { required: true })}
            data-testid="birthDate"
          />
        </label>
        <p className={style.radioWrapper}>
          <label className={style.formLabel}>Gender</label>
          <label>
            <input
              type="radio"
              {...register('gender', { required: true })}
              value="male"
              defaultChecked
              className={style.formRadio}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              {...register('gender', { required: true })}
              value="female"
              className={style.formRadio}
            />
            Female
          </label>
        </p>
        <label className={style.formLabel}>
          Country
          <select {...register('country', { required: true })} className={style.formSelect}>
            <option value="Russia">Russia</option>
            <option value="Ukraine">Ukraine</option>
            <option value="Belarus">Belarus</option>
          </select>
        </label>
        <label className={style.formLabel}>
          Profile picture
          <input type="file" {...register('photo', { required: false })} className={style.fileInput} />
        </label>
        <label className={style.formLabel}>
          <input
            type="checkbox"
            className={style.formCheckbox}
            {...register('agree', { required: true })}
            data-testid="agree"
          />
          I agree to the Terms and Conditions
          {errors?.agree && (
            <p className={style.error} data-testid="errorAgree">
              * agree should be checked
            </p>
          )}
        </label>
        <input
          className={style.formBtn}
          disabled={hasError()}
          type="submit"
          value="Submit"
          data-testid="formSubmit"
        />
      </form>
    </div>
  );
};

export default Form;

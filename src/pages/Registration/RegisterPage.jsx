import { Formik, Form, Field } from 'formik';
import s from './RegisterPage.module.css';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/authOperations';
import { ParticlesDesign } from 'components/Particles';

export const SignUpPage = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={(values, { resetForm }) => {
          const item = {
            ...values,
          };
          dispatch(registerUser(item));
          resetForm();
        }}
      >
        <Form className={s.form}>
          <h2 className={s.title}>Register</h2>
          <label htmlFor="name" className={s.label}>
            Name
          </label>
          <Field
            className={s.input}
            type="text"
            name="name"
            id="name"
            placeholder="Please enter name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />

          <label htmlFor="email" className={s.label}>
            Email
          </label>
          <Field
            className={s.input}
            type="email"
            name="email"
            id="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            title="Invalid email address"
            placeholder="Please enter email"
            required
          />

          <label htmlFor="password" className={s.label}>
            Password
          </label>
          <Field
            className={s.input}
            type="password"
            name="password"
            id="password"
            pattern=".{4,}"
            title="Eight or more characters"
            placeholder="Please enter password"
            required
            autoComplete="true"
          />

          <button type="submit" className={s.button}>
            Sign Up
          </button>
        </Form>
      </Formik>
      <ParticlesDesign />
    </>
  );
};
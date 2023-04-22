import { Formik, Form, Field } from 'formik';
import s from '../Registration/RegisterPage.module.css';
import { useDispatch } from 'react-redux';
import { logInUser } from 'redux/auth/authOperations';
import { ParticlesDesign } from 'components/Particles';

export const LogInPage = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values, { resetForm }) => {
          const item = {
            ...values,
          };
          dispatch(logInUser(item));
          resetForm();
        }}
      >
        <Form className={s.form}>
          <h2 className={s.title}>Welcome back</h2>

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
            LOGIN
          </button>
        </Form>
      </Formik>
      <ParticlesDesign />
    </>
  );
};
import { useFormik } from 'formik';
import { Button } from '@mui/material';
import loginSchema from '../../schemas/loginSchema';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/authOperations';

import './Login.css';

const Login = () => {
  const dispatch = useDispatch();

  const onSubmit = async (values, actions) => {
    try {
      const { email, password } = values;
      dispatch(authOperations.login({ email, password }));
      await new Promise(resolve => setTimeout(resolve, 1000));
      actions.resetForm();
    } catch (error) {}
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit,
  });

  return (
    <form onSubmit={handleSubmit} className="Form">
      <label htmlFor="email">Email</label>
      <input
        value={values.email}
        id="email"
        type="email"
        placeholder="Enter your email"
        onBlur={handleBlur}
        onChange={handleChange}
        className={errors.email && touched.email ? 'input-error' : ''}
      />
      {errors.email && touched.email && <p className="error">{errors.email}</p>}
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        placeholder="Enter your password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.password && touched.password ? 'input-error' : ''}
      />
      {errors.password && touched.password && (
        <p className="error">{errors.password}</p>
      )}
      <Button
        disabled={isSubmitting}
        type="submit"
        variant="contained"
        color="success"
        style={{
          margin: '15px',
        }}
      >
        Login
      </Button>
    </form>
  );
};

export default Login;

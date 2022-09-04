import * as yup from 'yup';

const loginSchema = yup.object().shape({
  email: yup.string().email('Please enter a valid email').required('Required'),
  password: yup.string().min(6).matches().required('Required'),
});

export default loginSchema;

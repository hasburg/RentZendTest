import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Please enter your name'),
  email: Yup.string()
    .email('Please enter a valid email')
    .required('Please enter your email'),
  phone: Yup.string()
    // eslint-disable-next-line
    .matches(/^\(\d{3}\) \d{3}\-\d{4}$/, 'Please enter a valid number')
    .required('Please enter your number'),
  address: Yup.string()
    .required('Please enter your address'),
  zipCode: Yup.string()
    .matches(/^\d{5}$/, 'Please enter a valid zip code')
    .required('Please enter your zip code'),
  photo: Yup.mixed()
    .required('Please upload your photo')
}); 
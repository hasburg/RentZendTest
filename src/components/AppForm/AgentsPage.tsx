import React from 'react';
import { Formik } from 'formik';
import './AgentsPage.sass'
import { gql } from 'apollo-boost';
import { useMutation } from 'react-apollo';
import AgentsForm from './AgentsForm/AgentsForm';
import { validationSchema } from './AgentsForm/validator';

const SEND_FORM = gql`
  mutation SendForm($formData: FormData) {
    sendForm(formData: $formData) {
      ok
    }
  }
`;

const initialValues = {
  name: '',
  email: '',
  phone: '',
  address: '',
  zipCode: '',
  photo: null
};

const AgentsPage = () => {
  const [sendForm] = useMutation(SEND_FORM);

  const handleSubmit = async (formData, { resetForm }) => {
    resetForm();
    const { data } = await sendForm({ variables: { formData } });
    if (data.sendForm.ok) {
      alert('We will contact you soon');
    } else {
      alert('An error was occured');
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {AgentsForm}
    </Formik>
  );
};

export default AgentsPage;

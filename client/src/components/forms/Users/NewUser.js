import React, { useState } from 'react';
import UserForm from './UserForm';

const NewUser = ({ addForm, eventState, setEventState }) => {
  const [responseResult, setResponseResult] = useState('');
  const [validate, setValidate] = useState({
    isValid: '',
    email: '',
    password: '',
    confirmPassword: '',
    first_name: '',
    last_name: '',
    role: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    validate.email &&
    validate.password &&
    validate.confirmPassword &&
    validate.first_name &&
    validate.last_name &&
    validate.role
      ? setValidate((prevState) => ({
          ...prevState,
          isValid: true,
        }))
      : setValidate((prevState) => ({
          ...prevState,
          isValid: false,
        }));

    if (validate.isValid === true) {
      fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(eventState),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res) {
            setResponseResult('success');
            setTimeout(() => window.location.reload(), 2000);
          } else {
            setResponseResult('fail');
          }
        })
        .catch((err) => console.log(err));

      setEventState({
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        role: '',
        brand_id: '',
      });
    } else {
      setResponseResult('fail');
    }

    console.log(responseResult);
    console.log(eventState);
    console.log(validate);
  };

  return (
    <>
      <UserForm
        addForm={addForm}
        eventState={eventState}
        setEventState={setEventState}
        responseResult={responseResult}
        handleSubmit={handleSubmit}
        action='Create Account'
        message='Account Created!'
        validate={validate}
        setValidate={setValidate}
      />
    </>
  );
};

export default NewUser;

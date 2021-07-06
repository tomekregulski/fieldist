import React, { useState } from 'react';
import UserForm from './UserForm';

const EditUser = ({ addForm, editForm, eventState, setEventState }) => {
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
      fetch(`/api/users/${editForm.id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(eventState),
      })
        .then((res) => res.json())
        .then((res) => {
          res ? setResponseResult('success') : setResponseResult('fail');
          setTimeout(() => window.location.reload(), 2000);
        })
        .catch((err) => console.log(err));
    } else {
      setResponseResult('fail');
    }
  };

  return (
    <>
      <UserForm
        addForm={addForm}
        eventState={eventState}
        setEventState={setEventState}
        responseResult={responseResult}
        handleSubmit={handleSubmit}
        action='Update Account'
        message='Account Updated!'
        editForm={editForm}
        validate={validate}
        setValidate={setValidate}
      />
    </>
  );
};

export default EditUser;

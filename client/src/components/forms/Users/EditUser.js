import React, { useCallback, useState } from 'react';
import UserForm from './UserForm';

const EditUser = ({
  onAdd,
  editForm,
  eventState,
  setEventState,
  setEditForm,
}) => {
  const [responseResult, setResponseResult] = useState('');
  const [validate, setValidate] = useState({
    email: Boolean(editForm.email),
    password: '',
    confirmPassword: '',
    first_name: Boolean(editForm.first_name),
    last_name: Boolean(editForm.last_name),
    role: Boolean(editForm.role),
  });

  const isValid = useCallback(
    () => Object.values(validate).every((item) => item),
    [validate]
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isValid()) {
      fetch(`/api/users/${editForm.id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(eventState),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(eventState);
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
        onAdd={onAdd}
        eventState={eventState}
        setEventState={setEventState}
        responseResult={responseResult}
        handleSubmit={handleSubmit}
        action='Update Account'
        message='Account Updated!'
        editForm={editForm}
        setEditForm={setEditForm}
        validate={validate}
        setValidate={setValidate}
      />
    </>
  );
};

export default EditUser;

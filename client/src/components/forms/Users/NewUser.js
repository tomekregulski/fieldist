
import React, { useCallback, useState } from 'react';
import UserForm from './UserForm';
import postHeader from '../../../services/post-header';

const NewUser = ({ onAdd, eventState, setEventState }) => {
  const [responseResult, setResponseResult] = useState('');
  const [validate, setValidate] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    first_name: '',
    last_name: '',
    role: '',
  });

  const isValid = useCallback(
    () => Object.values(validate).every((item) => item),
    [validate]
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isValid()) {
      fetch('/api/users', {
        method: 'POST',
        headers: postHeader(),
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
        action='Create Account'
        message='Account Created!'
        validate={validate}
        setValidate={setValidate}
      />
    </>
  );
};

export default NewUser;

import React, { useState } from 'react';
import RegionForm from './RegionForm';

const NewRegion = ({ addForm, eventState, setEventState }) => {
  const [responseResult, setResponseResult] = useState('');
  const [validate, setValidate] = useState({
    isValid: '',
    name: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    validate.name
      ? setValidate((prevState) => ({
          ...prevState,
          isValid: true,
        }))
      : setValidate((prevState) => ({
          ...prevState,
          isValid: false,
        }));
    console.log(validate);

    if (validate.isValid === true) {
      fetch('/api/regions', {
        method: 'POST',
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

      setEventState({
        name: '',
      });
    } else {
      setResponseResult('fail');
    }
  };
  return (
    <>
      <RegionForm
        addForm={addForm}
        eventState={eventState}
        setEventState={setEventState}
        responseResult={responseResult}
        handleSubmit={handleSubmit}
        action='Add Region'
        message='Region Added!'
        validate={validate}
        setValidate={setValidate}
      />
    </>
  );
};

export default NewRegion;

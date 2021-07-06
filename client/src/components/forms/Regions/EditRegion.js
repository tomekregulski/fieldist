import React, { useState } from 'react';
import RegionForm from './RegionForm';

const EditRegion = ({ addForm, editForm, eventState, setEventState }) => {
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
          isValid: true,
        }));

    if (validate.isValid === true) {
      fetch(`/api/regions/${editForm.id}`, {
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
      <RegionForm
        addForm={addForm}
        eventState={eventState}
        setEventState={setEventState}
        responseResult={responseResult}
        handleSubmit={handleSubmit}
        action='Rename Region'
        message='Region Renamed'
        editForm={editForm}
        validate={validate}
        setValidate={setValidate}
      />
    </>
  );
};

export default EditRegion;

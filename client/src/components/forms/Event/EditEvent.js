import React, { useState } from 'react';
import EventForm from './EventForm';

const EditEvent = ({ addForm, editForm, eventState, setEventState }) => {
  const [responseResult, setResponseResult] = useState('');
  const [validate, setValidate] = useState({
    isValid: '',
    brand_id: Boolean(eventState.brand_id),
    date: '',
    campaign_id: '',
    venue_id: '',
    user_id: '',
    start_time: '',
    duration: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    switch (eventState.type) {
      case 'demo':
        validate.date &&
        validate.start_time &&
        validate.duration &&
        validate.user_id
          ? setValidate((prevState) => ({
              ...prevState,
              isValid: true,
            }))
          : setValidate((prevState) => ({
              ...prevState,
              isValid: false,
            }));

        break;
      case 'audit':
        validate.brand_id && validate.user_id
          ? setValidate((prevState) => ({
              ...prevState,
              isValid: true,
            }))
          : setValidate((prevState) => ({
              ...prevState,
              isValid: false,
            }));

        break;
      default:
        console.log(validate);
        break;
    }

    // if (validate.isValid === true) {
    fetch(`/api/${editForm.type}s/${editForm.id}`, {
      method: 'PUT',
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
    // } else {
    // setResponseResult('fail');
    // }
  };

  return (
    <>
      <EventForm
        addForm={addForm}
        eventState={eventState}
        setEventState={setEventState}
        responseResult={responseResult}
        handleSubmit={handleSubmit}
        action='Edit Event'
        message='Event Edited'
        editForm={editForm}
        validate={validate}
        setValidate={setValidate}
      />
    </>
  );
};

export default EditEvent;

import React, { useState } from 'react';
import EventForm from './EventForm';

const EditEvent = ({ addForm, editForm, eventState, setEventState }) => {
  const [responseResult, setResponseResult] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(eventState);

    fetch(`/api/${editForm.type}s/${editForm.id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(eventState),
    })
      .then((res) => res.json())
      .then((res) =>
        res ? setResponseResult('success') : setResponseResult('fail')
      )
      .catch((err) => console.log(err));

    setTimeout(() => window.location.reload(), 2000);
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
      />
    </>
  );
};

export default EditEvent;

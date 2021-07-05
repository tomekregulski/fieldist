import React, { useState } from 'react';
import EventForm from './EventForm';

const NewEvent = ({ addForm, eventState, setEventState }) => {
  const [responseResult, setResponseResult] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/api/${eventState.type}s`, {
      method: 'POST',
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

    setEventState({
      type: '',
      brand_id: '',
      date: '',
      campaign_id: '',
      venue_id: '',
      user_id: '',
      start_time: '',
      duration: '',
    });

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
        action='Create Event'
        message='Event Added!'
      />
    </>
  );
};

export default NewEvent;
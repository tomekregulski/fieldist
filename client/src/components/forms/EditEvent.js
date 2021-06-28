import React, { useState } from 'react';
import EventForm from './EventForm';

import './forms.css';

const EditEvent = ({ addForm, id }) => {
  const [responseResult, setResponseResult] = useState('');
  const [eventState, setEventState] = useState({
    type: '',
    brand_id: '',
    date: '',
    campaign_id: '',
    venue_id: '',
    user_id: '',
    start_time: '',
    duration: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/api/${eventState.type}s/${id}`, {
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

    setTimeout(() => {
      window.location.reload();
    }, 2000);
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
      />
    </>
  );
};

export default EditEvent;

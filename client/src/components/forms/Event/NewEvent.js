import React, { useCallback, useState } from 'react';
import EventForm from './EventForm';

const NewEvent = ({
  onAdd,
  eventState,
  setEventState,
  editForm,
  setEditForm,
}) => {
  const [responseResult, setResponseResult] = useState('');
  const [validateDemo, setValidateDemo] = useState({
    date: Boolean(eventState.date),
    user_id: Boolean(eventState.user_id),
    start_time: Boolean(eventState.start_time),
    duration: Boolean(eventState.duration),
  });

  const [validateAudit, setValidateAudit] = useState({
    brand_id: Boolean(eventState.brand_id),
    user_id: Boolean(eventState.user_id),
  });

  const isValidDemo = useCallback(
    () => Object.values(validateDemo).every((item) => item),
    [validateDemo]
  );

  const isValidAudit = useCallback(
    () => Object.values(validateAudit).every((item) => item),
    [validateAudit]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(eventState);

    if (
      (eventState.type === 'demo' && isValidDemo()) ||
      (eventState.type === 'audit' && isValidAudit())
    ) {
      fetch(`/api/${eventState.type}s`, {
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
    } else {
      setResponseResult('fail');
    }
  };

  return (
    <>
      <EventForm
        onAdd={onAdd}
        eventState={eventState}
        setEventState={setEventState}
        editForm={editForm}
        setEditForm={setEditForm}
        responseResult={responseResult}
        handleSubmit={handleSubmit}
        action='Create Event'
        message='Event Added!'
        validateDemo={validateDemo}
        setValidateDemo={setValidateDemo}
        validateAudit={validateAudit}
        setValidateAudit={setValidateAudit}
      />
    </>
  );
};

export default NewEvent;

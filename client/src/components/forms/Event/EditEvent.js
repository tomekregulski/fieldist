import React, { useCallback, useState } from 'react';
import EventForm from './EventForm';
import postHeader from '../../../services/post-header';

const EditEvent = ({
  onAdd,
  editForm,
  eventState,
  setEventState,
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

    if (
      (eventState.type === 'demo' && isValidDemo()) ||
      (eventState.type === 'audit' && isValidAudit())
    ) {
      fetch(`/api/${editForm.type}s/${editForm.id}`, {
        method: 'PUT',
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
      <EventForm
        onAdd={onAdd}
        eventState={eventState}
        setEventState={setEventState}
        responseResult={responseResult}
        handleSubmit={handleSubmit}
        action='Edit Event'
        message='Event Edited'
        editForm={editForm}
        setEditForm={setEditForm}
        validateDemo={validateDemo}
        setValidateDemo={setValidateDemo}
        validateAudit={validateAudit}
        setValidateAudit={setValidateAudit}
      />
    </>
  );
};

export default EditEvent;

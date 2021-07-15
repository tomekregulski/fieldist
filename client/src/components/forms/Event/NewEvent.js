import React, { useCallback, useState, useEffect } from 'react';
import EventForm from './EventForm';
import postHeader from '../../../services/post-header';

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
      fetch('/api/reports', {
        method: 'POST',
        headers: postHeader(),
        body: JSON.stringify({
          name: 'Report',
          sales: 0,
          interactions: 0,
          overall: 0,
          comments: '',
          check_in: {
            status: '',
            location: {
              lat: '',
              lng: '',
              distance: '',
            },
            timestamp: '',
            user: {},
          },
          check_out: '',
          photos: [],
          admin_review: '',
          admin_rating: 0,
          admin_comments: '',
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          fetch(`/api/${eventState.type}s`, {
            method: 'POST',
            headers: postHeader(),
            body: JSON.stringify({ ...eventState, report_template_id: res.id }),
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
        })
        .catch((err) => console.log(err));
    } else {
      setResponseResult('fail');
    }
  };

  useEffect(() => console.log('eventState: ', eventState), [eventState]);

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

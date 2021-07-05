import React, { useState } from 'react';
import CampaignForm from './CampaignForm';

const EditCampaign = ({ addForm, editForm, eventState, setEventState }) => {
  const [responseResult, setResponseResult] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(eventState);

    fetch(`/api/campaigns/${editForm.id}`, {
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
      <CampaignForm
        addForm={addForm}
        eventState={eventState}
        setEventState={setEventState}
        responseResult={responseResult}
        handleSubmit={handleSubmit}
        action='Edit Campaign'
        message='Event Edited'
        editForm={editForm}
      />
      {console.log(editForm)}
    </>
  );
};

export default EditCampaign;

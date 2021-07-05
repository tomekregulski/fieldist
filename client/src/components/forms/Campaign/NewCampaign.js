import React, { useState } from 'react';
import CampaignForm from './CampaignForm';

const NewCampaign = ({ addForm, eventState, setEventState }) => {
  const [responseResult, setResponseResult] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/api/campaigns`, {
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
      name: '',
      brand_id: '',
    });

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
        action='Create Campaign'
        message='Campaign Added!'
      />
    </>
  );
};

export default NewCampaign;

import React, { useState } from 'react';
import CampaignForm from './CampaignForm';

const NewCampaign = ({ addForm, eventState, setEventState }) => {
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
          isValid: false,
        }));

    if (validate.isValid === true) {
      fetch(`/api/campaigns`, {
        method: 'POST',
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

      setEventState({
        name: '',
        brand_id: '',
      });
    } else {
      setResponseResult('fail');
    }
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
        validate={validate}
        setValidate={setValidate}
      />
    </>
  );
};

export default NewCampaign;

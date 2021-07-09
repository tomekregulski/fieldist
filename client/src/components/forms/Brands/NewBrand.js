import React, { useCallback, useState } from 'react';
import BrandForm from './BrandForm';
import postHeader from '../../../services/post-header';

const NewBrand = ({ onAdd, eventState, setEventState }) => {
  const [responseResult, setResponseResult] = useState('');
  const [validate, setValidate] = useState({
    name: '',
  });

  const isValid = useCallback(
    () => Object.values(validate).every((item) => item),
    [validate]
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isValid()) {
      fetch('/api/brands', {
        method: 'POST',
        headers: postHeader(),
        body: JSON.stringify(eventState),
      })
        .then((res) => res.json())
        .then((res) => {
          res ? setResponseResult('success') : setResponseResult('fail');
          setTimeout(() => window.location.reload(), 2000);
        })
        .catch((err) => console.log(err));
    } else {
      setResponseResult('fail');
    }
  };

  return (
    <>
      <BrandForm
        onAdd={onAdd}
        eventState={eventState}
        setEventState={setEventState}
        responseResult={responseResult}
        handleSubmit={handleSubmit}
        action='Add Brand'
        message='Brand Added!'
        validate={validate}
        setValidate={setValidate}
      />
    </>
  );
};

export default NewBrand;

import React, { useCallback, useState } from 'react';
import RegionForm from './RegionForm';

const EditRegion = ({
  onAdd,
  editForm,
  eventState,
  setEventState,
  setEditForm,
}) => {
  const [responseResult, setResponseResult] = useState('');
  const [validate, setValidate] = useState({
    name: Boolean(editForm.name),
  });

  const isValid = useCallback(
    () => Object.values(validate).every((item) => item),
    [validate]
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isValid()) {
      fetch(`/api/regions/${editForm.id}`, {
        method: 'PUT',
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
    } else {
      setResponseResult('fail');
    }
  };

  return (
    <>
      <RegionForm
        onAdd={onAdd}
        eventState={eventState}
        setEventState={setEventState}
        responseResult={responseResult}
        handleSubmit={handleSubmit}
        action='Rename Region'
        message='Region Renamed'
        editForm={editForm}
        setEditForm={setEditForm}
        validate={validate}
        setValidate={setValidate}
      />
    </>
  );
};

export default EditRegion;

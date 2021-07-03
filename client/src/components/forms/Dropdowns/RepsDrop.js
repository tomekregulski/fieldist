import React, { useState, useEffect, useMemo } from 'react';
import Form from 'react-bootstrap/Form';

const RepsDrop = ({ handleChange, value }) => {
  const [reps, setReps] = useState([]);

  useEffect(() => {
    fetch('/api/users/reps')
      .then((res) => res.json())
      .then((response) => setReps(response.map((res) => res)))
      .catch((err) => console.log(err));
  }, []);

  const currValue = useMemo(
    () =>
      value && reps.length
        ? reps.find(({ id }) => id.toString() === value).name
        : 'Select a Rep',
    [reps, value]
  );
  return (
    <>
      <Form.Group>
        <Form.Label>Brand Ambassador</Form.Label>
        <Form.Control
          as='select'
          name='user_id'
          value={value}
          onChange={handleChange}
        >
          <option>{currValue}</option>
          {reps.map((r) => (
            <option key={r.id} value={r.id}>
              {`${r.first_name} ${r.last_name}`}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
    </>
  );
};

export default RepsDrop;

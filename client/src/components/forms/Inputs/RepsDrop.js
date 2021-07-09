import React, { useState, useEffect, useMemo } from 'react';
import Form from 'react-bootstrap/Form';
import authHeader from '../../../services/auth-header';

const RepsDrop = ({ handleChange, value, editForm }) => {
  const [reps, setReps] = useState([]);

  useEffect(() => {
    fetch('/api/users/reps', {
      method: 'GET',
      headers: authHeader(),
      mode: 'cors',
      cache: 'default',
    })
      .then((res) => res.json())
      .then((response) => setReps(response.map((res) => res)))
      .catch((err) => console.log(err));
  }, []);

  const currValue = useMemo(
    () =>
      editForm === undefined
        ? value && reps.length
          ? reps.find(({ id }) => id.toString() === value).name
          : 'Select a Rep'
        : 'Select a Rep',
    [reps, value, editForm]
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

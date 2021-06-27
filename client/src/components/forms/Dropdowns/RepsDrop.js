import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';

const RepsDrop = ({ handleChange }) => {
  const [reps, setReps] = useState([]);

  useEffect(() => {
    fetch('/api/users/reps')
      .then((res) => res.json())
      .then((response) => setReps(response.map((res) => res)))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Form.Group>
        <Form.Label>Brand Ambassador</Form.Label>
        <Form.Control as='select' name='user_id' onChange={handleChange}>
          <option>Select a Brand Ambassador</option>
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

import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import authHeader from '../../../services/auth-header';

const RoleDrop = ({ handleChange, value, editForm }) => {
  const [role, setRole] = useState([]);

  useEffect(() => {
    fetch('/api/users', {
      method: 'GET',
      headers: authHeader(),
      mode: 'cors',
      cache: 'default',
    })
      .then((res) => res.json())
      .then((response) => response.map((res) => res.role))
      .then((res) => {
        let noRepeats = new Set(res);
        return setRole([...noRepeats]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Form.Group>
        <Form.Label>Role</Form.Label>
        <Form.Control
          as='select'
          name='role'
          value={value}
          onChange={handleChange}
          editForm={editForm}
        >
          <option>{value !== '' ? value : 'Select a Role'}</option>
          <>
            {role.map((r) => (
              <option key={r}>{r}</option>
            ))}
          </>
        </Form.Control>
      </Form.Group>
    </>
  );
};

export default RoleDrop;

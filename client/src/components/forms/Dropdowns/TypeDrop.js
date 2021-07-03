import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';

const TypeDrop = ({ handleChange, value }) => {
  const [type, setType] = useState([]);

  useEffect(() => {
    fetch('api/demos')
      .then((res) => res.json())
      .then((response) => response.map((res) => res.type))
      .then((res) => {
        let noRepeats = new Set(res);
        return setType([...noRepeats]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Form.Group>
        <Form.Label>Type</Form.Label>
        <Form.Control
          as='select'
          name='type'
          value={value}
          onChange={handleChange}
        >
          <option>{value !== '' ? value : 'Select a Type'}</option>
          <>
            {type.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </>
        </Form.Control>
      </Form.Group>
    </>
  );
};

export default TypeDrop;

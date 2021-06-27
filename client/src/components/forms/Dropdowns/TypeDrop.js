import React from 'react';
import Form from 'react-bootstrap/Form';

const TypeDrop = ({ handleChange, value }) => {
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
          <option>Select a Type</option>
          <option>Demo</option>
          <option>Audit</option>
        </Form.Control>
      </Form.Group>
    </>
  );
};

export default TypeDrop;

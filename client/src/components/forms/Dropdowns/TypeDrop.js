import React from 'react';
import Form from 'react-bootstrap/Form';

const TypeDrop = () => {
  return (
    <>
      <Form.Group>
        <Form.Label>Type</Form.Label>
        <Form.Control as='select' name='type'>
          <option>Select a Type</option>
          <option>Demo</option>
          <option>Audit</option>
        </Form.Control>
      </Form.Group>
    </>
  );
};

export default TypeDrop;

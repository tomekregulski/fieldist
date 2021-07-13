import React from 'react';
import Form from 'react-bootstrap/Form';

const Textarea = ({ label, name, placeholder, height, handleChange }) => {
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        as='textarea'
        name={name}
        placeholder={placeholder}
        style={{ height: height }}
        onChange={handleChange}
      />
    </Form.Group>
  );
};

export default Textarea;

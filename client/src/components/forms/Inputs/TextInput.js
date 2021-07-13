import React from 'react';
import Form from 'react-bootstrap/Form';

const TextInput = ({ handleChange, label, type, name, value, placeholder }) => {
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        name={name}
        onChange={handleChange}
        defaultValue={value}
        placeholder={placeholder}
      />
    </Form.Group>
  );
};

export default TextInput;

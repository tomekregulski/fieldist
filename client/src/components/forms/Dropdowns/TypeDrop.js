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
          <option>{value !== '' ? value : 'Select a Type'}</option>
          {value === '' && (
            <>
              <option>Audit</option>
              <option>Demo</option>
            </>
          )}
        </Form.Control>
      </Form.Group>
    </>
  );
};

export default TypeDrop;

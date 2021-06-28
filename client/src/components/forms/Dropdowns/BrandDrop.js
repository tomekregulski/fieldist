import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';

const BrandDrop = ({ handleChange, value }) => {
  const [brand, setBrand] = useState([]);

  useEffect(() => {
    fetch('/api/brands')
      .then((res) => res.json())
      .then((response) => setBrand(response.map((res) => res)))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Form.Group>
        <Form.Label>Brand</Form.Label>
        <Form.Control
          as='select'
          name='brand_id'
          value={value}
          onChange={handleChange}
        >
          <option>{value !== '' ? value : 'Select a Brand'}</option>
          {brand.map((b) => (
            <option key={b.id} value={b.id}>
              {b.name}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
    </>
  );
};

export default BrandDrop;

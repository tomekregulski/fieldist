import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';

const BrandDrop = () => {
  const [brand, setBrand] = useState({ brands: [] });

  useEffect(() => {
    fetch('/api/brands')
      .then((res) => res.json())
      .then((response) => {
        setBrand(response.map((res) => res));
      })
      .catch((err) => console.log(err));
  });

  return (
    <>
      <Form.Group>
        <Form.Label>Brand</Form.Label>
        <Form.Control as='select' name='brand_id'>
          <option>Select a Brand</option>
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

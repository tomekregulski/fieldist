import React, { useState, useEffect, useMemo } from 'react';
import Form from 'react-bootstrap/Form';

const BrandDrop = ({ handleChange, value }) => {
  const [brand, setBrand] = useState([]);

  useEffect(() => {
    fetch('/api/brands')
      .then((res) => res.json())
      .then((response) => setBrand(response.map((res) => res)))
      .catch((err) => console.log(err));
  }, []);

  const currValue = useMemo(
    () =>
      value && brand.length
        ? brand.find(({ id }) => id.toString() === value).name
        : 'Select a Brand',
    [brand, value]
  );

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
          <option>{currValue}</option>
          {brand.map((b) => {
            console.log(b.id);
            return (
              <option key={b.id} value={b.id}>
                {b.name}
              </option>
            );
          })}
          {console.log(value)}
        </Form.Control>
      </Form.Group>
    </>
  );
};

export default BrandDrop;

import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';

const VenueDrop = ({ handleChange, value }) => {
  const [venue, setVenue] = useState([]);

  useEffect(() => {
    fetch('/api/venues')
      .then((res) => res.json())
      .then((response) => setVenue(response.map((res) => res)))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Form.Group>
        <Form.Label>Venue</Form.Label>
        <Form.Control
          as='select'
          name='venue_id'
          value={value}
          onChange={handleChange}
        >
          <option>{value !== '' ? value : 'Select a Venue'}</option>
          {venue.map((v) => (
            <option key={v.id} value={v.id}>
              {v.name}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
    </>
  );
};

export default VenueDrop;

import React, { useState, useEffect, useMemo } from 'react';
import Form from 'react-bootstrap/Form';

const VenueDrop = ({ handleChange, value, editForm }) => {
  const [venue, setVenue] = useState([]);

  useEffect(() => {
    fetch('/api/venues')
      .then((res) => res.json())
      .then((response) => setVenue(response.map((res) => res)))
      .catch((err) => console.log(err));
  }, []);

  const currValue = useMemo(
    () =>
      editForm === undefined
        ? value && venue.length
          ? venue.find(({ id }) => id.toString() === value).name
          : 'Select a Venue'
        : editForm.venue,
    [venue, value, editForm]
  );

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
          <option>{currValue}</option>
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

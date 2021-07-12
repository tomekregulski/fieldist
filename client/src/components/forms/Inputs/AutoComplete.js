import React, { useState, useEffect, useCallback } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { usePlacesWidget } from 'react-google-autocomplete';
import postHeader from '../../../services/post-header';

const AutoComplete = () => {
  const [venue, setVenue] = useState({
    name: '',
    address: '',
    address_components: [],
    geometry: {
      lat: '',
      lng: '',
    },
    region_id: 1,
  });

  const key = 'AIzaSyDlXBmR1YPuedZSvjL1Jxbk6OuSmuILHsE';

  const { ref } = usePlacesWidget({
    apiKey: key,
    onPlaceSelected: (place) => {
      console.log(place);
      setVenue((prevState) => ({
        ...prevState,
        name: document.getElementById('add_venue').value,
        address: place.formatted_address,
        address_components: place.address_components,
        geometry: {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        },
      }));
    },
    options: {
      types: ['establishment'],
    },
  });

  const handleSubmit = () => {
    fetch('/api/venues', {
      method: 'POST',
      headers: postHeader(),
      body: JSON.stringify(venue),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  };

  useEffect(() => console.log(venue), [venue]);

  return (
    <Form.Group>
      <Form.Label>New Venue</Form.Label>
      <div className='d-flex'>
        <Form.Control id='add_venue' ref={ref} type='text' name='add_venue' />
        <Button onClick={handleSubmit}>Add</Button>
      </div>
    </Form.Group>
  );
};

export default AutoComplete;

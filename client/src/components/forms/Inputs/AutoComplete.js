import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { usePlacesWidget } from 'react-google-autocomplete';
import Geocode from 'react-geocode';
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
    region_id: '',
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
      }));

      Geocode.setApiKey(key);
      Geocode.fromAddress(place).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          setVenue((prevState) => ({
            ...prevState,
            geometry: {
              lat: lat,
              lng: lng,
            },
          }));
        },
        (err) => {
          console.error(err);
        }
      );
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
    });
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

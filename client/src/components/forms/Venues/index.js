import React, { useState, useEffect, useCallback } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { usePlacesWidget } from 'react-google-autocomplete';
import postHeader from '../../../services/post-header';
import { TextInput, Dropdown } from '..';

const VenueForm = ({ setShowVenue }) => {
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

  const handleChange = (e) =>
    setVenue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  const handleSubmit = () => {
    fetch('/api/venues', {
      method: 'POST',
      headers: postHeader(),
      body: JSON.stringify(venue),
    })
      .then((res) => {
        res.json();
        setShowVenue(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => console.log(venue), [venue]);

  return (
    <div className='venue-form'>
      <div className='form-header'>
        <h3>Add Venue</h3>
        <hr />
      </div>
      <TextInput
        label='Name'
        type='text'
        name='name'
        placeholder='ex. Whole Foods - Gowanus'
        handleChange={handleChange}
      />
      <Form.Group>
        <Form.Label>New Venue</Form.Label>
        <Form.Control id='add_venue' ref={ref} type='text' name='add_venue' />
      </Form.Group>
      <div className='row'>
        <div className='col-12 col-lg-3'>
          <Dropdown
            endpoint='/api/regions'
            defaultOpt='Select a Region'
            label='Region'
            name='region_id'
            handleChange={handleChange}
          />
        </div>
        <div className='col-12 col-lg-9 d-flex justify-content-end align-items-center'>
          <Button onClick={handleSubmit}>Add</Button>
        </div>
      </div>
    </div>
  );
};

export default VenueForm;

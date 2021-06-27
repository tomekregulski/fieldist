import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {
  TypeDrop,
  BrandDrop,
  VenueDrop,
  RepsDrop,
  CampaignsDrop,
} from './Dropdowns';

import './forms.css';

const NewEvent = () => {
  const [responseResult, setResponseResult] = useState('');
  const [eventState, setEventState] = useState({
    type: '',
    brand_id: '',
    date: '',
    campaign_id: '',
    venue_id: '',
    user_id: '',
    start_time: '',
    duration: '',
  });

  const handleChange = (e) => {
    setEventState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(eventState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (eventState.type === 'Demo') {
      fetch('/api/demos', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(eventState),
      })
        .then((res) => res.json())
        .then((res) =>
          res ? setResponseResult('success') : setResponseResult('fail')
        )
        .catch((err) => console.log(err));
    } else if (eventState.type === 'Audit') {
      fetch('/api/audits', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(eventState),
      })
        .then((res) => res.json())
        .then((res) =>
          res ? setResponseResult('success') : setResponseResult('fail')
        )
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className='modal-container d-flex justify-content-center align-items-center'>
      <Form
        onSubmit={handleSubmit}
        className='modal-form d-flex flex-column justify-content-between p-5'
      >
        <div>
          <div className='form-header'>
            <h1>New Event</h1>
            <hr />
          </div>
          <div className='form-grid container'>
            <div className='row'>
              <div className='col-12 col-lg-6'>
                <TypeDrop handleChange={handleChange} />
                <VenueDrop handleChange={handleChange} />
                <div className='date-time container'>
                  <div className='row'>
                    <div className='col-12 col-lg-4 p-0 pr-1'>
                      <Form.Group controlId='demo_start_time'>
                        <Form.Label>Date</Form.Label>
                        <Form.Control
                          type='date'
                          name='date'
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </div>
                    <div className='col col-lg-4 p-0 pr-1'>
                      <Form.Group controlId='demo_start_time'>
                        <Form.Label>Start Time</Form.Label>
                        <Form.Control
                          type='time'
                          placeholder='Start Time'
                          name='start_time'
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </div>
                    <div className='col col-lg-4 p-0'>
                      <Form.Group controlId='demo_duration'>
                        <Form.Label>Duration</Form.Label>
                        <div className='d-flex align-items-baseline'>
                          <Form.Control
                            type='number'
                            placeholder='0'
                            name='duration'
                            onChange={handleChange}
                          />
                          <span className='ml-2'>hours</span>
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col col-lg-6'>
                <BrandDrop handleChange={handleChange} />
                <RepsDrop handleChange={handleChange} />
                <CampaignsDrop handleChange={handleChange} />
              </div>
            </div>
          </div>
        </div>
        <div className='form-footer d-flex justify-content-end'>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default NewEvent;

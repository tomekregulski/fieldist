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

  useEffect(() => {});
  return (
    <div className='modal-container d-flex justify-content-center align-items-center'>
      <Form className='modal-form d-flex flex-column justify-content-between p-5'>
        <div>
          <div className='form-header'>
            <h1>New Event</h1>
            <hr />
          </div>
          <div className='form-grid container'>
            <div className='row'>
              <div className='col-12 col-lg-6'>
                <TypeDrop />
                <VenueDrop />
                <div className='date-time container'>
                  <div className='row'>
                    <div className='col-12 col-lg-4 p-0 pr-1'>
                      <Form.Group controlId='demo_start_time'>
                        <Form.Label>Date</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='Date'
                          name='date'
                        />
                      </Form.Group>
                    </div>
                    <div className='col col-lg-4 p-0 pr-1'>
                      <Form.Group controlId='demo_start_time'>
                        <Form.Label>Start Time</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='Start Time'
                          name='start_time'
                        />
                      </Form.Group>
                    </div>
                    <div className='col col-lg-4 p-0'>
                      <Form.Group controlId='demo_duration'>
                        <Form.Label>Duration</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='Duration'
                          name='duration'
                        />
                      </Form.Group>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col col-lg-6'>
                <BrandDrop />
                <RepsDrop />
                <CampaignsDrop />
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

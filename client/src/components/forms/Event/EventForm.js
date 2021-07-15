import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { Back } from '../Buttons';
import { Dropdown, TextInput, TypeDrop, RepsDrop } from '../Inputs';
import { VenueForm } from '..';

const EventForm = ({
  onAdd,
  eventState,
  setEventState,
  responseResult,
  handleSubmit,
  action,
  message,
  editForm,
  setEditForm,
  validateDemo,
  setValidateDemo,
  validateAudit,
  setValidateAudit,
}) => {
  const [showVenue, setShowVenue] = useState(false);

  const handleChange = (e) => {
    setEventState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    if (editForm) {
      setEditForm((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }
    handleValidation(e);
  };

  const handleValidation = (e) => {
    if (editForm.type === 'demo' || eventState.type === 'demo') {
      !e.target.value
        ? setValidateDemo((prevState) => ({
            ...prevState,
            [e.target.name]: false,
          }))
        : setValidateDemo((prevState) => ({
            ...prevState,
            [e.target.name]: true,
          }));
    } else {
      !e.target.value
        ? setValidateAudit((prevState) => ({
            ...prevState,
            [e.target.name]: false,
          }))
        : setValidateAudit((prevState) => ({
            ...prevState,
            [e.target.name]: true,
          }));
    }
  };

  return (
    <div className='modal-container d-flex justify-content-center align-items-center'>
      <div className='modal-form'>
        <Back onAdd={onAdd} />
        <Form
          onSubmit={handleSubmit}
          className='d-flex flex-column justify-content-between px-5 pb-5'
        >
          <div>
            <div className='form-header'>
              <h1>{action}</h1>
              <hr />
            </div>
            <div className='form-grid container'>
              <div className='row'>
                <div className='col-12 col-lg-6'>
                  <TypeDrop
                    handleChange={handleChange}
                    value={editForm?.type}
                  />
                  <Dropdown
                    endpoint='/api/venues'
                    defaultOpt='Select a Venue'
                    label='Venue'
                    name='venue_id'
                    handleChange={handleChange}
                    editForm={editForm}
                    value={editForm?.venue_id}
                    setShowVenue={setShowVenue}
                    showVenue={showVenue}
                  />
                  {showVenue && <VenueForm setShowVenue={setShowVenue} />}
                  {eventState.type === 'demo' && (
                    <div className='date-time container'>
                      <div className='row'>
                        <div className='col-12 col-lg-4 p-0 pr-1'>
                          <TextInput
                            label='Date'
                            type='date'
                            name='date'
                            handleChange={handleChange}
                            value={editForm?.date}
                          />
                        </div>
                        <div className='col col-lg-4 p-0 pr-1'>
                          <TextInput
                            label='Start Time'
                            type='time'
                            name='start_time'
                            handleChange={handleChange}
                            value={editForm?.start_time}
                          />
                        </div>
                        <div className='col col-lg-4 p-0'>
                          <TextInput
                            label='Duration'
                            type='number'
                            name='duration'
                            handleChange={handleChange}
                            value={editForm?.duration}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className='col col-lg-6'>
                  <Dropdown
                    endpoint='/api/brands'
                    defaultOpt='Select a Brand'
                    label='Brand'
                    name='brand_id'
                    handleChange={handleChange}
                    editForm={editForm}
                    value={editForm?.brand_id}
                  />
                  <Dropdown
                    endpoint='/api/campaigns'
                    defaultOpt='Select a Campaign'
                    label='Campaign'
                    name='campaign_id'
                    handleChange={handleChange}
                    editForm={editForm}
                    value={editForm?.campaign_id}
                  />
                  <RepsDrop
                    handleChange={handleChange}
                    editForm={editForm}
                    value={editForm?.user_id}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='form-footer d-flex justify-content-end'>
            {responseResult === 'success' && (
              <Alert variant='success' className='alert m-0 mr-5'>
                <p className='mb-0'>{message}</p>
              </Alert>
            )}
            {responseResult === 'fail' && (
              <Alert variant='danger' className='alert m-0 mr-5'>
                <p className='mb-0'>Something Went Wrong</p>
                <ul>
                  {eventState.type === 'demo' && !validateDemo.date ? (
                    <li>Must provide valid date</li>
                  ) : null}
                  {eventState.type === 'demo' && !validateDemo.start_time ? (
                    <li>Must provide valid start time</li>
                  ) : null}
                  {eventState.type === 'demo' && !validateDemo.duration ? (
                    <li>Must provide event's duration</li>
                  ) : null}
                  {eventState.type === 'audit' && !validateAudit.brand_id ? (
                    <li>Must select a brand association</li>
                  ) : null}
                  {(eventState.type === 'demo' && !validateDemo.user_id) ||
                    (eventState.type === 'audit' && !validateAudit.user_id && (
                      <li>Must select an associated user</li>
                    ))}
                </ul>
              </Alert>
            )}
            <Button className='primary-btn' variant='primary' type='submit'>
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default EventForm;

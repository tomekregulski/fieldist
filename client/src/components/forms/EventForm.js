import React from 'react';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import {
  TypeDrop,
  BrandDrop,
  VenueDrop,
  RepsDrop,
  CampaignsDrop,
} from './Dropdowns';

const EventForm = ({
  addForm,
  eventState,
  setEventState,
  responseResult,
  handleSubmit,
  action,
  message,
  editForm,
}) => {
  const handleChange = (e) => {
    setEventState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(eventState);
    console.log(e.target.name, e.target.value);
  };

  const formatTime = (time) => {
    let [h, m] = time.split(':');
    let AmOrPm = h >= 12 ? 'pm' : 'am';
    h = h % 12 || 12;
    return `${h}:${m} ${AmOrPm}`;
  };

  return (
    <div className='modal-container d-flex justify-content-center align-items-center'>
      <div className='modal-form'>
        <div className='back pt-5 pt-lg-3 pl-3'>
          <FontAwesomeIcon
            icon={faArrowCircleLeft}
            className='fa-lg'
            onClick={addForm}
          />
        </div>
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
                    value={editForm ? editForm.type : eventState.type}
                  />
                  <VenueDrop handleChange={handleChange} editForm={editForm} />
                  <div className='date-time container'>
                    <div className='row'>
                      <div className='col-12 col-lg-4 p-0 pr-1'>
                        <Form.Group controlId='demo_date'>
                          <Form.Label>Date</Form.Label>
                          <Form.Control
                            type='date'
                            name='date'
                            value={editForm ? editForm.date : eventState.date}
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
                            value={
                              editForm
                                ? editForm.start_time
                                : eventState.start_time
                            }
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
                              value={
                                editForm
                                  ? editForm.duration
                                  : eventState.duration
                              }
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
                  <BrandDrop handleChange={handleChange} editForm={editForm} />
                  <RepsDrop handleChange={handleChange} editForm={editForm} />
                  <CampaignsDrop
                    handleChange={handleChange}
                    editForm={editForm}
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
              </Alert>
            )}
            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default EventForm;

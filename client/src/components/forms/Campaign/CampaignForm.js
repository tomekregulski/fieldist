import React from 'react';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import { BrandDrop } from '../Dropdowns';

const CampaignForm = ({
  addForm,
  eventState,
  setEventState,
  responseResult,
  handleSubmit,
  action,
  message,
  editForm,
  validate,
  setValidate,
}) => {
  const handleChange = (e) => {
    setEventState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    handleValidation(e);
    console.log(eventState);
    console.log(e.target.name, e.target.value);
  };

  const handleValidation = (e) => {
    !e.target.value
      ? setValidate((prevState) => ({
          ...prevState,
          [e.target.name]: false,
        }))
      : setValidate((prevState) => ({
          ...prevState,
          [e.target.name]: true,
        }));
  };

  return (
    <div className='modal-container d-flex justify-content-center align-items-center'>
      <div className='modal-form'>
        <div className='back pt-lg-3 pl-3'>
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
            <div className='row justify-content-center'>
              <div className='col-12 col-lg-8'>
                <Form.Group controlId='campaign_name'>
                  <Form.Label>Campaign Name</Form.Label>
                  <Form.Control
                    type='text'
                    name='name'
                    value={editForm ? editForm.name : eventState.name}
                    onChange={handleChange}
                    placeholder='Campaign Name'
                  />
                </Form.Group>
                <BrandDrop handleChange={handleChange} editForm={editForm} />
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
                {!validate.name && (
                  <li>Must provide a name for this campaign</li>
                )}
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

export default CampaignForm;

import React from 'react';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { TextInput, SinglePhoto } from '../Inputs';
import { Back } from '../Buttons';

const BrandForm = ({
  onAdd,
  eventState,
  setEventState,
  responseResult,
  setResponseResult,
  handleSubmit,
  action,
  message,
  editForm,
  setEditForm,
  validate,
  setValidate,
}) => {
  const handleChange = (e) => {
    setEventState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(eventState);
    if (editForm) {
      setEditForm((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }

    handleValidation(e);
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
            <div className='row justify-content-center align-items-baseline'>
              <div className='col-4'>
                <SinglePhoto
                  eventState={eventState}
                  setEventState={setEventState}
                  setResponseResult={setResponseResult}
                  responseResult={responseResult}
                  placeholder='https://www.btklsby.go.id/images/placeholder/camera.jpg'
                  align='center'
                />
              </div>
              <div className='col-8'>
                <TextInput
                  label='Brand Name'
                  type='text'
                  name='name'
                  handleChange={handleChange}
                  value={editForm?.name}
                />
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
                {!validate.name && <li>Must provide a name for this Brand</li>}
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

export default BrandForm;

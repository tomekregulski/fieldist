import React from 'react';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { TextInput, Dropdown, RoleDrop, SinglePhoto } from '../Inputs';
import { Back } from '../Buttons';

const UserForm = ({
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
    if (editForm) {
      setEditForm((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }

    handleValidation(e);
  };

  const handleValidation = (e) => {
    if (!e.target.value) {
      setValidate((prevState) => ({
        ...prevState,
        [e.target.name]: false,
      }));
    } else {
      if (e.target.name === 'email') {
        let pattern = new RegExp(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        );
        setValidate((prevState) => ({
          ...prevState,
          [e.target.name]: pattern.test(e.target.value),
        }));
      } else if (e.target.name === 'confirmPassword') {
        if (e.target.value !== eventState.password) {
          setValidate((prevState) => ({
            ...prevState,
            [e.target.name]: false,
          }));
        } else {
          setValidate((prevState) => ({
            ...prevState,
            [e.target.name]: true,
          }));
        }
      } else {
        setValidate((prevState) => ({
          ...prevState,
          [e.target.name]: true,
        }));
      }
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
              <div className='row justify-content-center align-items-baseline'>
                <div className='col-4'>
                  <SinglePhoto
                    eventState={eventState}
                    setEventState={setEventState}
                    setResponseResult={setResponseResult}
                    responseResult={responseResult}
                    placeholder='https://www.btklsby.go.id/images/placeholder/nogender.png'
                    align='center'
                  />
                </div>
                <div className='col-8 d-flex flex-column flex-lg-row justify-content-around'>
                  <TextInput
                    label='First Name'
                    type='text'
                    name='first_name'
                    handleChange={handleChange}
                    value={editForm?.first_name}
                  />
                  <TextInput
                    label='Last Name'
                    type='text'
                    name='last_name'
                    handleChange={handleChange}
                    value={editForm?.last_name}
                  />
                </div>
              </div>
              <hr />
              <div className='row justify-content-center'>
                <div className='col-12 col-lg-5'>
                  <TextInput
                    label='Email'
                    type='email'
                    name='email'
                    handleChange={handleChange}
                    value={editForm?.email}
                  />
                  <TextInput
                    label='Password'
                    type='password'
                    name='password'
                    handleChange={handleChange}
                  />
                  <TextInput
                    label='Confirm Password'
                    type='password'
                    name='confirmPassword'
                    handleChange={handleChange}
                  />
                </div>
                <div className='col-12 col-lg-5'>
                  <Dropdown
                    endpoint='/api/brands'
                    defaultOpt='Select a Brand'
                    label='Brand'
                    name='brand_id'
                    handleChange={handleChange}
                    editForm={editForm}
                    value={editForm?.brand_id}
                  />
                  <RoleDrop
                    handleChange={handleChange}
                    editForm={editForm}
                    value={editForm ? editForm.role : eventState.role}
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
                <p>Something Went Wrong</p>
                <ul>
                  {!validate.first_name && (
                    <li>Must provide valid first name</li>
                  )}
                  {!validate.last_name && <li>Must provide valid last name</li>}
                  {!validate.email && <li>Must provide valid email</li>}
                  {!validate.confirmPassword && <li>Passwords don't match</li>}
                  {!validate.role && <li>Please select user's role</li>}
                </ul>
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

export default UserForm;

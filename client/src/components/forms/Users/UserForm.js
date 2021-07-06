import React from 'react';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import { BrandDrop, RoleDrop } from '../Dropdowns';

const UserForm = ({
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

    if (e.target.name === 'email') {
      let pattern = new RegExp(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      );
      setValidate((prevState) => ({
        ...prevState,
        [e.target.name]: pattern.test(e.target.value),
      }));
    }

    console.log(validate);
  };

  const confirmPassword = (e) => {
    e.target.value !== eventState.password
      ? setValidate((prevState) => ({
          ...prevState,
          [e.target.name]: false,
        }))
      : setValidate((prevState) => ({
          ...prevState,
          [e.target.name]: true,
        }));

    console.log(validate);
  };

  console.log(editForm);
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
              <div className='row justify-content-center'>
                <div className='col-12 col-lg-5'>
                  <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type='text'
                      name='first_name'
                      value={
                        editForm ? editForm.first_name : eventState.first_name
                      }
                      onChange={handleChange}
                      placeholder='First Name'
                    />
                  </Form.Group>
                </div>
                <div className='col-12 col-lg-5'>
                  <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type='text'
                      name='last_name'
                      value={
                        editForm ? editForm.last_name : eventState.last_name
                      }
                      onChange={handleChange}
                      placeholder='Last Name'
                    />
                  </Form.Group>
                </div>
              </div>
              <hr />
              <div className='row justify-content-center'>
                <div className='col-12 col-lg-5'>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type='email'
                      name='email'
                      value={editForm ? editForm.email : eventState.email}
                      onChange={handleChange}
                      placeholder='admin@fieldist.com'
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type='password'
                      name='password'
                      // value={editForm ? editForm.password : eventState.password}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type='password'
                      name='confirmPassword'
                      onChange={confirmPassword}
                    />
                  </Form.Group>
                </div>
                <div className='col-12 col-lg-5'>
                  <BrandDrop handleChange={handleChange} editForm={editForm} />
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

import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';

const SinglePhoto = ({
  eventState,
  setEventState,
  setResponseResult,
  responseResult,
  placeholder,
  align,
}) => {
  const [image, setImage] = useState('');
  const [url, SetUrl] = useState('');

  useEffect(() => {
    console.log(url);
    console.log(image);
    setEventState((prevState) => ({
      ...prevState,
      image: url,
    }));
    console.log(eventState);
  }, [url, setEventState]);

  const uploadImage = () => {
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'fieldist');
    data.append('cloud_name', 'yup-schlepp');
    fetch('https://api.cloudinary.com/v1_1/yup-schlepp/image/upload', {
      method: 'POST',
      body: data,
    })
      .then((res) => res.json())
      .then((data) => SetUrl(data.url))
      .catch((err) => {
        console.log(err);
        setResponseResult('fail');
      });
    console.log(url);
  };

  return (
    <>
      <Form.Group>
        <div className={`d-flex flex-column align-items-${align}`}>
          <div>
            <img
              className='upload-img'
              src={url ? url : placeholder}
              alt='imagetest'
            />
          </div>
          <div className='d-flex align-items-baseline justify-content-end'>
            <label className='upload-btn'>
              <Form.Control
                className='file-upload'
                type='file'
                onChange={(e) => setImage(e.target.files[0])}
              />
              <FontAwesomeIcon icon={faFolderOpen} className='fa-lg' />
            </label>
            <Button className='primary-btn' onClick={uploadImage}>
              Upload
            </Button>
          </div>
        </div>
      </Form.Group>
      {responseResult === 'fail' && (
        <Alert variant='danger' className='alert m-0 mr-5'>
          Something's not quite right...
        </Alert>
      )}
    </>
  );
};

export default SinglePhoto;

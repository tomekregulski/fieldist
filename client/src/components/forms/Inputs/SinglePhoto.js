import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

const SinglePhoto = ({
  eventState,
  setEventState,
  setResponseResult,
  responseResult,
}) => {
  const [image, setImage] = useState('');
  const [url, SetUrl] = useState('');

  useEffect(() => {
    console.log(url);
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
        <Form.Label>Image</Form.Label>
        <Form.Control
          type='file'
          onChange={(e) => setImage(e.target.files[0])}
        />
        <Button onClick={uploadImage}>Upload</Button>
      </Form.Group>
      <div>
        <h1>Uploaded image will appear here</h1>
        <img src={url} alt='imagetest' />
      </div>
      {responseResult === 'fail' && (
        <Alert variant='danger' className='alert m-0 mr-5'>
          Something's not quite right...
        </Alert>
      )}
    </>
  );
};

export default SinglePhoto;

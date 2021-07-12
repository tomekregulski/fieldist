import React, { useState, useEffect, useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  padding: '20px',
  borderWidth: 2,
  borderRadius: '2rem',
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#8d8c8c',
  outline: 'none',
  transition: 'border .3s ease-in-out',
};

const activeStyle = {
  borderColor: 'var(--table-purple)',
};

const acceptStyle = {
  borderColor: 'var(--table-green)',
};

const rejectStyle = {
  borderColor: 'var(--table-red)',
};

const MultiplePhotos = ({
  eventState,
  setEventState,
  setResponseResult,
  responseResult,
  placeholder,
  align,
}) => {
  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: 'image/*',
    onDrop: (files) => uploadImage(files),
  });
  const [images, setImages] = useState([]);
  const [url, SetUrl] = useState([]);

  useEffect(() => {
    console.log(url);
    console.log(images);
    console.log(eventState);
  }, [url, setEventState, acceptedFiles]);

  const files = url.map((src) => (
    <img key={src} className='upload-img-multi mr-1' src={src} alt={src} />
  ));

  const uploadImage = (images) => {
    images.map((image) => {
      const data = new FormData();
      data.append('file', image);
      data.append('upload_preset', 'fieldist');
      data.append('cloud_name', 'yup-schlepp');
      fetch('https://api.cloudinary.com/v1_1/yup-schlepp/image/upload', {
        method: 'POST',
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
        body: data,
      })
        .then((res) => res.json())
        .then((data) => SetUrl((prevState) => [...prevState, data.url]))
        .catch((err) => {
          console.log(err);
          setResponseResult('fail');
        });
      console.log(url);
    });
  };

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  return (
    <>
      <section className='container'>
        <div {...getRootProps({ style, className: 'dropzone' })}>
          <label className='d-flex flex-column align-items-center justify-content-center'>
            <Form.Control {...getInputProps()} />
            <p className='text-center'>
              Drag 'n' drop some files here, or click to select files
            </p>
            <Button className='dropzone-btn'>
              <FontAwesomeIcon icon={faFolderOpen} className='fa-lg' />
            </Button>
          </label>
        </div>
        <aside>
          <div className='d-flex multi-img-cont'>{files}</div>
        </aside>
      </section>
      {responseResult === 'fail' && (
        <Alert variant='danger' className='alert m-0 mr-5'>
          Something's not quite right...
        </Alert>
      )}
    </>
  );
};

export default MultiplePhotos;

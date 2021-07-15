import React, { useState, useEffect, useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen, fas, faSave } from '@fortawesome/free-solid-svg-icons';
import postHeader from '../../../services/post-header';

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

const MultiplePhotos = ({ report, setResponseResult, responseResult }) => {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: 'image/*',
    onDrop: (files) => uploadImage(files),
  });
  const [url, SetUrl] = useState([]);

  useEffect(() => {
    console.log(url);
    // if (url) {
    //   fetch(`/api/reports/${report.all.report_template.id}`, {
    //     method: 'PUT',
    //     headers: { 'Content-type': 'application/json' },
    //     body: JSON.stringify({ photos: url }),
    //   })
    //     .then((res) => res.json())
    //     .catch((err) => console.log(err));
    // }
  }, [url]);

  const uploadImage = (images) => {
    images.map((image) => {
      const data = new FormData();
      data.append('file', image);
      data.append('upload_preset', 'fieldist');
      data.append('cloud_name', 'yup-schlepp');
      fetch('https://api.cloudinary.com/v1_1/yup-schlepp/image/upload', {
        method: 'POST',
        body: data,
      })
        .then((res) => res.json())
        .then((data) => SetUrl((prevState) => [...prevState, data.url]))
        .catch((err) => {
          console.log(err);
          setResponseResult('fail');
        });
    });
  };

  const putImages = () => {
    if (url) {
      fetch(`/api/reports/${report.all.report_template.id}`, {
        method: 'PUT',
        headers: postHeader(),
        body: JSON.stringify({ photos: url }),
      })
        .then((res) => res.json())
        .catch((err) => console.log(err));
    }
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

  const files = url.map((src) => (
    <img key={src} className='upload-img-multi mr-1' src={src} alt={src} />
  ));

  return (
    <>
      <section className='container m-lg-0'>
        <div {...getRootProps({ style, className: 'dropzone h-75' })}>
          <label className='d-flex flex-column align-items-center justify-content-center'>
            <Form.Control {...getInputProps()} />
            <p className='text-center'>
              Drag 'n' drop some files here, or click to select files
            </p>
            <div className='d-flex'>
              <Button className='primary-btn mx-2' className='dropzone-btn'>
                <FontAwesomeIcon icon={faFolderOpen} className='fa-lg' />
              </Button>
              <Button className='primary-btn mx-2' onClick={putImages}>
                <FontAwesomeIcon icon={faSave} className='fa-lg' />
              </Button>
            </div>
          </label>
        </div>
        <div className='d-flex justify-content-between mt-3 multi-img-cont'>
          {url.map((src) => (
            <img
              key={src}
              src={src}
              alt={src}
              className='upload-img-multi mr-1'
            />
          ))}
        </div>
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

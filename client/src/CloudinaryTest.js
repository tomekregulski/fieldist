import React, { useState } from 'react';

const CloudinaryTest = () => {
  const [image, setImage] = useState('');
  const [url, SetUrl] = useState('');

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
      .then((data) => {
        SetUrl(data.url);
        console.log(data);
        console.log(url);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div>
        <input type='file' onChange={(e) => setImage(e.target.files[0])} />
        <button onClick={uploadImage}>Upload</button>
      </div>
      <div>
        <h1>Uploaded image will appear here</h1>
        <img src={url} alt='imagetest' />
      </div>
    </div>
  );
};

export default CloudinaryTest;

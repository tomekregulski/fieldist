import React, { useState, useEffect } from 'react';
import authHeader from '../../../services/auth-header';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';

function PhotoGallery() {
  const [test, setTest] = useState([]);
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState({
    image: '',
    brand: '',
    venue: '',
  });

  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    setCurrentPhoto({
      image: e.target.src,
      brand: e.target.dataset.brand,
      venue: e.target.dataset.venue,
    });
    console.log(e.target);
    setShow(true);
  };
  const myRequest = new Request('/api/demos', {
    method: 'GET',
    headers: authHeader(),
    mode: 'cors',
    cache: 'default',
  });

  useEffect(() => {
    console.log('Hi!');
    setTest([
      {
        id: 1,
        image: 'fieldist_logo.png',
        venue: 'Whole Foods',
        brand: 'test',
      },
      {
        id: 2,
        image: 'fieldist_logo.png',
        venue: 'Whole Foods',
        brand: 'test',
      },
      {
        id: 3,
        image: 'fieldist_logo.png',
        venue: 'Whole Foods',
        brand: 'test',
      },
      {
        id: 4,
        image: 'fieldist_logo.png',
        venue: 'Whole Foods',
        brand: 'test',
      },
      {
        id: 5,
        image: 'fieldist_logo.png',
        venue: 'Whole Foods',
        brand: 'test',
      },
      {
        id: 6,
        image: 'fieldist_logo.png',
        venue: 'Whole Foods',
        brand: 'test',
      },
      {
        id: 7,
        image: 'fieldist_logo.png',
        venue: 'Whole Foods',
        brand: 'test',
      },
      {
        id: 8,
        image: 'fieldist_logo.png',
        venue: 'Whole Foods',
        brand: 'test',
      },
      {
        id: 9,
        image: 'fieldist_logo.png',
        venue: 'Whole Foods',
        brand: 'test',
      },
      {
        id: 10,
        image: 'fieldist_logo.png',
        venue: 'Whole Foods',
        brand: 'test',
      },
      {
        id: 11,
        image: 'fieldist_logo.png',
        venue: 'Whole Foods',
        brand: 'test',
      },
      {
        id: 12,
        image: 'fieldist_logo.png',
        venue: 'Whole Foods',
        brand: 'test',
      },
      {
        id: 13,
        image: 'fieldist_logo.png',
        venue: 'Whole Foods',
        brand: 'test',
      },
      {
        id: 14,
        image: 'fieldist_logo.png',
        venue: 'Whole Foods',
        brand: 'test',
      },
      {
        id: 15,
        image: 'fieldist_logo.png',
        venue: 'Whole Foods',
        brand: 'test',
      },
      {
        id: 16,
        image: 'fieldist_logo.png',
        venue: 'Whole Foods',
        brand: 'test',
      },
    ]);
    fetch(myRequest)
      .then((res) => res.json())
      .then((response) => setData(response))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='gallery-container'>
      <div className='header'>
        <h1>Photo Gallery</h1>
      </div>
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Body className='text-center'>
            <Image
              src={currentPhoto.image}
              thumbnail
              alt={currentPhoto.image}
            />
            <div className='my-3'>
              <span>{currentPhoto.brand}</span>
              <span>{currentPhoto.venue}</span>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className='primary-btn'
              variant='secondary'
              onClick={handleClose}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div className='row d-flex justify-content-center m-5'>
        {test.map((photo) => (
          <div key={photo.id} className='col-lg-3 text-center'>
            <Card className='gallery-card'>
              <Card.Img
                className='gallery-img thumbnail'
                src={photo.image}
                thumbnail
                alt={photo.image}
                data-brand={photo.brand}
                data-venue={photo.venue}
                onClick={handleShow}
              />
              <Card.Body className='gallery-card-text'>
                <span>{photo.brand} @ </span>
                <span>{photo.venue}</span>
                <span> - {photo.id}</span>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhotoGallery;

// import React, { useState, useEffect } from 'react';
// import authHeader from '../../../services/auth-header';
// import Image from 'react-bootstrap/Image'
// import Button from 'react-bootstrap/Button'
// import Modal from 'react-bootstrap/Modal'

// function PhotoGallery() {
//   const [test, setTest] = useState([]);
//   const [data, setData] = useState([]);
//   const [show, setShow] = useState(false);
//   const [selectedPhoto, setSelectedPhoto] = useState('');

//   const handleClose = () => setShow(false);
//   const handleShow = (key) => {
//     // setShow(image.id)
//     console.log(key);
//     setShow(true);
//   };
//   const myRequest = new Request('/api/demos', {
//     method: 'GET',
//     headers: authHeader(),
//     mode: 'cors',
//     cache: 'default',
//   });

//   useEffect(() => {
//     console.log('Hi!');
//     setTest([{id:1, image: "fieldist_logo.png", venue: "Whole Foods", brand: "test"}, {id:2, image: "fieldist_logo.png", venue: "Whole Foods", brand: "test"}, {id:3, image: "fieldist_logo.png", venue: "Whole Foods", brand: "test"}, {id:4, image: "fieldist_logo.png", venue: "Whole Foods", brand: "test"}, {id:5, image: "fieldist_logo.png", venue: "Whole Foods", brand: "test"}, {id:6, image: "fieldist_logo.png", venue: "Whole Foods", brand: "test"}, {id:7, image: "fieldist_logo.png", venue: "Whole Foods", brand: "test"}, {id:8, image: "fieldist_logo.png", venue: "Whole Foods", brand: "test"}, {id:9, image: "fieldist_logo.png", venue: "Whole Foods", brand: "test"}, {id:10, image: "fieldist_logo.png", venue: "Whole Foods", brand: "test"}, {id:11, image: "fieldist_logo.png", venue: "Whole Foods", brand: "test"}, {id:12, image: "fieldist_logo.png", venue: "Whole Foods", brand: "test"}, {id:13, image: "fieldist_logo.png", venue: "Whole Foods", brand: "test"}, {id:14, image: "fieldist_logo.png", venue: "Whole Foods", brand: "test"}, {id:15, image: "fieldist_logo.png", venue: "Whole Foods", brand: "test"}, {id:16, image: "fieldist_logo.png", venue: "Whole Foods", brand: "test"}])
//     fetch(myRequest)
//       .then((res) => res.json())
//       .then((response) => setData(response))
//       .catch((err) => console.log(err));
//   }, [])

//   return (
//     <div className="gallery-container">
//       <div className="header">
//         <h1>Photo Gallery</h1>
//       </div>
//       <div>
//         <Modal show={show} onHide={handleClose}>
//           <Modal.Body className="text-center">
//             <Image src={test[1].image} thumbnail alt={test[1].image} />
//             <div className="my-3">
//               <span>{test[1].brand} @ </span>
//               <span>{test[1].venue}</span>
//             </div>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleClose}>
//               Close
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </div>
//       <div className="row d-flex justify-content-center m-5">
//         {test.map(photo => (
//           <div key={photo.id} className="col-lg-3 text-center">
//             <Image className="gallery-img thumbnail" src={photo.image} thumbnail alt={photo.image} onClick={handleShow(this.key)}/>
//             <div className="mb-3">
//               <span>{photo.brand} @ </span>
//               <span>{photo.venue}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default PhotoGallery;

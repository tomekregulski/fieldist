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
  const [reports, setReports] = useState([])

  const [currentPhoto, setCurrentPhoto] = useState({
    image: '',
    brand: '',
    venue: '',
    date: '',
    campaign: '',
    rep: '',
  });

  const handleClose = () => setShow(false);
  const handleShow = (e) => {  
    setCurrentPhoto({
      image: e.target.src,
      brand: e.target.dataset.brand,
      venue: e.target.dataset.venue,
      date: e.target.dataset.date,
      campaign: e.target.dataset.campaign,
      rep: e.target.dataset.rep,

    })
    console.log(e.target);
    setShow(true);
  }
  const myRequest = new Request('/api/reports', {
    method: 'GET',
    headers: authHeader(),
    mode: 'cors',
    cache: 'default',
  });
  
  useEffect(() => {
    console.log('Hi!');
    setTest([
      {id:1, image: "/gallery/bowery1.jpeg", venue: "Whole Foods Market - Columbus Circle", brand: "Bowery Farming", date: "6/12/2021", campaign: "Bowery WFM Audits", rep: "Myah	Holder"}, 
      {id:2, image: "/gallery/bowery2.jpeg", venue: "Whole Foods Market - Upper West Side", brand: "Bowery Farming", date: "6/13/2021", campaign: "Bowery WFM Audits", rep: "Eamonn	Stout"}, 
      {id:3, image: "/gallery/bowery3.jpeg", venue: "Whole Foods Market - Third & 3rd", brand: "Bowery Farming", date: "6/14/2021", campaign: "Bowery WFM Audits", rep: "Jagdeep Vo"}, 
      {id:4, image: "/gallery/bowery4.jpeg", venue: "Whole Foods Market - Philly City Center", brand: "Bowery Farming", date: "6/21/2021", campaign: "Bowery WFM Audits", rep: "Zahra	Samuels"}, 
      {id:5, image: "/gallery/simmer1.jpeg", venue: "Whole Foods Market - Marlton", brand: "Simmer", date: "6/23/2021", campaign: "Simmer WFM Audits", rep: "Corrina Stott"}, 
      {id:6, image: "/gallery/simmer2.jpeg", venue: "Whole Foods Market - Pentagon City", brand: "Simmer", date: "6/05/2021", campaign: "Simmer WFM Audits", rep: "Hayleigh	Kearns"}, 
      {id:7, image: "/gallery/simmer3.jpeg", venue: "Whole Foods Market - Rockville", brand: "Simmer", date: "7/03/2021", campaign: "Simmer WFM Audits", rep: "Janice	Mccabe"}, 
      {id:8, image: "/gallery/simmer4.jpeg", venue: "Whole Foods Market - Bethesda", brand: "Simmer", date: "7/10/2021", campaign: "Simmer WFM Audits", rep: "Myrtle Gregory"}, 
      {id:9, image: "/gallery/simmer5.jpeg", venue: "Whole Foods Market - Columbus Circle", brand: "Simmer", date: "7/09/2021", campaign: "Simmer WFM Audits", rep: "Liliana Ashton"}, 
      {id:10, image: "/gallery/saso1.jpeg", venue: "Whole Foods Market - Bowery", brand: "Saso", date: "6/12/2021", campaign: "Saso WFM Audits", rep: "Gabija	Mcloughlin"}, 
      {id:11, image: "/gallery/saso2.jpeg", venue: "Whole Foods Market - Union Square", brand: "Saso", date: "6/13/2021", campaign: "Saso WFM Audits", rep: "Liliana Ashton"}, 
      {id:12, image: "/gallery/saso3.jpeg", venue: "Whole Foods Market - Williamsburg", brand: "Saso", date: "6/19/2021", campaign: "Saso WFM Audits", rep: "Liliana Ashton"}, 
      {id:13, image: "/gallery/sir_kensingtons1.jpeg", venue: "Whole Foods Market - Bowery", brand: "Sir Kensington's", date: "6/21/2021", campaign: "Sir Kensington's WFM Audits", rep: "Eamonn	Stout"}, 
      {id:14, image: "/gallery/sir_kensingtons2.jpeg", venue: "Whole Foods Market - Union Square", brand: "Sir Kensington's", date: "6/22/2021", campaign: "Sir Kensington's WFM Audits", rep: "Eamonn	Stout"}, 
      {id:15, image: "/gallery/sir_kensingtons3.jpeg", venue: "Whole Foods Market - Columbus Circle", brand: "Sir Kensington's", date: "7/02/2021", campaign: "Sir Kensington's WFM Audits", rep: "Liliana Ashton"}, 
      {id:16, image: "/gallery/sir_kensingtons4.jpeg", venue: "Whole Foods Market - Williamsburg", brand: "Sir Kensington's", date: "7/01/2021", campaign: "Sir Kensington's WFM Audits", rep: "Liliana Ashton"}
    ])
    fetch(myRequest)
      .then((res) => res.json())
      .then((res) => {
        setData(res)
        console.log(res)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="gallery-container container-fluid">
      <div className='data-header card'>
        <h1 id='data-title'><span className='title-pipe'>|</span>Photo Gallery</h1>
      </div>
      <div>
        <Modal show={show} onHide={handleClose}>
           <Modal.Body className="text-center">

             <Image src={currentPhoto.image} thumbnail alt={currentPhoto.image} />
             <div className="my-3">
                  <span>{currentPhoto.date} - </span>
                  <span>{currentPhoto.brand} @ </span>
                  <span>{currentPhoto.venue}</span>
             </div>
              <div className="my-3 d-flex flex-column align-items-center">
                  <span>Campaign: {currentPhoto.campaign}</span>
                  <span>Rep: {currentPhoto.rep}</span>
             </div>
           </Modal.Body>
           <Modal.Footer>
             <Button variant="secondary" onClick={handleClose}>
               Close
             </Button>
           </Modal.Footer>
         </Modal>
      </div>
      <div className="row d-flex justify-content-center m-5">
        {test.map(photo => (
          <div key={photo.id} className="col-lg-3 text-center">
            <Card className='gallery-card'>
              <Card.Img className="gallery-img thumbnail" src={photo.image} thumbnail alt={photo.image} data-date={photo.date} data-campaign={photo.campaign} data-rep={photo.rep} data-brand={photo.brand} data-venue={photo.venue} onClick={handleShow}/>
              <Card.Body className='gallery-card-text'>
                  <span>{photo.date} - </span>
                  <span>{photo.brand} @ </span>
                  <span>{photo.venue}</span>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhotoGallery;
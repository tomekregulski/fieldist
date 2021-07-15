import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { Back } from '../../forms/Buttons';
import authHeader from '../../../services/auth-header';

import '../cards.css';

const BrandCard = ({ cardID, setCard }) => {
  const [brand, setBrand] = useState({});

  useEffect(() => {
    fetch(`/api/brands/${cardID}`, {
      method: 'GET',
      headers: authHeader(),
      mode: 'cors',
      cache: 'default',
    })
      .then((res) => res.json())
      .then((response) => setBrand(response))
      .catch((err) => console.log(err));
  }, []);

  const formatDate = (date) => new Date(date).toLocaleDateString();

  console.log(brand);
  return (
    <div className='modal-container d-flex justify-content-center align-items-center'>
      <div className='modal-form modal-card'>
        <Back
          onAdd={() =>
            setCard({
              show: false,
              id: '',
            })
          }
        />
        <Card.Img variant='top' src={brand.image} />
        <Card.Body>
          <h1>{brand.name}</h1>
          <hr />
          <div className='dflex'>
            <p>Brand Added: {formatDate(brand.createdAt)}</p>
          </div>
          <div className='d-flex justify-content-around pt-4'>
            {brand.products && (
              <div>
                <h5>Products</h5>
                <ul>
                  {brand.products.map((p) => (
                    <li key={p.id}>{p.name}</li>
                  ))}
                </ul>
              </div>
            )}
            {brand.campaigns && (
              <div>
                <h5>Campaigns</h5>
                <ul>
                  {brand.campaigns.map((c) => (
                    <li key={c.id}>{c.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Card.Body>
      </div>
    </div>
  );
};

export default BrandCard;

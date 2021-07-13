import React from 'react';
import Form from 'react-bootstrap/Form';
import ReactStars from 'react-rating-stars-component';

const Stars = ({ label, name, setReportData }) => {
  const ratingChanged = (newRating) => {
    setReportData((prevState) => ({
      ...prevState,
      [name]: newRating,
    }));
  };

  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <ReactStars
        name={name}
        count={5}
        // isHalf={true}
        onChange={ratingChanged}
        size={24}
        activeColor='#665dec'
      />
    </Form.Group>
  );
};

export default Stars;

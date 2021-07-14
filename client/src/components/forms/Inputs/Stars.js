import React from 'react';
import Form from 'react-bootstrap/Form';
import ReactStars from 'react-rating-stars-component';

const Stars = ({ label, name, setReportData, value, size, edit }) => {
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
        value={value}
        // isHalf={true}
        onChange={ratingChanged}
        size={size}
        edit={edit}
        activeColor='#665dec'
      />
    </Form.Group>
  );
};

export default Stars;

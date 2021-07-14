import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { Back } from '../Buttons';

const ReadOnly = ({ report, setReport }) => {
  console.log(report.all);
  // get all the event info
  return (
    <h1>hi</h1>
    // <div className='modal-container d-flex justify-content-center align-items-center'>
    //   <div className='modal-form'>
    //     <Back
    //       onAdd={() =>
    //         setReport((prevState) => ({ ...prevState, show: false }))
    //       }
    //     />
    //   </div>
    // </div>
  );
};

export default ReadOnly;

// if event status is scheduled bothn admin and contact can view scheduled event without report

// if event status is complete (approved or denied) then contact has access to view only
// if event status is pending review, admin has access to review, rate, and approve or deny
// if admin has added review and denied, rep can edit

// if approved, then view only all around

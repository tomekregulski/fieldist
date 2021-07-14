import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Carousel from 'react-bootstrap/Carousel';
import { Back } from '../Buttons';
import GoogleMap from '../../Map/GoogleMap';
import { Stars } from '../Inputs';

const ReadOnly = ({ report, setReport, user }) => {
  const [userPhoto, setUserPhoto] = useState('');
  console.log(report.all);

  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    if (report.all.report_template !== null) {
      fetch(`/api/users/${report.all.report_template.check_in.user.id}`)
        .then((res) => res.json())
        .then((response) => {
          setUserPhoto(response.image);
          setIsLoaded(true);
        })
        .catch((err) => console.log(err));
    }
  }, [setUserPhoto, report.all.report_template]);
  // get all the event info

  const formatTime = (time) => {
    let [h, m] = time.split(':');
    let stamp;
    h < 12 ? (stamp = 'AM') : (stamp = 'PM');
    let hour = ((h + 11) % 12) + 1;
    return `${hour}:${m} ${stamp}`;
  };
  return (
    <>
      {isLoaded && (
        <div className='modal-container d-flex justify-content-center align-items-center'>
          <div className='modal-form'>
            <Back
              onAdd={() =>
                setReport((prevState) => ({ ...prevState, show: false }))
              }
            />
            <div className='d-flex flex-column justify-content-between px-5 pb-5'>
              <div>
                <div className='form-header'>
                  <h1>
                    {report.all.report_template.name
                      ? report.all.report_template.name
                      : 'Pending'}
                  </h1>
                  <hr />
                </div>
                <div className='container'>
                  <div className='row d-flex align-items-center'>
                    <div className='col-7'>
                      <h6>Status: {report.all.status}</h6>
                      <h6>{report.all.venue.name}</h6>
                      <h6>{report.all.venue.address}</h6>
                      {report.all.type === 'demo' && (
                        <h6>
                          {new Date(report.all.date).toLocaleDateString()} -{' '}
                          {formatTime(report.all.start_time)}
                        </h6>
                      )}
                    </div>
                    <div className='col-5'>
                      <img
                        src={report.all.campaign.brand.image}
                        alt=''
                        className='brand-thumb'
                      />
                      <h6>{report.all.campaign.name}</h6>
                    </div>
                  </div>
                  <hr />
                </div>
                <div className='form-grid container'>
                  <div className='row'>
                    <div className='col-12'>
                      {report.all.report_template.check_in.status !== '' && (
                        <>
                          <div className='d-flex flex-column p-3 w-100 report-user'>
                            <div className='d-flex flex-column align-items-center mb-3'>
                              <img
                                src={userPhoto}
                                alt={`${report.all.report_template.check_in.user.first_name} ${report.all.report_template.check_in.user.last_name}`}
                                title={`${report.all.report_template.check_in.user.first_name} ${report.all.report_template.check_in.user.last_name}`}
                                className='report-user-img'
                              />
                              <div className='px-3'>
                                <h2>{`${report.all.report_template.check_in.user.first_name} ${report.all.report_template.check_in.user.last_name}`}</h2>
                                <hr />
                                <div className='d-flex flex-column'>
                                  {report.all.report_template.check_in
                                    .status === true && (
                                    <span
                                      className='text-center'
                                      style={{ color: 'var(--table-green)' }}
                                    >
                                      Checked In:
                                    </span>
                                  )}
                                  {report.all.report_template.check_in
                                    .status === false && (
                                    <span
                                      className='text-center'
                                      style={{ color: 'var(--table-red)' }}
                                    >
                                      <b>Attempted Check In:</b>
                                    </span>
                                  )}
                                  <span>
                                    {
                                      report.all.report_template.check_in
                                        .timestamp
                                    }
                                  </span>
                                  <span>
                                    {
                                      report.all.report_template.check_in
                                        .location.distance
                                    }{' '}
                                    miles from location
                                  </span>
                                </div>
                              </div>
                            </div>
                            {report.all.report_template.check_in.status ===
                              true && (
                              <Alert
                                variant='success'
                                className='alert m-0 w-100 text-center'
                              >
                                <p className='mb-0'>Checked In!</p>
                              </Alert>
                            )}
                            {report.all.report_template.check_in.status ===
                              false && (
                              <Alert
                                variant='danger'
                                className='alert m-0 w-100 text-center'
                              >
                                <p className=''>Failed Check In!</p>
                              </Alert>
                            )}
                            <GoogleMap
                              lat={
                                report.all.report_template.check_in.location.lat
                              }
                              lng={
                                report.all.report_template.check_in.location.lng
                              }
                              venue={report.all.venue}
                            />
                          </div>
                        </>
                      )}
                      <hr />
                    </div>
                    {report.all.report_template.photos && (
                      <div className='col-12 col-lg-6'>
                        <Carousel interval={null} className='report-carousel'>
                          {report.all.report_template.photos.map((src) => (
                            <Carousel.Item>
                              <img
                                src={src}
                                alt={src}
                                className='d-block carousel-image w-100'
                              />
                            </Carousel.Item>
                          ))}
                        </Carousel>
                      </div>
                    )}
                    <div
                      className={
                        report.all.report_template.photos.length
                          ? 'col-12 col-lg-6'
                          : 'col-12'
                      }
                    >
                      <div className='container'>
                        <div className='row'>
                          <div className='col-8'>
                            <p>Total Units Sold:</p>
                            <p>Total Customer Interactions:</p>
                            <p>Rep's Event Rating:</p>
                          </div>
                          <div className='col-4'>
                            <p>{report.all.report_template.sales}</p>
                            <p>{report.all.report_template.interactions}</p>
                            <Stars
                              value={report.all.report_template.overall}
                              size='10px'
                              edit={false}
                            />
                          </div>
                        </div>
                        <hr />
                        <div className='row'>
                          <div className='col-12'>
                            <p>Rep Comments:</p>
                            <p>{report.all.report_template.comments}</p>
                          </div>
                        </div>
                        <hr />
                      </div>
                    </div>
                  </div>
                  {user.roles === 'ROLE_ADMIN' &&
                    report.all.status === 'Pending Review' && (
                      <div className='row'>
                        <div className='col-12 col-lg-6'>
                          <Form.Group>
                            <Form.Label>Admin Action</Form.Label>
                            <Form.Control as='select' name='admin_action'>
                              <option>Select</option>
                              <option>Approve</option>
                              <option>Decline</option>
                            </Form.Control>
                          </Form.Group>
                        </div>
                        <div className='col-12 col-lg-6'>
                          <Stars size='24px' edit={true} />
                        </div>
                      </div>
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReadOnly;

// if event status is scheduled bothn admin and contact can view scheduled event without report

// if event status is complete (approved or denied) then contact has access to view only
// if event status is pending review, admin has access to review, rate, and approve or deny
// if admin has added review and denied, rep can edit

// if approved, then view only all around

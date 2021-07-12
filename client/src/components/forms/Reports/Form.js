import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { Back } from '../Buttons';
import { MultiplePhotos, TextInput } from '../Inputs';
import authHeader from '../../../services/auth-header';
import GoogleMap from '../../Map/GoogleMap';
import getDistance from 'geolib/es/getDistance';

const ReportForm = ({ user, report, setReport }) => {
  const [responseResult, setResponseResult] = useState('');
  const [event, setEvent] = useState({});
  const [reportData, setReportData] = useState({
    name: '',
    sales: '',
    interactions: '',
    overall: '',
    comments: '',
    check_in: {
      status: '',
      location: {
        lat: '',
        lng: '',
        distance: '',
      },
      timestamp: '',
      user: {},
    },
    checkout: '',
    photos: {
      images: [],
    },
  });

  const [userPhoto, setUserPhoto] = useState();

  const handleCheckIn = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const distance = () =>
        Math.round(
          ((getDistance(
            {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            },
            {
              latitude: event.venue.geometry.lat,
              longitude: event.venue.geometry.lng,
            }
          ) *
            0.621371) /
            1000) *
            100
        ) / 100;

      console.log('distance: ', distance());
      if (distance() > 0.5) {
        setResponseResult('fail');
        setReportData((prevState) => ({
          ...prevState,
          check_in: {
            status: false,
            location: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
              distance: distance(),
            },
            timestamp: `${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`,
            user: user,
          },
        }));
      } else {
        setReportData((prevState) => ({
          ...prevState,
          check_in: {
            status: true,
            location: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
              distance: () => distance(),
            },
            timestamp: `${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`,
            user: user,
          },
        }));
      }
    });
  };

  useEffect(() => {
    fetch(`/api/users/${user.id}`, {
      method: 'GET',
      headers: authHeader(),
      mode: 'cors',
      cache: 'default',
    })
      .then((res) => res.json())
      .then((response) => setUserPhoto(response.image))
      .catch((err) => console.log(err));

    fetch(`/api/${report.type}s/${report.id}`, {
      method: 'GET',
      headers: authHeader(),
      mode: 'cors',
      cache: 'default',
    })
      .then((res) => res.json())
      .then((response) => setEvent(response))
      .catch((err) => console.log(err));

    console.log(reportData);
  }, [report, user]);

  return (
    <div className='modal-container d-flex justify-content-center align-items-center'>
      <div className='modal-form'>
        <Back
          onAdd={() =>
            setReport((prevState) => ({ ...prevState, show: false }))
          }
        />
        <Form className='d-flex flex-column justify-content-between px-5 pb-5'>
          <div>
            <div className='form-header'>
              <h1>Report</h1>
              <hr />
            </div>
            <div className='form-grid container'>
              <div className='row'>
                <div className='col-12'>
                  {reportData.check_in.status === '' && (
                    <Button onClick={() => handleCheckIn()}>Check In!</Button>
                  )}
                  {reportData.check_in.status !== '' && (
                    <>
                      <div className='d-flex flex-column p-3 w-100 report-user'>
                        <div className='d-flex flex-column align-items-center mb-3'>
                          <img
                            src={userPhoto}
                            alt={`${user.first_name} ${user.last_name}`}
                            title={`${user.first_name} ${user.last_name}`}
                            className='report-user-img'
                          />
                          <div className='px-3'>
                            <h2>{`${user.first_name} ${user.last_name}`}</h2>
                            <hr />
                            <div className='d-flex flex-column'>
                              {reportData.check_in.status === true && (
                                <span
                                  className='text-center'
                                  style={{ color: 'var(--table-green)' }}
                                >
                                  Checked In:
                                </span>
                              )}
                              {reportData.check_in.status === false && (
                                <span
                                  className='text-center'
                                  style={{ color: 'var(--table-red)' }}
                                >
                                  <b>Attempted Check In:</b>
                                </span>
                              )}
                              <span>{reportData.check_in.timestamp}</span>
                              <span>
                                {reportData.check_in.location.distance} miles
                                from location
                              </span>
                            </div>
                          </div>
                        </div>
                        {reportData.check_in.status === true && (
                          <Alert
                            variant='success'
                            className='alert m-0 w-100 text-center'
                          >
                            <p className='mb-0'>Checked In!</p>
                          </Alert>
                        )}
                        {reportData.check_in.status === false && (
                          <Alert
                            variant='danger'
                            className='alert m-0 w-100 text-center'
                          >
                            <p className=''>
                              Try again when you arrive at the venue!
                            </p>
                            <Button onClick={() => handleCheckIn()}>
                              Try Again
                            </Button>
                          </Alert>
                        )}

                        <GoogleMap
                          lat={reportData.check_in.location.lat}
                          lng={reportData.check_in.location.lng}
                          venue={event.venue}
                        />
                      </div>
                    </>
                  )}
                  <hr />
                </div>
                <div className='col-12 col-lg-6'>
                  <TextInput
                    label='Report Name'
                    type='text'
                    name='name'
                    // handleChange={handleChange}
                    // value={editForm?.date}
                  />
                  <div className='row'>
                    <div className='col col-lg-4 p-0 pr-1'>
                      <TextInput
                        label='Sales'
                        type='number'
                        name='sales'
                        // handleChange={handleChange}
                        // value={editForm?.date}
                      />
                    </div>
                    <div className='col col-lg-4 p-0 pr-1'>
                      <TextInput
                        label='Interactions'
                        type='number'
                        name='interactions'
                        // handleChange={handleChange}
                        // value={editForm?.date}
                      />
                    </div>
                    <div className='col col-lg-4 p-0 pr-1'>
                      <TextInput
                        label='Overall'
                        type='number'
                        name='overall'
                        // handleChange={handleChange}
                        // value={editForm?.date}
                      />
                    </div>
                  </div>
                </div>
                <div className='col-12 col-lg-6 d-flex'>
                  <MultiplePhotos />
                </div>
              </div>
              <div className='form-footer d-flex justify-content-end mt-5'>
                <Button className='mx-2'>Save</Button>
                <Button className='mx-2'>Check Out</Button>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ReportForm;

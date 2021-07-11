import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Back } from '../Buttons';
import { TextInput } from '../Inputs';
import authHeader from '../../../services/auth-header';
import GoogleMap from '../../Map/GoogleMap';

const ReportForm = ({ user, report, setReport }) => {
  const [responseResult, setResponseResult] = useState('');
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
      setReportData((prevState) => ({
        ...prevState,
        check_in: {
          status: true,
          location: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          },
          timestamp: `${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`,
          user: user,
        },
      }));
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

    console.log(process.env.REACT_APP_GOOGLE);
  });

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
              <div className='form-grid container'>
                <div className='row'>
                  <div className='col-12 col-lg-6'>
                    {!reportData.check_in.status && (
                      <Button onClick={() => handleCheckIn()}>Check In!</Button>
                    )}
                    {reportData.check_in.status && (
                      <div className='d-flex'>
                        <div className='d-flex flex-column'>
                          <img
                            src={userPhoto}
                            alt={`${user.first_name} ${user.last_name}`}
                            title={`${user.first_name} ${user.last_name}`}
                            className='upload-img'
                          />
                          <span>{`${user.first_name} ${user.last_name}`}</span>
                          <span>{reportData.check_in.timestamp}</span>
                        </div>
                        <GoogleMap
                          lat={reportData.check_in.location.lat}
                          lng={reportData.check_in.location.lng}
                        />
                      </div>
                    )}
                    {/* <TextInput label='Report Title' type='text' name='name' /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ReportForm;

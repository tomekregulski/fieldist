import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { Back } from '../Buttons';
import { MultiplePhotos, TextInput, Textarea, Stars } from '../Inputs';
import authHeader from '../../../services/auth-header';
import GoogleMap from '../../Map/GoogleMap';
import getDistance from 'geolib/es/getDistance';

const ReportForm = ({ user, report, setReport }) => {
  // this state holds the value to conditionally render the validation of the user check in
  const [responseResult, setResponseResult] = useState('');
  // this state will hold the fetched data on the event this report is attached to
  const [event, setEvent] = useState({});
  // this state is set to store the data we will be sending in our put requests
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
    check_out: '',
    photos: [],
  });

  // hold user photo
  const [userPhoto, setUserPhoto] = useState();

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    function fetches() {
      fetch(`/api/users/${user.id}`, {
        method: 'GET',
        headers: authHeader(),
        mode: 'cors',
        cache: 'default',
      })
        .then((res) => res.json())
        .then((response) => setUserPhoto(response.image))
        .catch((err) => console.log(err));

      // report is passed to this component as prop. this endpoint comes to (for example) /api/demos/1
      fetch(`/api/${report.type}s/${report.id}`, {
        method: 'GET',
        headers: authHeader(),
        mode: 'cors',
        cache: 'default',
      })
        .then((res) => res.json())
        .then((response) => {
          setEvent(response);
          setIsLoaded(true);
        })
        .catch((err) => console.log(err));

      console.log(event);
      console.log(reportData);
    }

    fetches();
    // user is passed to this component as prop. Fetch user's data and set their photo src in state
  }, [report.type, report.id, user.id, reportData, setEvent]);

  const handleCheckIn = () => {
    // get user's location
    navigator.geolocation.getCurrentPosition(function (position) {
      // returns distance between venue and user's current location
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
      // if user is within half mile, set check in data in state and mark true. if not, mark false.
      if (distance() > 10.5) {
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

  const handleSave = () => {
    console.log(reportData);
    // on save, put request sends all data from form to report_template model
    fetch(`/api/reports/${event.report_template_id}`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(reportData),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          setResponseResult('success');
        } else {
          setResponseResult('fail');
        }
      })
      .catch((err) => console.log(err));
  };

  const handleCheckOut = () => {
    // when user clicks on check out, check if the user is currently checked in.
    // only allow check out if user is checked in
    // put request to send data with check out data
    if (reportData.check_in.status) {
      let timestamp = `${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`;
      fetch(`/api/reports/${event.report_template_id}`, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ check_out: timestamp }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res) {
            setResponseResult('success');
          } else {
            setResponseResult('fail');
          }
        })
        .catch((err) => console.log(err));
    }
  };

  const handleSubmit = () => {
    // when user clicks submit, this sets the status of the event to 'pending review' and PUT it
    // setEvent((prevState) => ({ ...prevState, status: 'pending review' }));
    fetch(`/api/${event.type}s/${event.id}`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ status: 'pending review' }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          setResponseResult('success');
        } else {
          setResponseResult('fail');
        }
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    // grab value of inputs as they change and save in state
    setReportData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
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
            <Form className='d-flex flex-column justify-content-between px-5 pb-5'>
              <div>
                <div className='form-header'>
                  <h1>Report</h1>
                  <hr />
                </div>
                <div className='form-grid container'>
                  <div className='row'>
                    <div className='col-12'>
                      {event.report_template.check_in.status === '' && (
                        <Button onClick={() => handleCheckIn()}>
                          Check In!
                        </Button>
                      )}
                      {event.report_template.check_in.status !== '' && (
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
                                  {event.report_template.check_in.status ===
                                    true && (
                                    <span
                                      className='text-center'
                                      style={{ color: 'var(--table-green)' }}
                                    >
                                      Checked In:
                                    </span>
                                  )}
                                  {event.report_template.check_in.status ===
                                    false && (
                                    <span
                                      className='text-center'
                                      style={{ color: 'var(--table-red)' }}
                                    >
                                      <b>Attempted Check In:</b>
                                    </span>
                                  )}
                                  <span>
                                    {event.report_template.check_in.timestamp}
                                  </span>
                                  <span>
                                    {
                                      event.report_template.check_in.location
                                        .distance
                                    }{' '}
                                    miles from location
                                  </span>
                                </div>
                              </div>
                            </div>
                            {event.report_template.check_in.status === true && (
                              <Alert
                                variant='success'
                                className='alert m-0 w-100 text-center'
                              >
                                <p className='mb-0'>Checked In!</p>
                              </Alert>
                            )}
                            {event.report_template.check_in.status ===
                              false && (
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
                              lat={
                                event
                                  ? event.report_template.check_in.location.lat
                                  : reportData.check_in.location.lat
                              }
                              lng={
                                event
                                  ? event.report_template.check_in.location.lng
                                  : reportData.check_in.location.lng
                              }
                              venue={event.venue}
                            />
                          </div>
                        </>
                      )}
                      <hr />
                    </div>
                    <div className='col-12 col-lg-6 d-flex flex-column'>
                      <MultiplePhotos setter={setReportData} />
                      {console.log(event)}
                      <div className='d-flex justify-content-between mt-3 multi-img-cont'>
                        {event.report_template.photos !== undefined
                          ? event.report_template.photos.map((src) => (
                              <img
                                key={src}
                                className='upload-img-multi mr-1'
                                src={src}
                                alt={src}
                              />
                            ))
                          : null}
                      </div>
                    </div>
                    <div className='col-12 col-lg-6'>
                      <TextInput
                        label='Report Name'
                        type='text'
                        name='name'
                        handleChange={handleChange}
                        value={event.report_template?.name}
                      />
                      <TextInput
                        label='How many units were sold?'
                        type='number'
                        name='sales'
                        handleChange={handleChange}
                        value={event.report_template?.sales}
                      />
                      <TextInput
                        label='How many customers did you interact with?'
                        type='number'
                        name='interactions'
                        handleChange={handleChange}
                        value={event.report_template?.interactions}
                      />
                      <Stars
                        label={
                          'On a scale of 1 (poor) to 5 (great), what would you say that the overall impression of the customers was?'
                        }
                        name='overall'
                        setReportData={setReportData}
                        value={event.report_template?.overall}
                      />
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-12'>
                      <Textarea
                        label='Additional Comments'
                        type='textarea'
                        name='comments'
                        height='7rem'
                        handleChange={handleChange}
                        value={event.report_template?.comments}
                      />
                    </div>
                  </div>
                  <div className='form-footer d-flex justify-content-end mt-5'>
                    <Button className='mx-2' onClick={() => handleSave()}>
                      Save
                    </Button>
                    <Button className='mx-2' onClick={() => handleCheckOut()}>
                      Check Out
                    </Button>
                    <Button className='mx-2' onClick={() => handleSubmit()}>
                      Submit
                    </Button>
                  </div>
                </div>
              </div>
            </Form>
          </div>
        </div>
      )}
    </>
  );
};

export default ReportForm;

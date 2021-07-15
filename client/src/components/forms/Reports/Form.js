import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { Back } from '../Buttons';
import { MultiplePhotos, TextInput, Textarea, Stars } from '../Inputs';
import authHeader from '../../../services/auth-header';
import GoogleMap from '../../Map/GoogleMap';
import getDistance from 'geolib/es/getDistance';

const ReportForm = ({ user, report, setShowReport, hello }) => {
  // this state holds the value to conditionally render the validation of the user check in
  const [responseResult, setResponseResult] = useState('');
  // this state will hold the fetched data on the report.all this report is attached to
  // const [event, setEvent] = useState({});
  // this state is set to store the data we will be sending in our put requests

  const [checkIn, setCheckIn] = useState({
    check_in: {
      status: report.all.report_template.check_in.status || '',
      location: {
        lat: report.all.report_template.check_in.location.lat || '',
        lng: report.all.report_template.check_in.location.lng || '',
        distance: report.all.report_template.check_in.location.distance || '',
      },
      timestamp: report.all.report_template.check_in.timestamp || '',
      user: report.all.report_template.check_in.user || '',
    },
  });

  const [reportData, setReportData] = useState({
    name: '',
    sales: 0,
    interactions: 0,
    overall: 0,
    comments: '',
    // check_in: checkIn,
    check_out: '',
    photos: report.all.report_template.photos || [],
  });

  // hold user photo
  const [userPhoto, setUserPhoto] = useState();

  const [isLoaded, setIsLoaded] = useState(false);

  const handleCheckIn = () => {
    // get user's location
    navigator.geolocation.getCurrentPosition(async (position) => {
      // returns distance between venue and user's current location
      const distance = () => {
        return (
          Math.round(
            ((getDistance(
              {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              },
              {
                latitude: report.all.venue.geometry.lat,
                longitude: report.all.venue.geometry.lng,
              }
            ) *
              0.621371) /
              1000) *
              100
          ) / 100
        );
      };

      console.log('distance: ', distance());
      const distBetween = await distance();

      // if user is within half mile, set check in data in state and mark true. if not, mark false.
      if (distance() > 10.5) {
        setResponseResult('fail');
        setCheckIn((prevState) => ({
          ...prevState,
          check_in: {
            status: false,
            location: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
              distance: distBetween,
            },
            timestamp: `${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`,
            user: user,
          },
        }));
      } else {
        setCheckIn((prevState) => ({
          ...prevState,
          check_in: {
            status: true,
            location: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
              distance: distBetween,
            },
            timestamp: `${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`,
            user: user,
          },
        }));
      }
    });
    console.log(checkIn);
  };

  useEffect(
    () =>
      fetch(`/api/reports/${report.all.report_template_id}`, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(checkIn),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res) {
            setResponseResult('success');
          } else {
            setResponseResult('fail');
          }
        })
        .catch((err) => console.log(err)),
    [checkIn]
  );

  const handleSave = () => {
    console.log(reportData);
    // on save, put request sends all data from form to report_template model
    fetch(`/api/reports/${report.all.report_template_id}`, {
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
    if (report.all.report_template.check_in.status) {
      let timestamp = `${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`;
      fetch(`/api/reports/${report.all.report_template_id}`, {
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
    // when user clicks submit, this sets the status of the report.all to 'pending review' and PUT it
    // setEvent((prevState) => ({ ...prevState, status: 'pending review' }));
    fetch(`/api/${report.all.type}s/${report.all.id}`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ status: 'Pending Review' }),
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

      if (report.all) {
        setIsLoaded(true);
      }
      // report is passed to this component as prop. this endpoint comes to (for example) /api/demos/1
      // fetch(`/api/${report.type}s/${report.id}`, {
      //   method: 'GET',
      //   headers: authHeader(),
      //   mode: 'cors',
      //   cache: 'default',
      // })
      //   .then((res) => res.json())
      //   .then((response) => {
      //     setEvent(response);
      //     setIsLoaded(true);
      //   })
      //   .catch((err) => console.log(err));

      // fetch(`/api/reports/${report.all.report_template_id}`, {
      //   method: 'PUT',
      //   headers: { 'Content-type': 'application/json' },
      //   body: JSON.stringify(reportData),
      // })
      //   .then((res) => res.json())
      //   .then((res) => {
      //     if (res) {
      //       setResponseResult('success');
      //     } else {
      //       setResponseResult('fail');
      //     }
      //   })
      //   .catch((err) => console.log(err));

      console.log(report.all);
      console.log(reportData);
    }

    fetches();
    // user is passed to this component as prop. Fetch user's data and set their photo src in state
  }, [report.type, report.id, user.id, reportData]);

  const handleHello = () => hello();

  return (
    <>
      {isLoaded && (
        <div className='modal-container d-flex justify-content-center align-items-center'>
          <div className='modal-form'>
            <Back onAdd={() => setShowReport(false)} />
            <Form className='d-flex flex-column justify-content-between px-5 pb-5'>
              <div>
                <div className='form-header'>
                  <h1>Report</h1>
                  <hr />
                </div>
                <div className='form-grid container'>
                  <div className='row'>
                    <div className='col-12'>
                      {report.all.report_template.check_in.status === '' && (
                        <Button onClick={() => handleCheckIn()}>
                          Check In!
                        </Button>
                      )}
                      {report.all.report_template.check_in.status !== '' && (
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
                                report.all
                                  ? report.all.report_template.check_in.location
                                      .lat
                                  : reportData.check_in.location.lat
                              }
                              lng={
                                report.all
                                  ? report.all.report_template.check_in.location
                                      .lng
                                  : reportData.check_in.location.lng
                              }
                              venue={report.all.venue}
                            />
                          </div>
                        </>
                      )}
                      <hr />
                    </div>
                    <div className='col-12 col-lg-6 d-flex flex-column'>
                      <MultiplePhotos report={report} />
                      {console.log(report.all)}
                      <div className='d-flex justify-content-between mt-3 multi-img-cont'>
                        {console.log(report.all.report_template.photos)}
                        {report.all.report_template.photos.length
                          ? report.all.report_template.photos.map((src) => (
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
                        value={report.all.report_template?.name}
                      />
                      <TextInput
                        label='How many units were sold?'
                        type='number'
                        name='sales'
                        handleChange={handleChange}
                        value={report.all.report_template?.sales}
                      />
                      <TextInput
                        label='How many customers did you interact with?'
                        type='number'
                        name='interactions'
                        handleChange={handleChange}
                        value={report.all.report_template?.interactions}
                      />
                      <Stars
                        label={
                          'On a scale of 1 (poor) to 5 (great), what would you say that the overall impression of the customers was?'
                        }
                        name='overall'
                        setReportData={setReportData}
                        value={report.all.report_template?.overall}
                        size='24px'
                        edit={true}
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
                        value={report.all.report_template?.comments}
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

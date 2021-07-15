import React, { useState, useEffect, useMemo } from 'react';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import authHeader from '../../../services/auth-header';

const Dropdown = ({
  endpoint,
  defaultOpt,
  label,
  name,
  handleChange,
  value,
  editForm,
  showVenue,
  setShowVenue,
}) => {
  const [data, setData] = useState([]);

  const currValue = useMemo(
    () =>
      editForm === undefined
        ? value && data.length
          ? data.find(({ id }) => id.toString() === value).name
          : defaultOpt
        : defaultOpt,
    [data, value, editForm, defaultOpt]
  );

  // const currName = useMemo(
  //   () =>
  //     value && data.length
  //       ? data.find(({ id }) => id.toString() === value).name
  //       : null,
  //   [data, value]
  // );

  useEffect(() => {
    fetch(endpoint, {
      method: 'GET',
      headers: authHeader(),
      mode: 'cors',
      cache: 'default',
    })
      .then((res) => res.json())
      .then((response) => setData(response.map((res) => res)))
      .catch((err) => console.log(err));

    console.log(showVenue);
  }, [endpoint, showVenue]);

  return (
    <>
      <Form.Group>
        <Form.Label>{label}</Form.Label>
        <div className='d-flex align-items-center'>
          {name === 'venue_id' && (
            <FontAwesomeIcon
              icon={faPlusCircle}
              className='venue-add fa-lg mr-2'
              title='Create Event'
              onMouseOver={() =>
                document.querySelector('.venue-add').classList.add('spin')
              }
              onMouseOut={() =>
                document.querySelector('.venue-add').classList.remove('spin')
              }
              onClick={() => setShowVenue(true)}
            />
          )}
          <Form.Control
            as='select'
            name={name}
            value={value}
            onChange={handleChange}
          >
            <option>{currValue}</option>
            {data.map((d) => {
              return (
                <option key={d.id} value={d.id}>
                  {d.name}
                </option>
              );
            })}
          </Form.Control>
        </div>
      </Form.Group>
    </>
  );
};

export default Dropdown;

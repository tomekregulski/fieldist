import React, { useState, useEffect, useMemo } from 'react';
import Form from 'react-bootstrap/Form';
import authHeader from '../../../services/auth-header';

const Dropdown = ({
  endpoint,
  defaultOpt,
  label,
  name,
  handleChange,
  value,
  editForm,
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

  const currName = useMemo(
    () =>
      value && data.length
        ? data.find(({ id }) => id.toString() === value).name
        : null,
    [data, value]
  );

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
  }, [endpoint]);

  return (
    <>
      <Form.Group>
        <Form.Label>{label}</Form.Label>
        <Form.Control
          as='select'
          name={name}
          value={value}
          onChange={handleChange}
          text={currName}
        >
          <option value={currName}>{currValue}</option>
          {data.map((d) => {
            return (
              <option key={d.id} value={d.id}>
                {d.name}
              </option>
            );
          })}
        </Form.Control>
      </Form.Group>
    </>
  );
};

export default Dropdown;

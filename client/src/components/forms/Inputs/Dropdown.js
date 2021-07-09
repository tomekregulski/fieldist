import React, { useState, useEffect, useMemo } from 'react';
import Form from 'react-bootstrap/Form';

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

  useEffect(() => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((response) => setData(response.map((res) => res)))
      .catch((err) => console.log(err));
  }, [endpoint]);

  const currValue = useMemo(
    () =>
      editForm === undefined
        ? value && data.length
          ? data.find(({ id }) => id.toString() === value).name
          : defaultOpt
        : defaultOpt,
    [data, value, editForm, defaultOpt]
  );

  console.log(currValue);
  return (
    <>
      <Form.Group>
        <Form.Label>{label}</Form.Label>
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
      </Form.Group>
    </>
  );
};

export default Dropdown;

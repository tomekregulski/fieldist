import React, { useState } from 'react';
import { useAsyncDebounce } from 'react-table';
import Form from 'react-bootstrap/Form';
import "./globalFilter.css";

const GlobalFilter = ({ globalFilter, setGlobalFilter }) => {
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);
  return (
    <>
      <Form.Control
        className='mr-5 field'
        value={value || ''}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={'Search'}
      />
    </>
  );
};

export default GlobalFilter;

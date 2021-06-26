import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useAsyncDebounce } from 'react-table';

const GlobalFilter = ({ globalFilter, setGlobalFilter }) => {
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);
  return (
    <>
      <Form.Control
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

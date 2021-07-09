import React from 'react';
import Form from 'react-bootstrap/Form';

const DefaultFilter = ({
  column: { filterValue, preFilteredRows, setFilter },
}) => {
  const count = preFilteredRows.length;
  const onChange = (e) => setFilter(e.target.value || undefined);

  return (
    <Form.Control
      className='mr-5'
      value={filterValue || ''}
      onChange={onChange}
      placeholder={`Search ${count} records...`}
    />
  );
};

export default DefaultFilter;

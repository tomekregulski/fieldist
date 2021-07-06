import React, { useState, useEffect } from 'react';
import Tables from '../../Tables/Tables';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faTags } from '@fortawesome/free-solid-svg-icons';

const CreateBrand = () => {
  const [data, setData] = useState([]);
  const [brandState, setBrandState] = useState({
    name: '',
  });

  const [addForm, setAddForm] = useState({
    show: false,
    form: 'newBrand',
  });

  const [editForm, setEditForm] = useState({
    show: false,
    form: 'editBrand',
    id: '',
    name: '',
  });

  useEffect(() => {
    fetch('/api/brands')
      .then((res) => res.json())
      .then((response) => setData(response.map((res) => res)))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (row) => {
    fetch(`/api/brands/${row.id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));

    window.location.reload();
  };

  const columns = React.useMemo(
    () => [
      {
        id: 'name',
        Header: 'Name',
        accessor: 'name',
      },
      {
        id: 'actions',
        Header: 'Actions',
        accessor: (row) => (
          <>
            <FontAwesomeIcon
              icon={faEdit}
              className='m-1 edit actions'
              onClick={() => {
                setEditForm({
                  show: true,
                  form: 'editBrand',
                  id: row.id,
                  name: row.name,
                });
              }}
            />
            <FontAwesomeIcon
              icon={faTrashAlt}
              className='m-1 delete actions'
              onClick={() => handleDelete(row)}
            />
          </>
        ),
        width: 20,
      },
    ],
    []
  );

  return (
    <>
      <Tables
        columns={columns}
        data={data}
        addForm={addForm}
        setAddForm={setAddForm}
        editForm={editForm}
        setEditForm={setEditForm}
        eventState={brandState}
        setEventState={setBrandState}
        headerTitle='Brands'
        headerIcon={faTags}
      />
    </>
  );
};

export default CreateBrand;

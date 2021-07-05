import React, { useState, useEffect } from 'react';
import Tables from '../../Tables/Tables';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const CreateCampaign = () => {
  const [data, setData] = useState([]);
  const [eventState, setEventState] = useState({
    name: '',
    brand_id: '',
  });

  const [addForm, setAddForm] = useState({
    show: false,
    form: 'newCampaign',
  });

  const [editForm, setEditForm] = useState({
    show: false,
    form: 'editCampaign',
    id: '',
    name: '',
    brand: '',
  });

  useEffect(() => {
    fetch('/api/campaigns')
      .then((res) => res.json())
      .then((response) => setData(response.map((res) => res)))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (row) => {
    fetch(`/api/campaigns/${row.id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));

    window.location.reload();
  };

  const columns = React.useMemo(
    () => [
      {
        id: 'campaignName',
        Header: 'Campaign',
        accessor: 'name',
      },
      {
        id: 'brandName',
        Header: 'Brand',
        accessor: (row) => `${row.brand.name}`,
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
                  form: 'editCampaign',
                  id: row.id,
                  name: row.name,
                  brand: row.brand.name,
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
        eventState={eventState}
        setEventState={setEventState}
      />
    </>
  );
};

export default CreateCampaign;

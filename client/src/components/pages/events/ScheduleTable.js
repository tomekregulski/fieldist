import React, { useState, useEffect } from 'react';
import Tables from '../../Tables/Tables';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ScheduleTable = () => {
  const [data, setData] = useState([]);
  const [addForm, setAddForm] = useState(false);
  const [editForm, setEditForm] = useState({
    show: false,
    id: '',
    type: '',
    venue: '',
    date: '',
    start_time: '',
    duration: '',
    brand: '',
    rep: '',
    campaign: '',
  });

  useEffect(() => {
    fetch('/api/demos')
      .then((res) => res.json())
      .then((response) => setData(response.map((res) => res)))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (row) => {
    fetch(`/api/${row.type}s/${row.id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));

    window.location.reload();
  };

  const columns = React.useMemo(
    () => [
      {
        id: 'brandName',
        Header: 'Brand',
        accessor: (row) => `${row.campaign.brand.name}`,
      },
      {
        id: 'campaignName',
        Header: 'Campaign',
        accessor: (row) => `${row.campaign.name}`,
      },
      {
        id: 'date',
        Header: 'Date',
        accessor: (row) =>
          `${row.date ? new Date(row.date).toLocaleDateString() : ''}`,
      },
      {
        id: 'startTime',
        Header: 'Start Time',
        accessor: 'start_time',
      },
      {
        id: 'duration',
        Header: 'Duration',
        accessor: 'duration',
      },
      {
        id: 'venueName',
        Header: 'Venue',
        accessor: (row) => `${row.venue.name}`,
      },
      {
        id: 'rep',
        Header: 'Rep',
        accessor: (row) => `${row.user.first_name} ${row.user.last_name}`,
      },
      {
        id: 'region',
        Header: 'Region',
        accessor: (row) => `${row.venue.region.name}`,
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
                  id: row.id,
                  type: row.type,
                  venue: row.venue.name,
                  date: row.date,
                  start_time: row.start_time,
                  duration: row.duration,
                  brand: row.campaign.brand.name,
                  rep: `${row.user.first_name} ${row.user.last_name}`,
                  campaign: row.campaign.name,
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
      />
    </>
  );
};

export default ScheduleTable;

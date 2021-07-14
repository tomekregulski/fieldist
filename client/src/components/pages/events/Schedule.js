import React, { useState, useEffect } from 'react';
import Tables from '../../Tables/Tables';
import authHeader from '../../../services/auth-header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEdit,
  faTrashAlt,
  faCalendarAlt,
  faFile,
} from '@fortawesome/free-solid-svg-icons';
import { EditEvent, NewEvent } from '../../forms';
import { ReportForm, ReportView } from '../../forms/Reports';

const Schedule = () => {
  const [data, setData] = useState([]);
  const [eventState, setEventState] = useState({
    type: '',
    brand_id: '',
    date: '',
    campaign_id: '',
    venue_id: '',
    user_id: '',
    start_time: '',
    duration: '',
    report_template_id: '',
  });

  const [addForm, setAddForm] = useState(false);

  const [editForm, setEditForm] = useState({
    show: false,
    id: '',
    type: '',
    venue_id: '',
    date: '',
    start_time: '',
    duration: '',
    brand_id: '',
    user_id: '',
    campaign_id: '',
  });

  const [report, setReport] = useState({
    show: false,
    id: '',
    type: '',
    status: '',
  });

  const myRequest = new Request('/api/demos', {
    method: 'GET',
    headers: authHeader(),
    mode: 'cors',
    cache: 'default',
  });

  useEffect(() => {
    fetch(myRequest)
      .then((res) => res.json())
      .then((response) => setData(response.map((res) => res)))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (row) => {
    fetch(`/api/${row.type}s/${row.id}`, {
      method: 'DELETE',
      headers: authHeader(),
      mode: 'cors',
      cache: 'default',
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));

    window.location.reload();
  };

  const columns = React.useMemo(
    () => [
      {
        id: 'eventType',
        Header: 'Type',
        accessor: 'type',
        width: 75,
      },
      {
        id: 'status',
        Header: 'Status',
        accessor: 'status',
        width: 100,
      },
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
        width: 100,
      },
      {
        id: 'startTime',
        Header: 'Start Time',
        accessor: 'start_time',
        width: 105,
      },
      {
        id: 'duration',
        Header: 'Duration',
        accessor: (row) => `${row.duration} hour(s)`,
        width: 100,
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
        id: 'report',
        Header: 'Report',
        accessor: (row) => (
          <FontAwesomeIcon
            icon={faFile}
            className='m-1 actions'
            onClick={() =>
              setReport({
                show: true,
                id: row.id,
                type: row.type,
                status: row.status,
                all: row,
              })
            }
          />
        ),
        width: 50,
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
                  venue_id: row.venue.name,
                  date: row.date,
                  start_time: row.start_time,
                  duration: row.duration,
                  brand_id: row.campaign.brand.name,
                  user_id: `${row.user.first_name} ${row.user.last_name}`,
                  campaign_id: row.campaign.name,
                });
                setEventState({
                  type: row.type,
                  brand_id: row.brand_id,
                  date: row.date,
                  campaign_id: row.campaign_id,
                  venue_id: row.venue_id,
                  user_id: row.user_id,
                  start_time: row.start_time,
                  duration: row.duration,
                  report_template_id: row.report_template_id,
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
        width: 100,
      },
    ],
    []
  );

  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user);

  return (
    <>
      <Tables
        columns={columns}
        data={data}
        onAdd={() => {
          setAddForm(true);
        }}
        setEditForm={setEditForm}
        headerIcon={faCalendarAlt}
        headerTitle={'Events'}
      />
      {addForm && (
        <NewEvent
          onAdd={() => setAddForm(false)}
          eventState={eventState}
          setEventState={setEventState}
          editForm={editForm}
          setEditForm={setEditForm}
        />
      )}
      {editForm.show && (
        <EditEvent
          editForm={editForm}
          onAdd={() =>
            setEditForm((prevState) => ({ ...prevState, show: false }))
          }
          eventState={eventState}
          setEventState={setEventState}
          setEditForm={setEditForm}
        />
      )}
      {report.show && (
        <>
          {user.roles === 'ROLE_REP' && report.report_status !== 'approved' && (
            <ReportForm user={user} setReport={setReport} report={report} />
          )}
          {user.roles === 'ROLE_ADMIN' && (
            <ReportView user={user} setReport={setReport} report={report} />
          )}
          {user.roles === 'ROLE_CONTACTS' && (
            <ReportView user={user} setReport={setReport} report={report} />
          )}
        </>
      )}
    </>
  );
};

export default Schedule;

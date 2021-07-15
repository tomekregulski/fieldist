import React, { useState, useEffect } from 'react';
import Tables from '../../Tables/Tables';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import authHeader from '../../../services/auth-header';
import { Stars } from '../../forms/Inputs';

function RawData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/demos', {
      method: 'GET',
      headers: authHeader(),
      mode: 'cors',
      cache: 'default',
    })
      .then((res) => res.json())
      .then((response) => setData(response.map((res) => res)))
      .catch((err) => console.log(err));
  }, []);

  const formatTime = (time) => {
    let [h, m] = time.split(':');
    let stamp;
    h < 12 ? (stamp = 'AM') : (stamp = 'PM');
    let hour = ((h + 11) % 12) + 1;
    return `${hour}:${m} ${stamp}`;
  };

  const columns = React.useMemo(() => [
    {
      id: 'type',
      Header: 'Type',
      accessor: (row) => row.type,
      width: 80,
    },
    {
      id: 'brand',
      Header: 'Brand',
      accessor: (row) => row.campaign.brand.name,
    },
    {
      id: 'campaign',
      Header: 'Campaign',
      accessor: (row) => row.campaign.name,
    },
    {
      id: 'date',
      Header: 'Date',
      accessor: (row) =>
        `${row.date ? new Date(row.date).toLocaleDateString() : ''}`,
      width: 80,
    },
    {
      id: 'start_time',
      Header: 'Smart Time',
      accessor: (row) => (row.start_time ? formatTime(row.start_time) : ''),
      width: 120,
    },
    {
      id: 'duration',
      Header: 'Duration',
      accessor: (row) =>
        row.duration
          ? row.duration > 1
            ? `${row.duration} hours`
            : `${row.duration} hour`
          : '',
      width: 100,
    },
    {
      id: 'venue',
      Header: 'Venue',
      accessor: (row) => row.venue.name,
    },
    {
      id: 'rep',
      Header: 'Rep',
      accessor: (row) => `${row.user.first_name} ${row.user.last_name}`,
      width: 120,
    },
    {
      id: 'sales',
      Header: 'Sales',
      accessor: (row) => row.report_template.sales,
      width: 80,
    },
    {
      id: 'interactions',
      Header: 'Interactions',
      accessor: (row) => row.report_template.interactions,
      width: 80,
    },
    {
      id: 'overall',
      Header: 'Overall',
      accessor: (row) => (
        <Stars edit={false} value={row.report_template.overall} />
      ),
      width: 100,
    },
    {
      id: 'comments',
      Header: 'Comments',
      accessor: (row) => row.report_template.comments,
    },
  ]);
  return (
    <Tables
      columns={columns}
      data={data}
      headerIcon={faInfoCircle}
      headerTitle='Reports'
    />
  );
}

export default RawData;

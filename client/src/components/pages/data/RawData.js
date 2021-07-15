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

  const columns = React.useMemo(() => [
    {
      id: 'type',
      Header: 'Event Type',
      accessor: (row) => row.type,
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
      accessor: (row) => row.date,
    },
    {
      id: 'start_time',
      Header: 'Smart Time',
      accessor: (row) => row.start_time,
    },
    {
      id: 'duration',
      Header: 'Duration',
      accessor: (row) => row.duration,
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
    },
    {
      id: 'sales',
      Header: 'Total Sales',
      accessor: (row) => row.report_template.sales,
    },
    {
      id: 'interactions',
      Header: 'Interactions',
      accessor: (row) => row.report_template.interactions,
    },
    {
      id: 'overall',
      Header: 'Overall',
      accessor: (row) => (
        <Stars edit={false} value={row.report_template.overall} />
      ),
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

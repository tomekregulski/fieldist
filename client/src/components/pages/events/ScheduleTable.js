import React, { useState, useEffect } from 'react';
import Tables from '../../Tables/Tables';

const ScheduleTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/demos')
      .then((res) => res.json())
      .then((response) => {
        setData(response.map((res) => res));
      })
      .catch((err) => console.log(err));
  }, []);

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
        accessor: 'date',
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
        accessor: (row) => `${row.user.first_name}`,
      },
      {
        id: 'region',
        Header: 'Region',
        accessor: (row) => `${row.venue.region.name}`,
      },
    ],
    []
  );

  return (
    <>
      <Tables columns={columns} data={data} />
    </>
  );
};

export default ScheduleTable;

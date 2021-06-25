import React, { useState, useEffect } from 'react';
import Tables from '../../Tables/Tables';

const ScheduleTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/demos')
      .then((res) => res.json())
      .then((response) => {
        setData(response.map((res) => res));
        console.log(response);
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
        Header: 'Date',
        accessor: 'date',
      },
      {
        Header: 'Start Time',
        accessor: 'start_time',
      },
      {
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
      {console.log(columns)}
      <Tables columns={columns} data={data} />
    </>
  );
};

export default ScheduleTable;

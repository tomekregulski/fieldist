import React, { useState, useEffect, useCallback } from 'react';
import { useTable } from 'react-table';

import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const DateCell = ({ date }) => {
  return <span>{new Date(date.replace('Z', '')).toLocaleDateString()}</span>;
};

const TableTest = () => {
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

  const dateCell = useCallback(
    ({ row }) => <DateCell date={row.original.updatedAt} />,
    []
  );

  const columns = React.useMemo(
    () => [
      {
        id: 'brandName',
        Header: 'Brand Name',
        accessor: (row) => `${row.campaign.brand.name}`,
      },
      {
        Header: 'Date',
        accessor: 'updatedAt',
        Cell: dateCell,
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <>
      <Table
        responsive
        striped
        bordered
        hover
        className='mt-1'
        {...getTableProps}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  <span className='table-sort'>
                    <FontAwesomeIcon
                      value='campaign.brand.name'
                      onClick={() => this.sortNameAz()}
                      icon={faChevronUp}
                    />
                    <FontAwesomeIcon
                      onClick={() => this.sortNameZa()}
                      name='brand'
                      icon={faChevronDown}
                    />
                  </span>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default TableTest;

import React, { useState, useEffect, useCallback } from 'react';
import { useTable } from 'react-table';

const TableTest = () => {
  const [events, setEvents] = useState({ value: [] });

  const [audits, setAudits] = useState({ value: [] });

  useEffect(() => {
    fetch('/api/demos')
      .then((res) => res.json())
      .then((response) => {
        setEvents(response.map((res) => res));
        console.log(...events);
      })
      .catch((err) => console.log(err));
    fetch('/api/audits')
      .then((res) => res.json())
      .then((response) => {
        setAudits(response.map((res) => res));
        console.log(...audits);
      })
      .catch((err) => console.log(err));
  }, [events.value, audits.value]);

  const data = React.useMemo(
    () => [
      {
        col1: 'Whattup',
        col2: 'World',
      },
      {
        col1: "It's",
        col2: 'Ya',
      },
      {
        col1: 'Boy',
        col2: 'Sway',
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'Brand ID',
        accessor: events,
      },
      {
        Header: 'Brand Name',
        accessor: events.brand_id,
      },
    ],
    []
  );

  // const tableInstance = useTable({ columns, events });

  // const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
  //   tableInstance;

  return (
    <>
      {console.log('columns: ', columns, 'events: ', events)}
      {/* <table {...getTableProps}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
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
      </table> */}
    </>
  );
};

export default TableTest;

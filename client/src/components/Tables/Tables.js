import React from 'react';
import {
  useGlobalFilter,
  useSortBy,
  useTable,
  usePagination,
  useBlockLayout,
  useResizeColumns,
  useFlexLayout,
} from 'react-table';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSortUp,
  faSortDown,
  faSort,
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';
import { GlobalFilter, DefaultApartment } from './Filters';
import Pages from './Pagination/Pages';
import { NewEvent, EditEvent, NewCampaign, EditCampaign } from '../Forms';

import './tables.css';

const Tables = ({
  columns,
  data,
  addForm,
  setAddForm,
  editForm,
  setEditForm,
  eventState,
  setEventState,
}) => {
  const defaultColumn = React.useMemo(
    () => ({
      minWidth: 30,
      width: 156.5,
      maxWidth: 400,
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    preGlobalFilteredRows,
    setGlobalFilter,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { globalFilter, pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      initialState: { pageIndex: 0 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useBlockLayout,
    useResizeColumns,
    useFlexLayout
  );

  const addFormSwitch = () => {
    switch (addForm.form) {
      case 'newEvent':
        return (
          <NewEvent
            addForm={() =>
              setAddForm((prevState) => ({ ...prevState, show: false }))
            }
            eventState={eventState}
            setEventState={setEventState}
          />
        );
      case 'newCampaign':
        return (
          <NewCampaign
            addForm={() =>
              setAddForm((prevState) => ({ ...prevState, show: false }))
            }
            eventState={eventState}
            setEventState={setEventState}
          />
        );
      default:
        console.log(addForm);
        break;
    }
  };

  const editFormSwitch = () => {
    switch (editForm.form) {
      case 'editEvent':
        return (
          <EditEvent
            editForm={editForm}
            addForm={() =>
              setEditForm((prevState) => ({ ...prevState, show: false }))
            }
            eventState={eventState}
            setEventState={setEventState}
          />
        );
      case 'editCampaign':
        return (
          <EditCampaign
            editForm={editForm}
            addForm={() =>
              setEditForm((prevState) => ({ ...prevState, show: false }))
            }
            eventState={eventState}
            setEventState={setEventState}
          />
        );
      default:
        console.log(editForm);
        break;
    }
  };

  return (
    <div className='table-container'>
      {addForm.show === true && addFormSwitch()}
      {editForm.show === true && editFormSwitch()}
      <Table
        responsive
        striped
        bordered
        hover
        className='mt-1'
        {...getTableProps}
      >
        <thead>
          <tr>
            <th className='d-flex align-items-center justify-content-between'>
              <GlobalFilter
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={globalFilter}
                setGlobalFilter={setGlobalFilter}
              />
              <FontAwesomeIcon
                icon={faPlusCircle}
                className='table-add fa-lg'
                title='Create Event'
                onMouseOver={() =>
                  document.querySelector('.table-add').classList.add('spin')
                }
                onMouseOut={() =>
                  document.querySelector('.table-add').classList.remove('spin')
                }
                onClick={() =>
                  setAddForm((prevState) => ({ ...prevState, show: true }))
                }
              />
            </th>
          </tr>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  <div className='d-flex justify-content-between'>
                    {column.render('Header')}
                    <div>
                      {column.canFilter ? column.render('Filter') : null}
                    </div>
                    <div
                      {...column.getResizerProps()}
                      className={`resizer ${
                        column.isResizing ? 'isResizing' : ''
                      }`}
                    />
                    <span className='table-sort'>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <FontAwesomeIcon icon={faSortUp} />
                        ) : (
                          <FontAwesomeIcon icon={faSortDown} />
                        )
                      ) : (
                        <FontAwesomeIcon icon={faSort} />
                      )}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr datatype={row} {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Pages
        canPreviousPage={canPreviousPage}
        canNextPage={canNextPage}
        pageOptions={pageOptions}
        pageCount={pageCount}
        gotoPage={gotoPage}
        nextPage={nextPage}
        previousPage={previousPage}
        setPageSize={setPageSize}
        pageIndex={pageIndex}
        pageSize={pageSize}
      />
    </div>
  );
};

export default Tables;

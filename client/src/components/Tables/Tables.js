import React, { useState, useEffect } from 'react';
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
  faTimesCircle,
  faPenSquare,
  faSortAmountUpAlt,
} from '@fortawesome/free-solid-svg-icons';
import { GlobalFilter } from './Filters';

import './tables.css';

const Tables = ({
  columns,
  data,
  onAdd,
  onReport,
  onEdit,
  headerIcon,
  headerTitle,
  passState,
  // passEdit,
  // setEditForm,
  // setEventState,
  handleDelete,
  // user,
}) => {
  const defaultColumn = React.useMemo(
    () => ({
      minWidth: 30,
      width: 156.5,
      maxWidth: 400,
      Filter: () => null,
    }),
    []
  );
  const [rowId, setrowId] = useState({});
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
  const captureRowId = (row) => {
    setrowId(row);
    console.log(row);
    passState(row);
  };
  useEffect(() => {
    console.log(rowId);
  }, [captureRowId]);

  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user);

  const selectHilight = (e) => {
    let rows = document.querySelectorAll('.body-rows');
    // console.log(rows);
    rows.forEach((row) => {
      let rowData = row.dataset.row;
      rowData === e.target.parentElement.dataset.row
        ? // ? (row.style.backgroundColor = 'black')
          // : (row.style.backgroundColor = '');
          row.classList.toggle('selected')
        : row.classList.remove('selected');
    });
  };
  return (
    <div className='table-container container-fluid'>
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
            <th className='table-header card'>
              <div className='d-flex align-items-baseline'>
                {/* <FontAwesomeIcon icon={headerIcon} className='mr-3 fa-2x' /> */}
                <h1>
                  <span className='title-pipe'>|</span> {headerTitle}
                </h1>
              </div>
              <div className='d-flex align-items-end justify-content-between'>
                <GlobalFilter
                  preGlobalFilteredRows={preGlobalFilteredRows}
                  globalFilter={globalFilter}
                  setGlobalFilter={setGlobalFilter}
                />
                {user.roles === 'ROLE_ADMIN' && (
                  <div className='d-flex justify-content-end'>
                    <FontAwesomeIcon
                      icon={faPlusCircle}
                      className='mb-1 table-add actions fa-lg mr-2'
                      title='Create Event'
                      onMouseOver={() =>
                        document
                          .querySelector('.table-add')
                          .classList.add('spin')
                      }
                      onMouseOut={() =>
                        document
                          .querySelector('.table-add')
                          .classList.remove('spin')
                      }
                      onClick={onAdd}
                    />
                    {rowId.id && (
                      <>
                        <FontAwesomeIcon
                          icon={faPenSquare}
                          className='mb-1 mx-2 edit actions fa-lg'
                          onMouseOver={() =>
                            document
                              .querySelector('.edit')
                              .classList.add('spin')
                          }
                          onMouseOut={() =>
                            document
                              .querySelector('.edit')
                              .classList.remove('spin')
                          }
                          onClick={onEdit}
                        />
                        <FontAwesomeIcon
                          icon={faTimesCircle}
                          className='mb-1 mx-2 delete actions fa-lg'
                          onMouseOver={() =>
                            document
                              .querySelector('.delete')
                              .classList.add('spin')
                          }
                          onMouseOut={() =>
                            document
                              .querySelector('.delete')
                              .classList.remove('spin')
                          }
                          onClick={() => handleDelete(rowId)}
                        />
                        {onReport && (
                          <FontAwesomeIcon
                            icon={faSortAmountUpAlt}
                            className='mb-1 mx-2 report actions fa-lg'
                            onMouseOver={() =>
                              document
                                .querySelector('.report')
                                .classList.add('spin')
                            }
                            onMouseOut={() =>
                              document
                                .querySelector('.report')
                                .classList.remove('spin')
                            }
                            onClick={onReport}
                          />
                        )}
                      </>
                    )}
                  </div>
                )}
                {user.roles === 'ROLE_REP' && rowId.id && (
                  <div className='d-flex justify-content-end align-items-end'>
                    <FontAwesomeIcon
                      icon={faSortAmountUpAlt}
                      className='mb-2 mx-2 actions fa-lg'
                      onClick={onReport}
                    />
                  </div>
                )}
                {user.roles === 'ROLE_CONTACT' && rowId.id && (
                  <div className='d-flex justify-content-end align-items-end'>
                    <FontAwesomeIcon
                      icon={faSortAmountUpAlt}
                      className='mb-2 mx-2 actions fa-lg'
                      onClick={onReport}
                    />
                  </div>
                )}
              </div>
            </th>
          </tr>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} className='headings'>
              {headerGroup.headers.map((column) => (
                <th
                  className='heading'
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
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
              <tr
                className='body-rows'
                data-row={row.id}
                {...row.getRowProps()}
                onClick={(e) => {
                  captureRowId(row.original);
                  // console.log(e.target.parentElement);
                  selectHilight(e);
                }}
              >
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div className='pagination d-flex align-items-center'>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          <input
            type='number'
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Tables;

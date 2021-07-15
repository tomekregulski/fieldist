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
import Pages from './Pagination/Pages';

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
                <FontAwesomeIcon icon={headerIcon} className='mr-3 fa-2x' />
                <h1>{headerTitle}</h1>
              </div>
              <div className='d-flex align-items-center justify-content-between'>
                <GlobalFilter
                  preGlobalFilteredRows={preGlobalFilteredRows}
                  globalFilter={globalFilter}
                  setGlobalFilter={setGlobalFilter}
                />
                {user.roles === 'ROLE_ADMIN' && (
                  <>
                    <FontAwesomeIcon
                      icon={faPlusCircle}
                      className='table-add fa-lg'
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
                          className='m-1 edit actions fa-lg'
                          onClick={onEdit}
                        />
                        <FontAwesomeIcon
                          icon={faTimesCircle}
                          className='m-1 delete actions fa-lg'
                          onClick={() => handleDelete(rowId)}
                        />
                        {onReport && (
                          <FontAwesomeIcon
                            icon={faSortAmountUpAlt}
                            className='m-1 actions fa-lg'
                            onClick={onReport}
                          />
                        )}
                      </>
                    )}
                  </>
                )}
                {user.roles === 'ROLE_REP' && rowId.id && (
                  <FontAwesomeIcon
                    icon={faSortAmountUpAlt}
                    className='m-1 actions fa-lg'
                    onClick={onReport}
                  />
                )}
                {user.roles === 'ROLE_CONTACT' && rowId.id && (
                  <FontAwesomeIcon
                    icon={faSortAmountUpAlt}
                    className='m-1 actions fa-lg'
                    onClick={onReport}
                  />
                )}
              </div>
            </th>
          </tr>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} >
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
              <tr
                datatype={row}
                {...row.getRowProps()}
                onClick={() => captureRowId(row.original)}
              >
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </Table>
      {/* <Pages
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
    </div> */}
      <div className='pagination'>
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
          | Go to page:{' '}
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

import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import Form from 'react-bootstrap/Form';

import './pages.css';

const Pages = ({
  canPreviousPage,
  canNextPage,
  pageOptions,
  pageCount,
  gotoPage,
  nextPage,
  previousPage,
  setPageSize,
  pageIndex,
  pageSize,
}) => {
  let active = pageIndex + 1;
  let items = [];
  for (let number = 1; number <= pageOptions.length; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={(e) => {
          const page = e.target.textContent
            ? Number(e.target.textContent) - 1
            : 0;
          gotoPage(page);
        }}
      >
        {number}
      </Pagination.Item>
    );
  }

  const paginationPages = (
    <>
      <Pagination>{items}</Pagination>
    </>
  );
  return (
    <Pagination className='d-flex flex-column align-items-center'>
      <div className='d-flex mb-2'>
        <Pagination.First
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        />
        <Pagination.Prev
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        />
        {paginationPages}
        <Pagination.Next onClick={() => nextPage()} disabled={!canNextPage} />
        <Pagination.Last
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        />
      </div>

      <Form.Control
        className='pages-dropdown'
        as='select'
        value={pageSize}
        onChange={(e) => {
          setPageSize(Number(e.target.value));
        }}
      >
        {[10, 25, 50].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </Form.Control>
    </Pagination>
  );
};

export default Pages;

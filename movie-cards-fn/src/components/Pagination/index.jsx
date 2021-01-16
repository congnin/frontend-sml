import React from 'react';
import PropTypes from 'prop-types';
import './Pagination.scss';

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func,
};

Pagination.defaultProps = {
  onPageChange: null,
};

function Pagination(props) {
  const { page, totalPages, onPageChange } = props;

  function handlePageChange(newPage) {
    if (onPageChange) {
      onPageChange(newPage);
    }
  }

  return (
    <div className='pagination'>
      <button
        className='pagination__prev'
        disabled={page <= 1}
        onClick={() => handlePageChange(page - 1)}
      >
        Prev
      </button>

      <button
        className='pagination__next'
        disabled={page >= totalPages}
        onClick={() => handlePageChange(page + 1)}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;

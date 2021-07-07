import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';

const Back = ({ onAdd }) => {
  return (
    <div className='back pt-5 pt-lg-3 pl-3'>
      <FontAwesomeIcon
        icon={faArrowCircleLeft}
        className='fa-lg'
        onClick={onAdd}
      />
    </div>
  );
};

export default Back;

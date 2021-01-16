import React from 'react';
import './Loader.scss';

function Loader(props) {
  return (
    <div className='loader'>
      <i className='fas fa-spinner loader__spinner'></i>
      <h1>Loading Results</h1>
    </div>
  );
}

export default Loader;

import React from 'react';
import './Loader.scss';
import ClipLoader from 'react-spinners/ClipLoader';

function Loader() {
  return (
    <div className="container">
      <ClipLoader size={150} color={'#55c57a'} />
    </div>
  );
}

export default Loader;

import React, { Fragment } from 'react';
import TopBar from '../../components/navigation/TopBar';

const MainLayout = (props) => {
  const { children } = props;

  return (
    <Fragment>
      <TopBar />
      {children}
    </Fragment>
  );
}

export default MainLayout;

import React, { Fragment } from 'react';

const AdminLayout = (props) => {
  const { children } = props;

  return (
    <Fragment>
      {children}
    </Fragment>
  );
}

export default AdminLayout;

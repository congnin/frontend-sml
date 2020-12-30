import React from 'react';
import LeftNav from '../../components/LeftNav';

export function PrivatePage(props) {
  const { isAdmin, activeNav, children } = props;

  return (
    <main className="main">
      <div className="user-view">
        <LeftNav isAdmin={isAdmin} activeNav={activeNav} />
        <div className="user-view__content">{children}</div>
      </div>
    </main>
  );
}

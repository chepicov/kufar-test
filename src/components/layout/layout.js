import React from 'react';
import AdList from 'components/adList';

import './layout.styles.css';

const Layout = () => {
  return (
    <div className="layout">
      <div className="layout__wrapper">
        <AdList />
      </div>
    </div>
  );
}

export default Layout;

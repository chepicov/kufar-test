import React from 'react';

import './loading.styles.css';

const Loading = (props) => {
  return (
    <div class="lds-spinner__wrapper">
      <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  );
}

export default Loading;

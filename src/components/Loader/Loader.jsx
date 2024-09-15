import React from 'react';
import { Oval } from 'react-loader-spinner';

export default function Loader() {
  return (
    <div className="loader">
      <Oval
        height={80}
        width={80}
        color="blue"
        visible={true}
        ariaLabel="loading"
      />
    </div>
  );
}

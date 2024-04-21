import React from 'react';
import { FallingLines } from 'react-loader-spinner';
import s from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={s.loader}>
      <FallingLines
        color="#4fa94d"
        width="200"
        visible={true}
        ariaLabel="falling-circles-loading"
      />
    </div>
  );
};

export default Loader;

import React from 'react';
import s from './Button.module.scss'

const Button = ({ onButtonClick }) => {
  return (
    <div className={s.button}>
      <button
        className={s.loadMoreButton}
        type="button"
        onClick={onButtonClick}
      >
        Load more
      </button>
    </div>
  );
};

export default Button;

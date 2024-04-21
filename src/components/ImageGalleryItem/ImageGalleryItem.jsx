import React from 'react';
import s from './ImageGalleryItem.module.scss';

const ImageGalleryItem = ({ image, onShowModal }) => {
  //   console.log('image', image);
  return (
    <li className={s.galleryItem}>
      <img
        className={s.imageItem }
        src={image.webformatURL}
        alt={image.tags}
        onClick={onShowModal}
      />
    </li>
  );
};

// ImageGalleryItem.propTypes = {};

export default ImageGalleryItem;

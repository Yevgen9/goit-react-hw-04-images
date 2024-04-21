import s from './Modal.module.scss';
// import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

// const Modal = () => {
//   return (
//     <div className={s.overlay}>
//       <div className={s.modal}>
//         Modal Content
//         {/* <img src="" alt="" /> */}
//         <ImageGalleryItem />
//       </div>
//     </div>
//   );
// };

const Modal = ({ largeImageURL, onHideModal }) => {
  return (
    <div className={s.overlay} onClick={onHideModal}>
      <div className={s.modal}>
        <img className={s.modalImage} src={largeImageURL} alt="Large" />
      </div>
    </div>
  );
};

export default Modal;

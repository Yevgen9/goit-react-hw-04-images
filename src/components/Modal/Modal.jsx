import s from "./Modal.module.scss";

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

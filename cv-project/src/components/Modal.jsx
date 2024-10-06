import { useEffect, useRef } from "react";

export const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const modalElement = modalRef.current;

    if (modalElement) {
      if (isOpen) {
        modalElement.showModal();
      } else {
        modalElement.close();
      }
    }
  }, [isOpen]);

  const handleCloseModal = () => {
    if (onClose) {
      onClose();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      handleCloseModal();
    }
  };

  return (
    <dialog
      ref={modalRef}
      className="modal"
      onKeyDown={handleKeyDown}
    >
      <a
        href="#"
        className="modal--close--btn"
        onClick={handleCloseModal}
      ></a>
      {children}
    </dialog>
  );
};

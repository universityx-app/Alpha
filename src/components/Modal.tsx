import React, { useRef, useEffect } from "react";
interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
}

const Modal: React.FC<ModalProps> = ({ children, isOpen }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const dialog = dialogRef.current;
    dialog?.showModal();
    return () => {
      dialog?.close();
    };
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      className="fixed inset-0 bg-black/80 p-0 m-0 overflow-hidden "
    >
      {children}
    </dialog>
  );
};

export default Modal;

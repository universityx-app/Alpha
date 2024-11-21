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
      className="rounded-[9px] fixed left-[50%] top-[50%] -translate-y-[50%] -translate-x-[50%]"
    >
      {children}
    </dialog>
  );
};

export default Modal;

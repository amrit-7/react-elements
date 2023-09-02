import React from "react";

import { createPortal } from "react-dom";

const Modal = ({ setShow, children, actionButton }) => {
  const handleClose = () => {
    setShow(false);
  };
  return createPortal(
    <div>
      <div
        onClick={handleClose}
        className="absolute inset-0 bg-gray-100 opacity-80"
      ></div>
      <div className="absolute inset-60 bg-white p-10">
        <div className="flex justify-between h-full flex-col">{children}</div>
        <div className="flex justify-end">{actionButton}</div>
      </div>
    </div>,
    document.getElementById("modal-container")
  );
};

export default Modal;

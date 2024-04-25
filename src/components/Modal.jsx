import React from "react";

const Modal = ({ open, onClose, children }) => {
  return (
    <div
      onClick={onClose}
      className={`fixed flex justify-center items-center inset-0 ${open ? "visible bg-black/20" : "invisible"}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white shadow-lg p-2 rounded-lg transition ease-in-out delay-1000"
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;

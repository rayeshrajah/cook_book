import React from "react";

const Modal = ({ modal, setModal, children}) => {
    if(modal)
        return (
            <div className="modal-background">
                <div className="icon-x-circle-white" onClick={() => setModal(!modal)}></div>
                  <div className="modal-front">
                    {children}
                </div>
            </div>
        );
        else return null;
}

export default Modal
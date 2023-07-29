import React, {useEffect} from "react";
import {createPortal} from "react-dom";
import {CloseButton, ModalWindow, Backdrop} from "./Modal.styled";
import {GoXCircle} from "react-icons/go"


export default function Modal({currentImageUrl, currentImageDescription, onClose}) {

useEffect(() => {
    const handleEscClick = event => {
        if(event.code === 'Escape') {
            onClose();
        }
    };

    window.addEventListener('keydown', handleEscClick);

    return () => {
        window.removeEventListener('keydown', handleEscClick);

    };

}, [onClose]);


const handleBackdrop = event =>  {
 if (event.target === event.currentTarget) {
    onClose();
 }
};

    return createPortal(
        <Backdrop onClick={handleBackdrop}>
           <ModalWindow>
              <CloseButton
                type="button"
                onClick={onClose}
                
              >
               <GoXCircle style={{ fontSize: '30px',  }} />
              </CloseButton>
                 <img
                   src={currentImageUrl}
                   alt={currentImageDescription}
                   loading="lazy"
                 />
           </ModalWindow>
        </Backdrop>,
        document.querySelector('#modal-root'),
        
    );


}
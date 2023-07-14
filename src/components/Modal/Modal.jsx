import React, {Component} from "react";
import {createPortal} from "react-dom";
import {CloseButton, ModalWindow, Backdrop} from "./Modal.styled";
import {GoXCircle} from "react-icons/go"


export default class Modal extends Component {
componentDidMount () {
    window.addEventListener('keydown', this.handleEscClick);
};

componentWillUnmount () {
    window.removeEventListener('keydown', this.handleEscClick);
};

handleEscClick = event => {
    if (event.code === 'Escape') {
        this.props.onClose();
    }
};

handleBackdrop = event =>  {
 if (event.target === event.currentTarget) {
    this.props.onClose();
 }
};

render () {
    const {currentImageUrl, currentImageDescription, onClose} = this.props;

    return createPortal(
        <Backdrop onClick={this.handleBackdrop}>
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

}
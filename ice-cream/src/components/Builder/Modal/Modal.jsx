import React from 'react';
import css from './Modal.module.css';

function Modal({ children }) {
    return (
        <div>
            <div className={css.backdrop}></div>
            <div className={css.modalBody}>
                {children}
            </div>
        </div>
    )
}

export default Modal
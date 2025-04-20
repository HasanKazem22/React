import React from 'react';
import css from './TotalPrice.module.css';

function TotalPrice() {
    return (
        <div className={css.total}>
            <div>Total Price</div>
            <div>3000.00 Tk</div>
        </div>
    )
}

export default TotalPrice
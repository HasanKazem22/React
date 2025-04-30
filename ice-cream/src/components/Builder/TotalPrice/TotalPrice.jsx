import React from 'react';
import css from './TotalPrice.module.css';

function TotalPrice({ price = 0 }) {
    return (
        <div className={css.total}>
            <div>Total Price</div>
            <div>{price.toFixed(2)} Tk</div>
        </div>
    )
}

export default TotalPrice
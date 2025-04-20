import React from 'react'
import css from './Item.module.css'

function Item({ name }) {
    return (
        <li className={css.item}>
            <span>{name}</span>
            <span className={css.quantity}>2</span>
            <div className="right">
                <button type="button" className={[css.plus, 'rounded'].join(' ')}>+</button>
                <button type="button" className={[css.minus, 'rounded'].join(' ')}>-</button>
            </div>
        </li>
    )
}

export default Item
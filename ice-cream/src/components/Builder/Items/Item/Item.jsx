import React from 'react';
import css from './Item.module.css';
import { countBy } from 'lodash';

function Item({ name, scoops, add, remove }) {
    const scoopsByCount = countBy(scoops);

    return (
        <li className={css.item}>
            <span>{name}</span>
            {scoopsByCount[name] >= 0 ? (
                <span className={css.quantity}>{scoopsByCount[name]}</span>
            ) : null}
            <div className="right">
                {/* For send function referance use add.bind */}
                <button type="button" onClick={add.bind(this, name)} className={[css.plus, 'rounded'].join(' ')}>+</button>
                <button type="button" onClick={remove.bind(this, name)} className={[css.minus, 'rounded'].join(' ')}>-</button>
            </div>
        </li>
    )
}

export default Item
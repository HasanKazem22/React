import React from 'react';
import css from './Builder.module.css';
import Items from './Items/Items';
import Modal from './Modal/Modal';
import TotalPrice from './TotalPrice/TotalPrice';

function Builder({ items }) {
    return (
        <div>
            <div className={css.builder}>
                <h3>Build your own Ice Cream Sundae</h3>
                <Items items={items} />
                <TotalPrice />
                <button type="button" className={[css.order, 'rounded'].join(' ')}>
                    Add to Cart
                </button>
            </div>
            <Modal>
                Hello Modal
            </Modal>
        </div>
    )
}

export default Builder
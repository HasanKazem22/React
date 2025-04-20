import React, { Component } from 'react';
import css from './IceCreamBuilder.module.css';
import Builder from '../../components/Builder/Builder';
import IceCream from '../../components/IceCream/IceCream';

export default class IceCreamBuilder extends Component {
    state = {
        items: {
            vanilla: 45,
            chocolate: 50,
            lemon: 35,
            orange: 40,
            strawberry: 60,
        },
        scoops: [],
        totalPrice: 0,
    };

    render() {
        const { items } = this.state;

        return (
            <div className={[css.container, 'container'].join(' ')}>
                <IceCream items={items} />
                <Builder items={items} />
            </div>
        )
    }
}

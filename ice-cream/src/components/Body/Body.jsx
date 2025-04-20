import React from 'react'
import css from './Body.module.css'
import IceCreamBuilder from '../../containers/IceCreamBuilder/IceCreamBuilder';

function Body() {
    return (
        <div className={css.mainBody}>
            <IceCreamBuilder />
        </div>
    )
}

export default Body
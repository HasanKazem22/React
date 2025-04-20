import React from 'react'
import css from './IceCream.module.css'
import Scoop from './Scoop/Scoop'

function IceCream({ items }) {
    const flavors = Object.keys(items); // Convert items keys object to array ['vanilla', 'chocolate']

    return (
        <div>
            <div className={css.icecream}>
                <p className={css.cone}></p>

                {flavors.map((flavor) => (
                    // loop or map react needs an unique key
                    <Scoop key={flavor} scoop={flavor} />
                ))}
                <div className={css.cherry}></div>
            </div>
        </div>
    )
}

export default IceCream
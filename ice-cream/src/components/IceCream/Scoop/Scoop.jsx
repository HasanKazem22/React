import React from 'react'
import css from './Scoop.module.css'

function Scoop({ scoop }) {
    return (
        <div className={[css.scoop, css[scoop]].join(' ')}></div>
        /*
        const items = {
            vanilla: 1,
            orange: 20
        };
        
        console.log(items.vanilla);
        // This two give same result 1
        console.log(items['vanilla']);
        */
    )
}

export default Scoop
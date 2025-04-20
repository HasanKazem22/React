import React from 'react'

/*
props is a JavaScript object. We just use props children.

function Layout(props) {
    return (
        <div>
            {props.children}
        </div>
    )
}
*/

function Layout({ children }) {
    return (
        <div>
            {children}
        </div>
    )
}

export default Layout
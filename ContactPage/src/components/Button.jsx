import React from 'react'

function Button({ text, icon, className, ...rest }) {
    return (
        <div>
            <button
                {...rest}
                className={`${className}`}>{icon} {text}</button>
        </div>
    )
}

export default Button
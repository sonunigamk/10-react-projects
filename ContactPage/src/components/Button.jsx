import React from 'react'

function Button({ text, className }) {
    return (
        <div>
            <button className={`${className}`}>{text}</button>
        </div>
    )
}

export default Button
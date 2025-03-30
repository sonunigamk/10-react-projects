import React from 'react'

function Header() {
    return (
        <div className="navbar min-h-[72px] flex justify-between items-center max-w-[95vw] m-auto">
            <div className="logo">
                <img src="/images/brand_logo.png" alt="logo" />
            </div>
            <ul className='flex items-center justify-center gap-5 font-semibold'>
                <li href="#">Menu</li>
                <li href="#">Location</li>
                <li href="#">About</li>
                <li href="#">Contact</li>
            </ul>
            <div>
                <button className='bg-[#D01C28] text-white px-4 py-1 rounded-sm'>Login</button>
            </div>
        </div>
    )
}

export default Header
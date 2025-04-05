import React, { useState } from 'react';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="navbar px-4 py-3 flex justify-between items-center max-w-[95vw] mx-auto">
            <div className="logo">
                <img src="/images/brand_logo.png" alt="logo" className="h-10" />
            </div>

            {/* Desktop Menu */}
            <ul className='hidden md:flex items-center justify-center gap-5 font-semibold'>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Location</a></li>
                <li><a href="#">About</a></li>gi
                <li><a href="#">Contact</a></li>
            </ul>


            <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)}>
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            <div>
                <button className='bg-[#D01C28] text-white px-4 py-1 rounded-sm hidden md:block'>Login</button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <ul className="absolute top-[72px] left-0 w-full bg-white flex flex-col items-center gap-4 py-4 md:hidden shadow-md">
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Location</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><button className='bg-[#D01C28] text-white px-4 py-1 rounded-sm'>Login</button></li>
                </ul>
            )}
        </div>
    )
}

export default Header;

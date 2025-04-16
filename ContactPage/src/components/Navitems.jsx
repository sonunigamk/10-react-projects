import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons

function Navitems() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='h-[72px] flex justify-between items-center px-4 sm:px-10 relative'>
            <img src="/images/Logo.png" alt="logo" className="h-10 w-auto" />

            {/* Desktop Nav */}
            <ul className='hidden sm:flex gap-8 font-semibold text-[16px]'>
                <li className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'>About</li>
                <li className='cursor-pointer'>Contact</li>
            </ul>

            {/* Hamburger Menu Button for Mobile */}
            <div className='sm:hidden z-20'>
                {isOpen ? (
                    <FaTimes size={24} onClick={() => setIsOpen(false)} className="cursor-pointer" />
                ) : (
                    <FaBars size={24} onClick={() => setIsOpen(true)} className="cursor-pointer" />
                )}
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className='absolute top-[72px] left-0 w-full bg-white shadow-md sm:hidden z-10'>
                    <ul className='flex flex-col items-center gap-4 py-4 font-semibold'>
                        <li className='cursor-pointer'>Home</li>
                        <li className='cursor-pointer'>About</li>
                        <li className='cursor-pointer'>Contact</li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Navitems;

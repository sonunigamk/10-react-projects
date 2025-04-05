import React from 'react'

function Hero() {
    return (
        <div className='main flex flex-col md:flex-row items-center justify-between max-w-[1125px] mx-auto px-4 py-10 gap-10 min-h-[calc(100vh-80px)]'>
            {/* Left Section */}
            <div className="leftside flex flex-col gap-6 md:w-1/2 text-center md:text-left">
                <h1 className='font-extrabold leading-tight text-[40px] md:text-[60px] lg:text-[80px]'>
                    YOUR FEET DESERVE THE BEST
                </h1>

                <p className='font-medium text-gray-600 text-sm md:text-base max-w-md mx-auto md:mx-0'>
                    YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                </p>

                {/* Image only shows here on mobile */}
                <div className="md:hidden flex justify-center">
                    <img src="/images/shoe_image.png" alt="hero-image" className='w-full max-w-[320px]' />
                </div>

                {/* Buttons */}
                <div className='flex flex-col items-center md:items-start gap-4'>
                    <div className="btn flex gap-6 flex-wrap justify-center md:justify-start">
                        <button className='bg-[#D01C28] text-white px-6 py-2 rounded'>Shop Now</button>
                        <button className='border border-black text-gray-700 px-6 py-2 rounded'>Category</button>
                    </div>

                    <div className="bottom">
                        <p className='text-gray-600 text-sm mb-2'>Also Available On</p>
                        <div className='flex gap-4 justify-center md:justify-start'>
                            <img className='h-6' src="/images/amazon.png" alt="amazon-logo" />
                            <img className='h-6' src="/images/flipkart.png" alt="flipkart-logo" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side Image — only visible on desktop */}
            <div className="rightside hidden md:flex md:w-1/2 justify-center">
                <img src="/images/shoe_image.png" alt="hero-image" className='w-full max-w-[400px]' />
            </div>
        </div>
    )
}

export default Hero;

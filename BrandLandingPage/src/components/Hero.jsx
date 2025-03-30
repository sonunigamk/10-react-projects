import React from 'react'

function Hero() {
    return (
        <div className='main flex h-[calc(100vh-80px)] max-w-[1125px] mx-auto items-center pb-10'>
            <div className="leftside flex gap-[30px] flex-col w-[595px] ">
                <h1 className='font-extrabold leading-[102px] text-[100px]'>YOUR FEET DESERVE THE BEST</h1>
                <p className='font-semibold text-gray-500 max-w-[400px]'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className="btn flex gap-10">
                    <button className='text-[16px] bg-[#D01C28] text-white border px-3 py-2 rounded-sm'>Shop Now</button>
                    <button className='text-[16px] bg-transparent text-gray-500 border border-black px-3 py-2 rounded-sm'>Cotegory</button>
                </div>
                <div className="bottom">

                    <p className='text-[14px] mb-2 '>Also Available On</p>
                    <div className='flex gap-[16px]  '>
                        <img className='h-6' src="/images/amazon.png" alt="amazon-logo" />
                        <img className='h-6' src="/images/flipkart.png" alt="flipkart-logo" />
                    </div>
                </div>
            </div>
            <div className="rightside">
                <img src="/images/shoe_image.png" alt="hero-image" />
            </div>
        </div>
    )
}

export default Hero


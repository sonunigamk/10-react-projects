import React from 'react'

function Hero() {
    return (
        <div className='main flex h-[calc(100vh-80px)] max-w-[1125px] mx-auto items-center '>
            <div className="leftside flex gap-[30px] flex-col w-[595px] ">
                <h1 className='font-extrabold leading-[102px] text-[100px]'>YOUR FEET DESERVE THE BEST</h1>
                <p className='font-semibold text-gray-500 max-w-[400px] mb-[-12px]'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className='flex flex-col gap-2'>
                    <div className="btn flex gap-10 pb-2">
                        <button className='text-[15px] bg-[#D01C28] text-white border px-[15px] py-2 rounded-[4px]'>Shop Now</button>
                        <button className='text-[15px] bg-transparent text-gray-500 border border-black px-[15px] py-2 rounded-[4px] '>Cotegory</button>
                    </div>
                    <div className="bottom pb-2">

                        <p className='text-[14px] mb-2 text-gray-700 p-1'>Also Available On</p>
                        <div className='flex gap-[16px] h-6 items-center '>
                            <img className='rounded-xl ' src="/images/amazon.png" alt="amazon-logo" />
                            <img className='rounded-xl' src="/images/flipkart.png" alt="flipkart-logo" />
                        </div>
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


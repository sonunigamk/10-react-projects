import React from 'react'
import Button from './Button'

function ContactPage() {
    return (
        <div className='full-page-div w-[90%] h-[calc(100vh-70px)] m-auto flex flex-col md:overflow-hidden'>
            <h1 className='font-bold text-2xl leading-[100%] mb-2 md:text-4xl lg:font-extrabold lg:text-5xl'>
                CONTACT US
            </h1>
            <p className='text-xs px-2 text-gray-600 md:text-[14px] md:font-semibold w-full lg:text-[16px]'>
                LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA
            </p>

            <div className='main flex flex-col md:flex-row gap-5 mt-4'>
                <div className="left-div w-full md:w-[50%] px-4 flex justify-center">
                    <div className="form-container flex flex-col w-full max-w-md py-10">
                        <form action="">
                            {/* Contact Options Buttons */}
                            <div className='flex flex-col gap-4 w-full'>
                                <div className='flex flex-col sm:flex-row sm:justify-between gap-4 w-full'>
                                    <Button
                                        text="ViaSupport Chat"
                                        className="bg-black text-white rounded-[5px] w-full sm:w-[180px] xl:w-[210px] text-[14px] py-2"
                                    />
                                    <Button
                                        text="Via call"
                                        className="bg-black text-white rounded-[5px] w-full sm:w-[180px] xl:w-[210px] text-[14px] py-2"
                                    />
                                </div>

                                <div className='w-full font-semibold'>
                                    <Button
                                        text="Via email form"
                                        className="text-black px-8 py-1 rounded-[4px] h-[40px] w-full border-2 border-black"
                                    />
                                </div>
                            </div>

                            <div className="form-items flex flex-col gap-5 py-4 mt-5 w-full">
                                <div className='relative w-[96%] mx-auto'>
                                    <label htmlFor="name" className="text-[14px] absolute -top-[12px] left-[10px] bg-white font-semibold">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        className='w-full border-2 border-gray-800 h-[36px] px-2 text-[16px]'
                                    />
                                </div>

                                <div className='relative w-[96%] mx-auto'>
                                    <label htmlFor="e-mail" className="text-[14px] font-semibold absolute -top-[12px] left-[10px] bg-white">
                                        E-mail
                                    </label>
                                    <input
                                        type="text"
                                        className='w-full border-2 border-gray-700 h-[36px] text-[16px] px-2'
                                    />
                                </div>

                                <div className='relative w-[96%] mx-auto'>
                                    <label htmlFor="text" className="text-[14px] font-semibold absolute -top-[12px] left-[10px] bg-white">
                                        Text
                                    </label>
                                    <textarea
                                        name="text"
                                        rows="3"
                                        className='w-full border-2 border-gray-700 text-[16px] px-2 py-2'
                                    />
                                </div>

                                <div className="flex justify-end text-[16px] font-semibold">
                                    <Button
                                        text="Submit"
                                        className="bg-black text-white py-1 rounded-[4px] h-[40px] w-[220px]"
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Right Image */}
                <div className="right-image hidden md:flex md:w-[50%] px-4 items-center justify-center">
                    <img src="images/Contact.svg" alt="Contact-Image" className="max-w-full h-auto" />
                </div>
            </div>
        </div>
    )
}

export default ContactPage

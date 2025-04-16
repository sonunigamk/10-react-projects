import React from 'react'
import Button from './Button'

function ContactPage() {
    return (
        <div className=' full-page-div w-[75%] h-[calc(100vh-70px)] m-auto flex flex-col overflow-hidden '>
            <h1 className='font-extrabold text-[48px] leading-[100%] mb-3'>CONTACT US</h1>
            <p className='font-semibold text-[16px] text-gray-600'>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA</p>

            <div className=' main flex gap-5 w-[1150px]'>
                <div className="left-div">

                    <div className=" form-container flex flex-col w-[460px] py-10 px-[10px]" >

                        <form action="">

                            <div className='flex flex-col gap-4 ' >
                                <div className='flex w-[100%] text-[16px] justify-between font-semibold '>
                                    <Button text="ViaSupport Chat" className="bg-black text-white h-[40px] w-[210px] rounded-[5px] " />
                                    <Button text="Via call" className="bg-black text-white h-[40px] w-[210px] rounded-[5px]" />
                                </div>
                                <div className='w-[100%] font-semibold'>
                                    <Button text="Via email form" className=" text-black px-8 py-1 rounded-[4px] h-[40px] w-[100%] border-2 border-black " />
                                </div>
                            </div>
                            <div className="form-items flex flex-col w-full relative px-[10px] gap-5 py-4">
                                <div className='relative'>
                                    <label htmlFor="name" className="text-[14px] absolute -top-[12px] left-[10px] bg-white font-semibold">Name</label>
                                    <input type="text" className='w-full border-2 border-gray-800 h-[36px] px-2 text-[16px]' />
                                </div>
                                <div className='relative'>
                                    <label htmlFor="e-mail" className="text-[14px] font-semibold absolute -top-[12px] left-[10px] bg-white">E-mail</label>
                                    <input type="text" className='w-full border-2 border-gray-700 h-[36px] text-[16px] px-2 ' />
                                </div>
                                <div className='relative'>
                                    <label htmlFor="text" className="text-[14px] font-semibold absolute -top-[12px] left-[10px] bg-white">Text</label>
                                    <textarea name="text" rows="3" className='w-full border-2 border-gray-700 text-[16px] px-2 py-2' />
                                </div>
                                <div className="flex justify-end text-[16px] font-semibold">
                                    <Button text="Submit" className="bg-black text-white py-1 rounded-[4px] h-[40px] w-[220px]" />
                                </div>
                            </div>

                        </form>

                    </div>
                </div>
                <div className="right-image w-[50%] flex items-center justify-center">
                    <img src="images/Contact.svg" alt="Contact-Image" />
                </div>
            </div>
        </div>
    )
}

export default ContactPage

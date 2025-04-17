import React from 'react'
import Button from './Button'
import { useState } from 'react';
import { IoMdCall } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import { MdEmail } from "react-icons/md";

function ContactPage() {

    const [name, setName] = useState("Sonu");
    const [email, setEmail] = useState("sonu@gmail.com");
    const [text, setText] = useState("please cheak your email");

    function onSubmitButton(event) {
        event.preventDefault();

        console.log(event.target[0].value);
        console.log(event.target[1].value);
        console.log(event.target[2].value);

        setName(event.target[0].value)
        setEmail(event.target[1].value)
        setText(event.target[2].value)

        event.target.reset();
    }


    return (
        <div className='full-page-div w-[80%] m-auto flex flex-col md:h-[calc(100vh-72px)]'>
            <h1 className='font-bold text-2xl leading-[100%] mb-2 md:text-4xl lg:font-extrabold lg:text-5xl'>
                CONTACT US
            </h1>
            <p className='text-xs px-2 text-gray-600  sm:py-3 md:text-[14px] md:font-semibold w-full lg:text-[16px]'>
                LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA
            </p>

            <div className='main flex md:flex-row justify-between'>
                <div className="left-div w-full md:w-[50%] px-5 flex justify-center">
                    <div className="form-container flex flex-col w-full max-w-md py-10">

                        <div className='flex flex-col gap-4 w-full'>
                            <div className='flex flex-col sm:flex-row sm:justify-between gap-4 w-full font-semibold'>
                                <Button
                                    text="Via Support Chat" icon={<MdMessage />}
                                    className="bg-black text-white rounded-[5px] w-full sm:w-[180px] xl:w-[210px] text-[14px] py-2 flex justify-center items-center gap-1"
                                />
                                <Button
                                    text="Via call" icon={<IoMdCall />}
                                    className="bg-black text-white rounded-[5px] w-full sm:w-[180px] xl:w-[210px] text-[14px] py-2 flex justify-center items-center gap-1"
                                />
                            </div>

                            <div className='w-full font-semibold'>
                                <Button
                                    text="Via email form" icon={<MdEmail />}
                                    className="text-black rounded-[5px] w-full text-[14px] py-2 border-2 border-black flex justify-center items-center gap-1"
                                />
                            </div>
                        </div>


                        <form onSubmit={onSubmitButton}>



                            <div className="form-items flex flex-col gap-5 py-4 mt-5 w-full">
                                <div className='relative w-[96%] mx-auto'>
                                    <label htmlFor="name" className="text-[14px] absolute -top-[12px] left-[10px] bg-white font-semibold">
                                        Name
                                    </label>
                                    <input
                                        type="text" name="name"
                                        className='w-full border-2 border-gray-800 h-[36px] px-2 text-[16px]'
                                    />
                                </div>

                                <div className='relative w-[96%] mx-auto'>
                                    <label htmlFor="email" className="text-[14px] font-semibold absolute -top-[12px] left-[10px] bg-white">
                                        E-mail
                                    </label>
                                    <input
                                        type="email" name="email"
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
                                        className="bg-black text-white py-2 rounded-[5px] w-[220px]"
                                    />
                                </div>
                            </div>
                        </form>
                        <div className='form-data  text-[14px] font-semibold'>
                            <h1>Name: {name}</h1>
                            <h1>Email: {email}</h1>
                            <h1>Text: {text}</h1>
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="right-image hidden md:flex md:w-[50%] px-4 items-center justify-center overflow-hidden">
                    <img src="images/Contact.svg" alt="Contact-Image" className="max-w-full h-auto object-contain" />
                </div>
            </div>



        </div>
    )
}

export default ContactPage

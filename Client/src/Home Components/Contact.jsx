import React, { useState } from 'react'

function Contact() {

    const subject = "Mail From Abhay's Portfolio."
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    // const baseUrl = "http://127.0.0.1:5000";
    const baseUrl = "https://animated-portfolio-backend.vercel.app";

    const sendMail = async () => {
        let dataSend = {
            email: email,
            subject: subject,
            message: message,
            firstName:firstName,
            lastName:lastName,
            company:company
        };

        const res = await fetch(`${baseUrl}/email/sendEmail`, {
            method: "POST",
            body: JSON.stringify(dataSend),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
        });
        const json = await res.json();
        if (json) {
            alert(json.message);
        }

    }


    return (
        <>
            <div className='min-h-screen bg-gray-900 text-white flex flex-col justify-center'>
                <div className="flex items-center justify-center">
                    <div className="container max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Left Section */}
                        <div className="flex flex-col justify-center space-y-6">
                            <div className="items-center space-x-3">
                                <h1 className="text-5xl font-bold tracking-wide">Social Media Links</h1>
                            </div>
                            <h2 className="text-4xl font-bold">Get in touch.</h2>
                            <p className="text-gray-400 text-lg">
                                Need some help? Let me know what you need, and I'll get straight back to you.
                            </p>
                        </div>

                        {/* Right Section: Form */}
                        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                            <form className="space-y-6">
                                {/* First Name & Last Name */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-400">
                                            First Name
                                        </label>
                                        <input
                                            id="firstName"
                                            name='firstname' onChange={(e) => setFirstName(e.target.value)}
                                            type="text"
                                            className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="First Name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-400">
                                            Last Name
                                        </label>
                                        <input
                                            id="lastName"
                                            name='lastname' onChange={(e) => setLastName(e.target.value)}
                                            type="text"
                                            className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Last Name"
                                        />
                                    </div>
                                </div>

                                {/* Company & Email Address */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="company" className="block text-sm font-medium text-gray-400">
                                            Company
                                        </label>
                                        <input
                                            id="company"
                                            name='company' onChange={(e) => setCompany(e.target.value)}
                                            type="text"
                                            className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Company"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                                            Email Address
                                        </label>
                                        <input
                                            id="email" name='email' onChange={(e) => setEmail(e.target.value)}
                                            type="email"
                                            className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Email Address"
                                        />
                                    </div>
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-400">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name='message' onChange={(e) => setMessage(e.target.value)}
                                        rows="4"
                                        className="mt-1 block w-full resize-none bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Start typing here..."

                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="button" onClick={()=>sendMail()}
                                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md text-lg font-medium transition duration-300"
                                >
                                    Send
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className='footer flex flex-col items-center mt-[8rem] align-text-bottom text-center'>
                    <p> &copy; Copyright 2024 </p>
                    <p>@<a href="#">abhaykevat.vercel.app</a> All Rights Reserved</p>
                </div>
            </div>
        </>
    )
}

export default Contact
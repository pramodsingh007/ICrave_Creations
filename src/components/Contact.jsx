import React, { useRef } from 'react';
import Image7 from '../assets/img7.jpg';
import emailjs from '@emailjs/browser';
const ContactUsSection = () => {
  const form = useRef()
  const submitHandler  = (e)=>{

    e.preventDefault()    
    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_KEY, import.meta.env.VITE_TEMPLATE_ID, form.current,{publicKey:import.meta.env.VITE_PUBLIC_KEY})
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset()
          alert("email send!")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    
  }
  return (
    <div className="container mx-auto px-4 py-16 md:flex md:items-center" id='contact'>
    <div className="w-full md:w-1/2 px-4">
      <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
      <p className="text-gray-700 mb-8">
        Let us help you design your dream space. Fill out the form below and we'll be in touch shortly.
      </p>
      <form ref={form} onSubmit={submitHandler} action="#" method="POST" className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-2 text-sm font-medium">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="shadow-sm px-4 py-3 rounded-md focus:outline-none focus:ring-indigo-500 focus:ring-1"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2 text-sm font-medium">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="shadow-sm px-4 py-3 rounded-md focus:outline-none focus:ring-indigo-500 focus:ring-1"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone" className="mb-2 text-sm font-medium">
            Contact Number
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            className="shadow-sm px-4 py-3 rounded-md focus:outline-none focus:ring-indigo-500 focus:ring-1"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="mb-2 text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="shadow-sm px-4 py-3 rounded-md focus:outline-none focus:ring-indigo-500 focus:ring-1"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Send Message
        </button>
      </form>
    </div>
    <div className="hidden md:block w-1/2 px-4">
      <img
        src={Image7}
        alt="Interior Design"
        className="rounded-lg shadow-lg object-cover h-full"
      />
    </div>
  </div>
  
  );
};

export default ContactUsSection;

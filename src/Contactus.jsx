import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contactus = () => {
  const [formData, setFormData] = useState({ name: '', email: '', mobile: '', message: '' });
  const form = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send email using EmailJS
    try {
      await emailjs.sendForm('service_dohmh93', 'template_ut90tlm', form.current, 'HAPGj3NJ2c51ZMiTb');
      alert('Email sent successfully!');
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send email. Please try again later.');
    }
  };

  return (
    <div className="bg-gray-100">
      <main className="container mx-auto flex justify-center items-center py-10 px-4">
        <div className="bg-white shadow-md rounded-lg p-6 flex space-x-6">
          <div className="w-1/2">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <form ref={form} onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  className="w-full px-3 py-2 border rounded"
                  name="user_name" // Updated name attribute
                  placeholder="Name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <input
                  className="w-full px-3 py-2 border rounded"
                  name="from_email" // Updated name attribute
                  placeholder="Email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              
              <div className="mb-4">
                <textarea
                  className="w-full px-3 py-2 border rounded"
                  name="message" // Correctly matches formData state
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded" type="submit">
                Submit
              </button>
            </form>
          </div>
          <div className="w-1/2">
            <img
              alt="Illustration of a customer service representative"
              className="rounded-lg"
              height="400"
              src="src/contact2.6c5d9556.svg"
              width="400"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contactus;
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import emailjs from 'emailjs-com';
import { useRef } from 'react';


const Contact = () => {


  const [formData, setFormData] = useState({
    user_name: '',
    subject: '',
    user_email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_a7cottv', 'template_xg6jcrt', formData, '5YI8hLlKBhdIrB5q2')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
          setFormData({ user_name: '', subject: '', user_email: '', message: '' });
      }, (error) => {
          console.log(error.text);
          alert('An error occurred, please try again.');
      });
  };

  return (
    <div id='Contact' className="border-b border-neutral-900 pb-20 p-4 max-w-lg mx-auto ">
      <h1 className="my-10 text-center text-4xl text-neutral-500">Contact</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input 
          type="text" 
          name="user_name" 
          value={formData.name} 
          onChange={handleChange} 
          placeholder="Name" 
          className="p-2 border border-neutral-300 bg-neutral-900 rounded"
          required
        />
        <input 
          type="text" 
          name="subject" 
          value={formData.subject} 
          onChange={handleChange} 
          placeholder="Subject" 
          className="p-2 border border-neutral-300 bg-neutral-900 rounded"
          required
        />
        <input 
          type="email" 
          name="user_email" 
          value={formData.email} 
          onChange={handleChange} 
          placeholder="Email" 
          className="p-2 border border-neutral-300 rounded bg-neutral-900"
          required
        />
        <textarea 
          name="message" 
          value={formData.message} 
          onChange={handleChange} 
          placeholder="Message" 
          className="p-2 border border-neutral-300 rounded bg-neutral-900"
          rows="4"
          required
        />
        <button 
          type="submit" 
          className="p-2 bg-purple-500 text-black rounded hover:bg-purple-900"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;

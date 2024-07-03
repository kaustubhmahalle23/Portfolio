import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
          setFormData({ name: '', subject: '', email: '', message: '' });
      }, (error) => {
          console.log(error.text);
          alert('An error occurred, please try again.');
      });
  };

  return (
    <div className="border-b border-neutral-900 pb-20 p-4 max-w-lg mx-auto ">
      <h1 className="my-10 text-center text-4xl text-neutral-500">Contact</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input 
          type="text" 
          name="name" 
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
          name="email" 
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

import React from 'react';

export default function Contact() {
  return (
    <div className='container tleft m4'>
      <span className='w900'>Contact</span>
      <p> Fill and submit the form below to contact</p> <br />

      <label htmlFor="">Name:</label>
      <input type="text" />

      <label htmlFor="">Email:</label>
      <input type="email" />

      <label htmlFor="">Message:</label>
      <input type='text' className='bigInput' />

      <button className='btn primary-bg'>Submit</button>
    </div>
  )
}
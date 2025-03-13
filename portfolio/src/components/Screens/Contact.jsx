import React from 'react';

export default function Contact() {
  return (
    <div className='container'>
    <h1>Contact</h1>
    <p> Fill and submit the form below to contact</p> <br />

    <label htmlFor="">Name:</label>
    <input type="text" />

    <label htmlFor="">Email:</label>
    <input type="text" />

    <label htmlFor="">Message:</label>
    <input type="text" />

    <button className='btn primary-bg'>Submit</button>
    </div>
  )
}
import React from 'react';
import { useParams } from 'react-router';

export default function WorkDetail() {
  const { id } = useParams();

  return (
    <div className='container m4 tleft'>
      <h1>{id}</h1>
      <div className="row">
        <p className='badge-primary'>2020</p>
        <p >Dashboard, User Experience Design</p>
      </div>
      <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
      <img src="/single-blog-post-images/dashboard-user-experience.webp" />
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
      <img src="/single-blog-post-images/car.webp" />
      <img src="/single-blog-post-images/dashboard-delivery-pickup.webp" />
    </div>
  )
}
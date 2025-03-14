import React from 'react';
import BlogPost from '../BlogPost';

export default function Home() {
  return (
    <div className='container m4'>
    Hi, I am John,
    Creative Technologist
    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
    <button>Download Resume</button>
    <div className='secondary-bg' style={{padding: '20px'}}>
      Recent posts
      <a href="">View all</a>
      <BlogPost title="Making a design system from scratch" date="12 Feb 2020" category="Design, Pattern" content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." />
      <BlogPost title="Creating pixel perfect icons in Figma" date="12 Feb 2020" category="Figma, Icon Design" content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." />
    </div>
    Featured works
    Designing Dashboards
    2020
    Dashboard
    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
    Vibrant Portraits of 2020
    2018
    Illustration
    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
    36 Days of Malayalam type
    2018
    Typography
    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
    </div>
  )
}
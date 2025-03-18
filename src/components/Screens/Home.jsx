import React from 'react';
import BlogPost from '../BlogPost';
import WorkCard from '../WorkCard';
import { NavLink } from 'react-router';

export default function Home() {
  return (
    <div className='container home m4'>
      <div className="row aboutjohn">
        <div>
          <h1 className='dark'>
          Hi, I am John, <br />
          Creative Technologist
          </h1>
          <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
          <button className='john-btn primary-bg'>Download Resume</button>
        </div>
        <div>
          <img src="john.png" className='john'/>
        </div>
    </div>
    <div className='secondary-bg recentpost'>
      <div className="arow">
        Recent posts
        <NavLink to={"/Blog"} className='blue'>View all</NavLink>
      </div>
      <div className="row postrow">
      <BlogPost title="Making a design system from scratch" date="12 Feb 2020" category="Design, Pattern" content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." />
      <BlogPost title="Creating pixel perfect icons in Figma" date="12 Feb 2020" category="Figma, Icon Design" content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." />
      </div>
    </div>
    <p>Featured works</p>
    <div>
      <WorkCard image={"index-blog-post-images/designing-dashboards.png"} title="Designing Dashboards" year="2020" category="Dashboard" content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." /> <hr />
      <WorkCard image={"index-blog-post-images/vibrant-portraits.png"} title="Vibrant Portraits of 2020" year="2018" category="Illustration" content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." /> <hr />
      <WorkCard image={"index-blog-post-images/malayalam-type.png"} title="36 Days of Malayalam type" year="2018" category="Typography" content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." /> <hr />
    </div>
    
    </div>
  )
}
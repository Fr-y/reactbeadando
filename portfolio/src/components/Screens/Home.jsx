import React from 'react';
import BlogPost from '../BlogPost';
import WorkCard from '../WorkCard';
import dd from '../../assets/index-blog-post-images/designing-dashboards.png';
import vp from '../../assets/index-blog-post-images/vibrant-portraits.png';
import t36 from '../../assets/index-blog-post-images/malayalam-type.png';
import { NavLink } from 'react-router';

export default function Home() {
  return (
    <div className='container m4'>
    Hi, I am John,
    Creative Technologist
    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
    <button>Download Resume</button>
    <div className='secondary-bg recentpost' style={{padding: '20px'}}>
      <div className="row">
        Recent posts
        <NavLink to={"/Blog"} className='blue'>View all</NavLink>
      </div>
      <div className="row">
      <BlogPost title="Making a design system from scratch" date="12 Feb 2020" category="Design, Pattern" content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." />
      <BlogPost title="Creating pixel perfect icons in Figma" date="12 Feb 2020" category="Figma, Icon Design" content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." />
      </div>
    </div>
    Featured works
    <div>
      <WorkCard image={dd} title="Designing Dashboards" year="2020" category="Dashboard" content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." /> <hr />
      <WorkCard image={vp} title="Vibrant Portraits of 2020" year="2018" category="Illustration" content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." /> <hr />
      <WorkCard image={t36} title="36 Days of Malayalam type" year="2018" category="Typography" content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." /> <hr />
    </div>
    
    </div>
  )
}
import React from 'react';
import WorkCard from '../WorkCard';
import dd from '../../assets/index-blog-post-images/designing-dashboards.png';
import vp from '../../assets/index-blog-post-images/vibrant-portraits.png';
import t36 from '../../assets/index-blog-post-images/malayalam-type.png';

export default function Work() {
  return (
    <div className='container m4 tleft'>
      <span className='w900'>Work</span>
      <div className="cardContainer">
        <WorkCard image={dd} title="Designing Dashboards" year="2020" category="Dashboard" content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." /> <hr />
        <WorkCard image={vp} title="Vibrant Portraits of 2020" year="2018" category="Illustration" content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." /> <hr />
        <WorkCard image={t36} title="36 Days of Malayalam type" year="2018" category="Typography" content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." /> <hr />
        <WorkCard image={dd} title="Components" year="2018" category="Components, Design" content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." /> <hr />
      </div>
    </div>
  )
}
import React from 'react';

function Prodetail() {
  return (
    <div className="flex justify-center space-x-40 mb-12"> {/* Increased space between main divs */}
      <div className="flex flex-col w-1/4 bg-white shadow-2xl rounded-lg overflow-hidden">
        {/* First row of images */}
        <div className="flex space-x-6"> {/* Horizontal spacing between images */}
          <img src="/img/8.jpg" alt="Awareness Projects" className="w-1/2 h-60 object-cover" /> {/* Increased image height */}
          <img src="/img/11.jpg" alt="Awareness Projects" className="w-1/2 h-60 object-cover" /> {/* Increased image height */}
        </div>
        {/* Second row of images */}
        <div className="flex space-x-6 mt-6"> {/* Horizontal spacing between images and margin-top */}
          <img src="/img/14.jpg" alt="Awareness Projects" className="w-1/2 h-60 object-cover" /> {/* Increased image height */}
          <img src="/img/13.jpg" alt="Awareness Projects" className="w-1/2 h-60 object-cover" /> {/* Increased image height */}
        </div>
        <h3 className="text-2xl font-semibold mt-6 mb-6 text-center">Project Usaari</h3> {/* Increased font size and margin */}
      <p className='text-center px-3 text-lg'>Education is the mostlife-changing gift one can provide. Team IOC took charge of supporting children who
aspire to be something big by funding their entire education expenses for a lifetime. The project helped them
focus more on their studies, as the students have shown excellent academic results. From the past 2 years,
Team IOC has been running a free evening school for more than 50 underprivileged students with the help of 3
professional teachers and over 40 youth volunteers from the organization who overlook the development of
these students. Students are provided with allthe basic facilities, like stationery, books, uniforms, etc. They are
also provided with interactive sessions like career guidance or mental health to build their intellect. Future
Prospects Our goal is to launch a fully operational school this year, providing quality education to children in our
community. We're thrilled to announce that we already have over 50 students eagerly awaiting enrollment in
our school. </p></div>
      <div className="flex flex-col w-1/4 bg-white shadow-2xl rounded-lg overflow-hidden">
        {/* First row of images */}
        <div className="flex space-x-6"> {/* Horizontal spacing between images */}
          <img src="/img/17.jpg" alt="Awareness Projects" className="w-1/2 h-60 object-cover" /> {/* Increased image height */}
          <img src="/img/16.jpg" alt="Awareness Projects" className="w-1/2 h-60 object-cover" /> {/* Increased image height */}
        </div>
        {/* Second row of images */}
        <div className="flex space-x-6 mt-6"> {/* Horizontal spacing between images and margin-top */}
          <img src="/img/21.jpg" alt="Awareness Projects" className="w-1/2 h-60 object-cover" /> {/* Increased image height */}
          <img src="/img/22.jpg" alt="Awareness Projects" className="w-1/2 h-60 object-cover" /> {/* Increased image height */}
        </div>
        
        <h3 className="text-2xl mt-6 mb-6 font-semibold text-center">Project Saanjh</h3> {/* Increased font size and margin */}
        <p className='text-center py-5 px-3 text-lg'>Project Saanjh, an initiative focused on mental health awareness, aims to help individuals navigate their mental health challenges. This project provides resources, support, and educational programs to promote mental well-being. There’s always been a taboo attached to mental health in Indian culture. To eliminate this and spread
awareness,the IOC started Project SAANJH. The main motive behind this project was to let people know the
importance of mental health. Underthis project,the team conducted MANN MELA in remote areas with the
help of physiologists, spreading the message thattaking therapy isnt a crime but rather is necessary for one's
mental well-being.</p>
      </div>
    </div>
  );
}

export default Prodetail;

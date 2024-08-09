import React from 'react';

function Team() {
  return (
    <div id="about-us" className="flex flex-col md:flex-row w-full">
      <div className="w-full md:w-1/2">
        <img
          src="/img/27.JPG"
          alt="Initiators of Change"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 bg-teal-700 flex items-center p-8">
        <div className="text-white space-y-4">
          <h2 className="text-4xl font-bold">About Us</h2>
          <p className="text-lg">
          Welcome to Initiators of Change, where Punjab's youth are driving dynamic and impactful change. Since our
establishment in 2015, we've been on a mission to cultivate a new generation of people who are socially active
and aware.Join us in our mission to drive change and
empower others through education. At Initiators of Change, there's a place for everyone who shares our vision
of a world where everyone has the opportunity to thrive. Together, let's build a better future for all.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;

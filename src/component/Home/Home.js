import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
  const handleSeeOurCourses = () => {
    navigate("/courses");
  };
    return (
        <div className="text-center">
        <h1 className="text-3xl m-8 ">
          Welcome to <span className="text-4xl font-bold">Bro Tech</span>
        </h1>
        <p className="mb-8">
          Here we provide
          <span className="text-2xl font-semibold ">Top Notch</span> tech
          courses for every learners. <br /> We are here to make you empowered
          with the skills you need to use in the upcoming future.
        </p>
        <div className='flex flex-col items-center justify-center'>
        <img className='' src="https://images.unsplash.com/photo-1597239450996-ea7c2c564412?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTd8fHRlY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>
        <button
        className="py-4 px-6 m-8 text-xl text-white font-medium rounded-lg bg-gradient-to-rounded-md bg-blue-400 hover:bg-blue-700 text-white"
        onClick={handleSeeOurCourses}
      >
        See Our Courses
      </button>
      </div>

    );
};
    

export default Home;
import React from 'react';

const Course = ({course}) => {
    return (
		<div className='flex flex-col items-center justify-center'>
        <div className=" max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
	    <img src={course.image} alt="" className="object-cover object-center    w-full rounded-t-md h-72 dark:bg-gray-500" />
	    <div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracking-wide">{course.course_name}</h2>
			<p className="dark:text-gray-100">Price : {course.price} BDT</p>
			<p className="dark:text-gray-100">Course Duration : {course.course_duration}</p>
		</div>
		<button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-blue-400 hover:bg-blue-700 text-white">Add to cart</button>
	   </div>
       </div>
       </div>
    );
};

export default Course;
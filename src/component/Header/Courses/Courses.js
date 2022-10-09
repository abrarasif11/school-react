import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import Course from '../../Course/Course';

const Courses = () => {
    const [cart , setCart] = useState([
    ])
    const handleToCart = (course) =>{ 
        const newCart = [...cart, course];
        console.log(newCart);
        setCart(newCart);
        toast.success('Course Added!', {autoClose : 1000})       
    }
   
    const courses = useLoaderData();
    // console.log(courses)
    return (
       <div className='grid grid-cols-3'>
        {
            courses.map(course => <Course 
            key={course.id}
            course={course}  
            handleToCart={handleToCart} 
            >
            </Course>)
        }
       </div>
    );
};

export default Courses;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { FaClock } from 'react-icons/fa'
import ModulesList from '../components/ModulesList';

const SingleCourse = () => {
    const { id } = useParams();
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log(id);

    useEffect(() => {
        axios.get(`/api/Courses/${id}`)
            .then(response => {
                console.log(response.data)
                setCourse(response.data);
            })
            .catch(error => {
                console.log("Error in fetching data", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    return loading 
    ? <Spinner /> 
    : <section className='bg-blue-100 px-5 py-7 grid md:grid-cols-3 md:grid-flow-row grid-cols-1 grid-flow-rows gap-5 md:gap-10'>
        <div className='bg-white p-5 justify-center rounded-xl max-h-max md:col-span-2'>
            <div className="mb-1">
                <p className='text-gray-500 font-mono italic'>
                    {course.level}
                </p>
            </div>
            
            <div className='mb-6'>
                <h1 className='text-3xl text-blue-600 font-mono font-bold'>
                    {course.courseName}
                </h1>
            </div>
            
            <div className='mt-auto -mb-1 italic'>
                <p className='text-gray-600 inline-flex'>
                <FaClock className='mt-0.5 mr-1' />
                    {course.period}
                </p>
                <p className='text-green-600'>
                    {course.price}
                </p>
            </div>
        </div>
        <div className='bg-white rounded-xl p-5 md:row-span-2  justify-between'>
            <div>
                <h2 className='text-xl text-blue-800 font-mono font-bold mb-1'>
                    Providers
                </h2>
                <p className='mb-5 font-medium '>
                    This course was providede by OG for new learners of ReactJs as a start in their carrer
                </p>
            </div>
            
        </div>
        <div className='bg-white p-5 rounded-xl md:col-span-2'>
            <h1 className='text-blue-900 font-bold font-mono text-xl mb-3'>
                Course Description
            </h1>
            <div>
                <p className='font-semibold'>
                    {course.description}
                </p>
            </div>
            <div>
                <ModulesList course={course}/>
            </div>
        </div>
    </section>
}

export default SingleCourse;

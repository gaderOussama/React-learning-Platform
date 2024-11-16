import React from 'react'
import { useState } from 'react'
import { FaClock } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const CourseListing = ({Course}) => {
    const [ShowFullDesc,setShowFullDesc] = useState(false);

    let Description = Course.description;

    if(!ShowFullDesc){
        Description=Description.substring(0,90)+'...';
    }
  return (
    <div className="rounded-xl shadom-md bg-white relative ">
                <div className='p-4'>
                    <div className='mb-6'>
                        <div className='text-gray-500 text-sm'>
                            {Course.level}
                        </div>
                    </div>
                    <div className="text-indigo-700 text-xl mb-3">
                        {Course.courseName}
                    </div>
                    <div className="font-sans">
                        {Description}
                    </div>
                    <button  onClick={() => setShowFullDesc((prevState) =>
                    !prevState)} className="text-indigo-500 text-sm mb-4 hover:text-indigo-800">
                        {ShowFullDesc ? 'Less' : 'More'}
                    </button>
                    <div className='text-slate-600 text-sm mb-1'>
                        <FaClock className='inline text-l mb-0.5 mr-1' />
                        {Course.period}
                    </div>
                    <div className='flex flex-row lg:flex-row justify-between'>
                    <div className='text-md mb-5 text-indigo-800'>
                        {Course.price}
                    </div>
                    <Link to={`/Courses/${Course.id}`} className='bg-indigo-700 rounded-xl text-white p-3 hover:bg-indigo-600 '>
                        Enroll Now!
                    </Link>
                    </div>
                </div>
            </div>
  )
}

export default CourseListing
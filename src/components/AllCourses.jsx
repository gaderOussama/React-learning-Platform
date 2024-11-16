import React from 'react'
import { Link } from 'react-router-dom'

const AllCourses = () => {
  return (
    <>
    <div className='m-auto items-center  w-max mb-10'>
        <Link className='bg-black text-white text-center  py-4 px-10 rounded-xl  hover:bg-gray-900' to='Courses'>View All Courses</Link>
    </div>
    </>
  )
}

export default AllCourses
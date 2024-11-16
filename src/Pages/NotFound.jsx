import React from 'react'
import { FaExclamationTriangle } from 'react-icons/fa'
const NotFound = () => {
  return (
    <section className='text-center flex flex-col justify-center items-center h-96'>
        <FaExclamationTriangle className='text-yellow-400 text-9xl w-auto mb-10' />
        <h1 className='text-6xl text-black'>404 Page Not Found</h1>
    </section>
  )
}

export default NotFound
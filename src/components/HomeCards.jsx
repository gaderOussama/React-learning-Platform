import React from 'react'
import Card from './Card'
const HomeCards = () => {
  return (
    <section className='py-4 font-mono '>
        <div className='container-xl lg:container mx-auto p-5 items-center'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-ls'>
                <Card> 
                    <h1 className='text-xl'>
                        For Begginers
                    </h1>
                    <p className='mb-3'>
                        this is a course for begginers in React
                    </p>
                     <a href="" className=' inline-block bg-black text-white rounded-xl py-2 px-3 hover:bg-gray-800'>
                        join now!
                     </a>
                </Card>
                <Card bg='bg-indigo-200'>
                    <h1 className='text-xl'>
                        For Experts
                    </h1>
                    <p className='mb-3'>
                        this is a course for experts in React
                    </p>
                    <a href="" className=' inline-block bg-black text-white rounded-xl py-2 px-3 hover:bg-gray-800'>
                        join now!
                    </a>
                </Card>
            </div>
        </div>
    </section>
  )
}

export default HomeCards
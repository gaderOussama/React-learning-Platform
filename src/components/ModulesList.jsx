import React from 'react'
import { useState } from 'react'
const ModulesList = ({course}) => {
  return (
    <div className='bg-white p-3 rounded-lg shadow-md'>
        <div> 
            {course.modules.map(module =>(<ModuleDropDow key={module.moduleId} module={module}  />))}
        </div>
    </div>
  )
}
const ModuleDropDow = ({module}) =>{
    const [isOpen,setisOpen]= useState(false);
    return(
        <div className='border-t border-gray-200 pt-3 mt-3'>
            <button onClick={() =>setisOpen(!isOpen)}
                className='flex bg-blue-50 rounded-xl p-5 justify-between w-full text-lg font-medium text-blue-700 hover:text-blue-500'>
                    {module.moduleName}
                    <span> { isOpen ? '-' : '+' } </span>
            </button>
            <div 
            className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                <div className='mt-2 ml-4 text-gray-700'>
                    <ul className='list-disc pl-5'>
                        {module.topics.map((topic , index) => (
                            <li key={index}>{topic}</li>
                        ))}
                    </ul>
                
                </div>

            </div>

        </div>
    )
}

export default ModulesList
import { NavLink } from 'react-router-dom'
import React from 'react'
import {Menu , X} from "lucide-react"
import { useState } from 'react'

const Navl = () =>{
    return(
        <>
        <NavLink to='/' className={({ isActive }) => isActive ? 
                                                                'hover:bg-gray-900 p-2 rounded-xl bg-black' 
                                                                : 'hover:bg-gray-900 p-2 rounded-xl'}
                                                                >
        Home</NavLink>
        <NavLink to="/Courses" className={({ isActive }) => isActive ? 
                                                                'hover:bg-gray-900 p-2 rounded-xl bg-black' 
                                                                : 'hover:bg-gray-900 p-2 rounded-xl'}>Courses</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 
                                                                'hover:bg-gray-900 p-2 rounded-xl bg-black' 
                                                                : 'hover:bg-gray-900 p-2 rounded-xl'}>about</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 
                                                                'hover:bg-gray-900 p-2 rounded-xl bg-black' 
                                                                : 'hover:bg-gray-900 p-2 rounded-xl'}>contact</NavLink>
        
        </>
    )
}

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () =>{
        setIsOpen(!isOpen)
    }
  return (
    <>
    <nav className='w-1/3 flex justify-end'>
        <div className=' hidden w-full md:flex justify-between'>
            <Navl/>
        </div>
        <div className='md:hidden'> 
            <button onClick={toggleNavbar}>
                {isOpen ? <X /> : <Menu />}
            </button>
        </div>   
    </nav>
    {isOpen && (
        <div className='flex flex-col items-center basis-full'>
            <Navl/>
        </div>
    )}
    </>
  );
}

export default Nav;
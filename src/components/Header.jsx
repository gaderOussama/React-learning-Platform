import React from 'react'
import Nav from '../components/Nav'

function Header() {
  return (
    <>
    <header className='bg-purple-700 flex-wrap text-white sticky z-[20] top-0 mx-auto w-full flex items-center justify-between p-5 border-b border-gray-200'>
        <h1>React</h1>
        <Nav />
    </header>
    </>
  )
}

export default Header
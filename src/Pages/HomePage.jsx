import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import CoursesListings from '../components/CoursesListings'
import AllCourses from '../components/AllCourses'

const HomePage = () => {
  return (
    <>
    <Hero />
    <HomeCards />
    <CoursesListings isHome={true} />
    <AllCourses />
    </>
  )
}

export default HomePage
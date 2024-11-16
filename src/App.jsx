import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import React from 'react'
import HomePage from './Pages/HomePage.jsx'
import MainLayout from './Layouts/MainLayout.jsx'
import Courses from './Pages/Courses.jsx'
import NotFound from './Pages/NotFound.jsx'
import SingleCourse from './Pages/SingleCourse.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/about' element={<h>test</h>} />
      <Route path='/Courses' element={<Courses />} />
      <Route path='*' element={<NotFound />} />
      <Route path='/Courses/:id' element={<SingleCourse />} />

    </Route>
  )
)

const App = () => {
  return <RouterProvider router={router} />;
}

export default App
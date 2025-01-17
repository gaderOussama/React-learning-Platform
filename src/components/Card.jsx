import React from 'react'

const Card = ({ children, bg ='bg-gray-300'}) => {
  return (
    <div className={`${bg} p-6 rounded-xl shadow-md`}>
        {children}
    </div>
  )
}

export default Card
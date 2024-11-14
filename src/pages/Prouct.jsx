import React, { useContext } from 'react'
import { DarkMode } from '../context/DarkMode'

const Product = () => {
  const {darkMode} = useContext(DarkMode)
  return (
    <div className={`${darkMode ? "bg-black text-white" : ""}`}>
      <p className='text-2xl text-black'>Productss</p>
    </div>
  )
}

export default Product

import React from 'react'

const Footer = ({darkMode}) => {
  return (
    <footer className={`flex items-center justify-center p-5 border-2 border-gray-300 w-full  ${darkMode ? "bg-black text-white": "bg-white"}`}>
      <div className="">Copyright qodr 2024</div>
    </footer>
  )
}

export default Footer

import React from 'react'


const Navbaar = () => {
  return (
    <nav className='w-full bg-white shadow-md dark:*:'>
      <div className='flex justify-between items-center px-6 py-4'>
        <div className='text-2xl font-bold text-gray-800'>E-Commerce</div>
        <ul className='flex gap-8'>
          <li className='hover:text-blue-600 cursor-pointer transition'>Home</li>
          <li className='hover:text-blue-600 cursor-pointer transition'>About</li>
          <li className='hover:text-blue-600 cursor-pointer transition'>Products</li>
          <li className='hover:text-blue-600 cursor-pointer transition'>☰</li>
        
        </ul>
      </div>
    </nav>
  )
}

export default Navbaar

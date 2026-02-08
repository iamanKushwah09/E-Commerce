import React, { useState } from 'react'
import logo from '../assets/logo.png'

const Navbaar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur shadow z-50">
      <div className="flex justify-between items-center px-6 py-4 relative overflow-hidden">

        {/* Logo */}
        <div className="flex items-center">
        <img
          src={logo}
          alt="E-Commerce Logo"
          className="h-14 w-auto object-contain"
  />
</div>


        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li className="cursor-pointer hover:text-black">New Arrivals</li>
          <li className="cursor-pointer hover:text-black">Men</li>
          <li className="cursor-pointer hover:text-black">Women</li>
          <li className="cursor-pointer hover:text-black">Accessories</li>
          <li className="cursor-pointer hover:text-black">Sales</li>
        </ul>

        {/* Hamburger Icon */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl cursor-pointer"
        >
          ☰
        </button>

        {/* Mobile Menu */}
        {open && (
          <ul className="absolute top-16 right-6 w-40 bg-gray-700 text-white rounded shadow-md md:hidden">
            <li className="px-4 py-2 hover:bg-gray-600 cursor-pointer">
              New Arrivals
            </li>
            <li className="px-4 py-2 hover:bg-gray-600 cursor-pointer">
              Men
            </li>
            <li className="px-4 py-2 hover:bg-gray-600 cursor-pointer">
              Women
            </li>
            <li className="px-4 py-2 hover:bg-gray-600 cursor-pointer">
              Accessories
            </li>
            <li className="px-4 py-2 hover:bg-gray-600 cursor-pointer">
              Sales
            </li>
          </ul>
        )}

      </div>
    </nav>
  )
}

export default Navbaar

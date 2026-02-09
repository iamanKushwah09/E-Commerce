import React, { useState } from 'react'
import { useShop } from '../context/ShopContext'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbaar = () => {
  const [open, setOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const { searchQuery, setSearchQuery, cart, wishlist } = useShop()

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50">
      <div className="flex justify-between items-center px-8 py-4">

        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="SHOP logo" className="h-10 w-auto object-contain" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li className="cursor-pointer hover:text-black transition">New Arrivals</li>
          <li className="cursor-pointer hover:text-black transition">Men</li>
          <li className="cursor-pointer hover:text-black transition">Women</li>
          <li className="cursor-pointer hover:text-black transition">Accessories</li>
          <li className="cursor-pointer hover:text-black transition">Sale</li>
        </ul>

        {/* Icons */}
        <div className="flex gap-6 items-center">
          {/* Search */}
          <div className="flex items-center gap-2">
            {searchOpen && (
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="border border-gray-300 rounded-lg px-3 py-2 w-40 text-sm focus:outline-none focus:border-black"
                autoFocus
              />
            )}
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-xl cursor-pointer hover:text-gray-700 transition"
            >
              🔍
            </button>
          </div>

          {/* Wishlist */}
          <div className="relative cursor-pointer hover:text-gray-700 transition">
            <span className="text-xl">❤️</span>
            {wishlist.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </div>

          {/* Account */}
          <button className="text-xl cursor-pointer hover:text-gray-700 transition">👤</button>

          {/* Cart */}
          <div className="relative cursor-pointer hover:text-gray-700 transition">
            <span className="text-xl">🛒</span>
            {cart.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </div>

          {/* Hamburger Icon */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl cursor-pointer"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col">
            <li className="px-6 py-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
              New Arrivals
            </li>
            <li className="px-6 py-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
              Men
            </li>
            <li className="px-6 py-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
              Women
            </li>
            <li className="px-6 py-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
              Accessories
            </li>
            <li className="px-6 py-3 hover:bg-gray-50 cursor-pointer">
              Sale
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}


export default Navbaar

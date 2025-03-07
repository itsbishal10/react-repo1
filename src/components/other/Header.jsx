import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center'> 
      <h1 className='text-2xl font-medium'>Hello <br/> <span className='text-3xl font-semibold'> Bishal 👋</span></h1>
      <button className='bg-red-500 font-medium text-white px-5 py-2 rounded-sm text-base'>Log Out</button>
    </div>
  )
}

export default Header

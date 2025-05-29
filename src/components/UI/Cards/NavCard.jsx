import React from 'react'
import { useLocation } from 'react-router-dom';

const NavCard = ({label, route}) => {
  const location = useLocation();
  const url = location.pathname;
  return (
    <div className={`px-4 py-1 border border-white rounded-lg ${url == route ? 'bg-white text-black' : '' } hover:bg-white hover:text-black transition-colors duration-300`}>
      {label}
    </div>
  )
}

export default NavCard
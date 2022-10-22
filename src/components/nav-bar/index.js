import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
   const activeStyle = { color: "green" }
   const inactiveStyle = { color: "black" }
   return (
      <div>
         <nav>
            <ul>
               <li><NavLink to="/home" style={({ isActive }) => isActive ? activeStyle : inactiveStyle}>Home</NavLink></li>
               <li><NavLink to="/database" style={({ isActive }) => isActive ? activeStyle : inactiveStyle}>Database</NavLink></li>
            </ul>
         </nav>
      </div>
   )
}

export default NavBar
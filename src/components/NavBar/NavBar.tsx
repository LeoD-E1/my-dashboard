import React from 'react'
import { Link } from 'wouter'

const NavBar = () => {
  return (
    <ul>
      <li> <Link to='/'>Home</Link> </li>
      <li> <Link to='/other'>Other</Link> </li>
    </ul>
  )
}

export default NavBar
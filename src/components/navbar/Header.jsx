import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
   return (
    <header>
      <div>
         <span>Back</span>
      </div>
      <nav>
         <Link to="/">home</Link>
         <Link to="/services">services</Link> 
         <Link to="/portfolio">portfolio</Link>
         <Link to="/about">about me</Link>
         <Link to="/contact">contact me</Link>
      </nav>
    </header>
   )
}
import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <nav className='navbar navbar-dark bg-primary mb-3 py-0'>
        <div className='container'>
          <a href='/' className='navbar-brand'>AppContacts</a>
          <ul className='navbar-nav'>
            <li className='nav-item ml-auto'>
              <Link to='/addContact' className='nav-link'>Accueil</Link>
              <Link to='/Liste' className='nav-link'>My Contacts</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header;

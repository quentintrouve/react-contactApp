import React from 'react'

function Header() {
  return (
    <div>
      <nav className='navbar navbar-dark bg-primary mb-3 py-0'>
        <div className='container'>
          <a href='/' className='navbar-brand'>AppContacts</a>
          <ul className='navbar-nav'>
            <li className='nav-item ml-auto'>
              <a href='/' className='nav-link'>Accueil</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header;

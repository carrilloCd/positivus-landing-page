import './Navbar.scss'

import logo from '../../../assets/images/logo.png'
import { Button } from '@components/ui'
import { NavLink, Link } from 'react-router'

export const Navbar: React.FC = () => {
  return (
    <div className='navbar'>
      <Link to={'/'} className="logo">
        <img src={logo} alt="Logo" />
      </Link>

      <nav className="navbar__menu">
        <NavLink to={"/about"} className='navbar__item'>About us</NavLink>
        <NavLink to={"/services"} className='navbar__item'>Services</NavLink>
        <NavLink to={"/use-cases"} className='navbar__item'>Use Cases</NavLink>
        <NavLink to={"/pricing"} className='navbar__item'>Pricing</NavLink>
        <NavLink to={"/blog"} className='navbar__item'>Blog</NavLink>
        <Button variant='secondary' text='Request a quote' />
      </nav>
    </div>
  )
}

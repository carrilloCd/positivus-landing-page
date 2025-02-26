import './Navbar.scss'

import logo from '../../../assets/images/logo.png'
import { Button } from '@components/ui'

export const Navbar: React.FC = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <nav className="navbar__menu">
        <a href="#about" className='navbar__item'>About us</a>
        <a href="#services" className='navbar__item'>Services</a>
        <a href="#use-cases" className='navbar__item'>Use Cases</a>
        <a href="#pricing" className='navbar__item'>Pricing</a>
        <a href="#blog" className='navbar__item'>Blog</a>
        <Button variant='secondary' text='Request a quote' />
      </nav>
    </div>
  )
}

import './Footer.scss'

import { Button } from '@components/ui'
import { FooterNavbar } from '@components/layout'

export const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <FooterNavbar />

      <div className="footer-contact">
        <div className="footer-contact__info">
          <h4 className='footer-contact__title'>Contact us:</h4>
          <p className="footer-contact__paragraph">Email: info@positivus.com</p>
          <p className="footer-contact__paragraph">Phone: 555-567-8901</p>
          <p className="footer-contact__paragraph">Address: 1234 Main St <br /> Moonstore City Stardust State 12345</p>
        </div>

        <form className="footer-contact__form">
          <input className="footer-contact__input" type="email" placeholder='Email' />
          <Button text='Subscribe to news' variant='tertiary' />
        </form>
      </div>

      <p className='footer-copyright'>© 2023 Positivus. All Rights Reserved. <a href="#">Privacy Policy</a></p>

    </footer>
  )
}
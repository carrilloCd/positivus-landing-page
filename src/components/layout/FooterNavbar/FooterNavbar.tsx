import './FooterNavbar.scss';

import logo from '../../../assets/images/logo-white.png'

export const FooterNavbar: React.FC = () => {
  return (
    <div className='footer-navbar'>
      <div className="footer-navbar__logo">
        <img src={logo} alt="Logo" />
      </div>

      <nav className='footer-navbar__list'>

        <a href="#" className='footer-navbar__link'>About us</a>
        <a href="#" className='footer-navbar__link'>Services</a>
        <a href="#" className='footer-navbar__link'>Use Cases</a>
        <a href="#" className='footer-navbar__link'>Pricing</a>
        <a href="#" className='footer-navbar__link'>Blog</a>        </nav>

      <nav className="footer-navbar__list-social-media">

        <a href="#" className="footer-navbar__link-social-media">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.22178 15.0586H4.30589V5.07422H1.22178V15.0586Z" fill="black" />
            <path d="M0.941406 1.88672C0.941406 2.87109 1.7358 3.66797 2.76384 3.66797C3.74514 3.66797 4.53954 2.87109 4.53954 1.88672C4.53954 0.902344 3.74514 0.0585938 2.76384 0.0585938C1.7358 0.0585938 0.941406 0.902344 0.941406 1.88672Z" fill="black" />
            <path d="M12.8106 15.0586H15.9414V9.57422C15.9414 6.90234 15.3339 4.79297 12.2031 4.79297C10.7078 4.79297 9.67972 5.63672 9.25916 6.43359H9.21243V5.07422H6.26851V15.0586H9.35262V10.1367C9.35262 8.82422 9.58627 7.55859 11.2218 7.55859C12.8106 7.55859 12.8106 9.05859 12.8106 10.1836V15.0586Z" fill="black" />
          </svg>
        </a>

        <a href="#" className="footer-navbar__link-social-media">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="24" height="24" viewBox="0 0 32 32"><path d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z" /></svg>

        </a>

        <a href="#" className="footer-navbar__link-social-media">
          <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.9961 4.4915C16.6854 3.97449 17.3058 3.35409 17.7884 2.63028C17.168 2.90602 16.4442 3.11282 15.7204 3.18176C16.4786 2.73369 17.0301 2.04435 17.3058 1.18267C16.6165 1.59628 15.8238 1.90648 15.031 2.07881C14.3417 1.35501 13.4111 0.941406 12.3771 0.941406C10.378 0.941406 8.75804 2.56135 8.75804 4.56043C8.75804 4.83617 8.79251 5.1119 8.86144 5.38764C5.86282 5.2153 3.1744 3.76769 1.38212 1.59628C1.07192 2.11328 0.899586 2.73369 0.899586 3.42302C0.899586 4.66383 1.51999 5.76677 2.51953 6.42165C1.93359 6.38718 1.34766 6.24931 0.86512 5.97358V6.00804C0.86512 7.76585 2.10593 9.21346 3.76034 9.55813C3.48461 9.62707 3.13994 9.696 2.82973 9.696C2.58847 9.696 2.38166 9.66154 2.1404 9.62707C2.58847 11.0747 3.93267 12.1087 5.51815 12.1432C4.27734 13.1082 2.72633 13.6942 1.03745 13.6942C0.727252 13.6942 0.451517 13.6597 0.175781 13.6252C1.76126 14.6592 3.65694 15.2452 5.72495 15.2452C12.3771 15.2452 15.9961 9.76494 15.9961 4.97403C15.9961 4.8017 15.9961 4.66383 15.9961 4.4915Z" fill="black" />
          </svg>
        </a>
      </nav>
    </div>
  )
}

export default FooterNavbar
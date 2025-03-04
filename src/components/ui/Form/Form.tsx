import { Button } from '../Button/Button';
import './Form.scss';

export const Form: React.FC = () => {
  return (
    <form className='contact-form' autoComplete='off'>
      <div className='contact-form__radios-box'>
        <div className="contact-form__radio-group">
          <label className='contact-form__radio-label'>
            <input className='contact-form__radio-input' type="radio" name='subject' value='Say Hi' required />
            <span className='contact-form__radio-span'></span>
            Say Hi
          </label>
        </div>
        <div className="contact-form__radio-group">
          <label className='contact-form__radio-label'>
            <input className='contact-form__radio-input' type="radio" name='subject' value='Get a Quote' required />
            <span className='contact-form__radio-span'></span>
            Get a Quote
          </label>
        </div>
      </div>

      <div className='contact-form__input-box'>
        <label className='contact-form__label' htmlFor="name">Name</label>
        <input className='contact-form__input' type="text" name='name' id='name' placeholder='Name' required />
      </div>

      <div className='contact-form__input-box'>
        <label className='contact-form__label' htmlFor="email">Email</label>
        <input className='contact-form__input' type="email" name='email' id='email' placeholder='Email' required />
      </div>

      <div className='contact-form__input-box'>
        <label className='contact-form__label' htmlFor="message">Message</label>
        <textarea className='contact-form__textarea' name="message" id="message" placeholder='Message' required></textarea>
      </div>

      <Button text='Send Message' variant='primary' className='contact-form__button' />
    </form>
  )
}


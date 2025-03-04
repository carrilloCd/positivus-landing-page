import './ContactSection.scss';
import { Header, Form } from '@components/ui';
import contactIllustration from '@images/contact-illustration.png'

export const ContactSection: React.FC = () => {
  return (
    <section className='contact-section'>
      <Header
        title='Contact Us'
        subtitle="Connect with Us: Let' s Discuss Your Digital Marketing Needs"
        width='32.3rem'
      />

      <div className="contact-section__form-box">
        <Form />

        <img src={contactIllustration} alt="Contact Illustration" />
      </div>


    </section>
  )
}
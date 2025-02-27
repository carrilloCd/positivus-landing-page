import './ServicesSection.scss'
import seoIllustration from '@images/seo-illustration.png'
import payIllustration from '@images/pay-illustration.png'
import socialIllustration from '@images/social-illustration.png'
import emailIllustration from '@images/email-illustration.png'
import contentIllustration from '@images/content-illustration.png'
import analyticsIllustration from '@images/analytics-illustration.png'
import { Header, ServiceCard } from '@components/ui'

const title = 'Services';
const subtitle = 'At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:'

export const ServicesSection: React.FC = () => {
  return (
    <section className='service-section'>
      <Header title={title} subtitle={subtitle} />

      <div className="service-section__cards">
        <ServiceCard title='Search engine optimization' illustration={seoIllustration} />

        <ServiceCard title='Pay-per-click advertising' illustration={payIllustration} variant='green' />
        <ServiceCard title='Social Media Marketing' illustration={socialIllustration} variant='dark' />
        <ServiceCard title='Email Marketing' illustration={emailIllustration} />
        <ServiceCard title='Content Creation' illustration={contentIllustration} variant='green' />
        <ServiceCard title='Analytics and Tracking' illustration={analyticsIllustration} variant='dark-green' />
      </div>
    </section>
  )
}


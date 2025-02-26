import './HeroSection.scss'
import heroIllustration from '../../../assets/images/hero-illustration.png'

import { Button } from '@components/ui'

export const HeroSection: React.FC = () => {
  return (
    <section className='hero-section'>
      <div className="hero-section__content">
        <h1>Navigating the digital landscape for success</h1>

        <p>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>

        <Button variant='primary' text='Book a consultation' />
      </div>

      <img className='hero-section__illustration' src={heroIllustration} alt="Vector illustration for hero section" />
    </section>
  )
}
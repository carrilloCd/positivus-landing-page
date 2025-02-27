import './CTA.scss'

import { Button } from '@components/ui';
import ctaIllustration from '@images/cta-illustration.png'

export const CTA: React.FC = () => {
  return (
    <section className='cta'>
      <div className="cta__box-info">
        <h3 className='cta__title'>Let's make things happen</h3>
        <p className='cta__description'>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
        <Button text='Get your free proposal' variant='primary' />
      </div>
      <img src={ctaIllustration} alt="Call to action illustration" className='cta__illustration' />
    </section>
  )
}

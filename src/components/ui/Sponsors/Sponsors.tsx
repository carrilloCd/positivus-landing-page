import './Sponsors.scss';
import amazon from '@images/amazon-logo.png';
import dribbble from '@images/dribbble-logo.png';
import hubspot from '@images/hubspot-logo.png';
import notion from '@images/notion-logo.png';
import netflix from '@images/netflix logo.png';
import zoom from '@images/zoom-logo.png';

export const Sponsors: React.FC = () => {
  return (
    <section className='sponsors'>
      <img className='sponsors__logo' src={amazon} alt="Sponsor Logotype" />
      <img className='sponsors__logo' src={dribbble} alt="Sponsor Logotype" />
      <img className='sponsors__logo' src={hubspot} alt="Sponsor Logotype" />
      <img className='sponsors__logo' src={notion} alt="Sponsor Logotype" />
      <img className='sponsors__logo' src={netflix} alt="Sponsor Logotype" />
      <img className='sponsors__logo' src={zoom} alt="Sponsor Logotype" />
    </section>
  )
}

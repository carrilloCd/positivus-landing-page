import './CaseStudiesSection.scss'
import { CaseStudy, Header } from '@components/ui'

const caseStudiesDescription = [
  'For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.',
  'For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.',
  'For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.'
]

export const CaseStudiesSection: React.FC = () => {
  return (
    <section className='case-studies'>
      <Header title='Case Studies' subtitle='Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies' />


      <div className='case-studies__block'>
        {caseStudiesDescription.map(description => (
          <CaseStudy description={description} />
        ))}
      </div>
    </section>
  )
}
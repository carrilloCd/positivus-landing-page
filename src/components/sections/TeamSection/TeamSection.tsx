import './TeamSection.scss'
import { Button, Header, Card } from '@components/ui'
import teamMember1 from '@images/team-member-1.png'




const cards = [
  {
    image: teamMember1,
    name: 'Jhon Smith',
    occupation: 'CEO and Founder',
    description: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy'
  },
  {
    image: teamMember1,
    name: 'Jhon Smith',
    occupation: 'CEO and Founder',
    description: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy'
  }, {
    image: teamMember1,
    name: 'Jhon Smith',
    occupation: 'CEO and Founder',
    description: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy'
  }, {
    image: teamMember1,
    name: 'Jhon Smith',
    occupation: 'CEO and Founder',
    description: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy'
  }, {
    image: teamMember1,
    name: 'Jhon Smith',
    occupation: 'CEO and Founder',
    description: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy'
  }, {
    image: teamMember1,
    name: 'Jhon Smith',
    occupation: 'CEO and Founder',
    description: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy'
  },
]

export const TeamSection: React.FC = () => {
  return (
    <section className='team-section'>
      <Header title='Team' subtitle='Meet the skilled and experienced team behind our successful digital marketing strategies' width='47.3rem' />


      <div className="team-section__cards">
        {cards.map((card) => (
          <Card
            image={card.image}
            name={card.name}
            occupation={card.occupation}
            description={card.description}
          />
        ))}
      </div>

      <Button variant='primary' text='See all team' className='team-section__button' />
    </section>
  )
}
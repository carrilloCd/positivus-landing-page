import './TeamSection.scss'
import { Button, Header, Card } from '@components/ui'
import teamMember1 from '@images/team-member-1.png'
import teamMember2 from '@images/team-member-2.png'
import teamMember3 from '@images/team-member-3.png'
import teamMember4 from '@images/team-member-4.png'
import teamMember5 from '@images/team-member-5.png'
import teamMember6 from '@images/team-member-6.png'




const cards = [
  {
    image: teamMember1,
    name: 'Jhon Smith',
    occupation: 'CEO and Founder',
    description: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy'
  },
  {
    image: teamMember2,
    name: 'Jane Doe',
    occupation: 'Director of Operations',
    description: '7+ years of experience in project management and team leadership. Strong organizational and communication skills'
  }, {
    image: teamMember3,
    name: 'Michael Brown',
    occupation: 'Senior SEO Specialist',
    description: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization'
  }, {
    image: teamMember4,
    name: 'Emily Johnson',
    occupation: 'PPC Manage',
    description: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis'
  }, {
    image: teamMember5,
    name: 'Brian Williams',
    occupation: 'Social Media Specialist',
    description: '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement'
  }, {
    image: teamMember6,
    name: 'Sara Kimh',
    occupation: 'Content Creator',
    description: '2+ years of experience in writing and editing. \n Skilled in creating compelling, SEO-optimized content for various industries'
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
            key={card.name}
          />
        ))}
      </div>

      <Button variant='primary' text='See all team' className='team-section__button' />
    </section>
  )
}
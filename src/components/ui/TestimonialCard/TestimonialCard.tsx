import './TestimonialCard.scss'
interface ITestimonialCardProps {
  text: string;
  role: string;
  author: string;
}

export const TestimonialCard: React.FC<ITestimonialCardProps> = ({
  author,
  role,
  text
}) => {
  return (
    <div className='testimonial-card'>
      <p className='testimonial-card__text'>{text}</p>
      <div>
        <h4 className='testimonial-card__title'>{author}</h4>
        <p className='testimonial-card__role'>{role}</p>
      </div>
    </div>
  )
}

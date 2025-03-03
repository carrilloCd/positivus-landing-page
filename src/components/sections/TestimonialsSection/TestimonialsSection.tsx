import { Carousel, Header, TestimonialCard } from '@components/ui';
import './TestimonialsSection.scss';
import React from 'react';

interface ITestimonial {
  id: number;
  text: string;
  role: string;
  author: string;
}

const testimonials: ITestimonial[] = [
  {
    id: 1,
    author: 'Jhon Smith 1',
    role: 'Marketing Director at XYZ Corp',
    text: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."'
  },
  {
    id: 2,
    author: 'Jhon Smith 2',
    role: 'Marketing Director at XYZ Corp',
    text: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."'
  },
  {
    id: 3,
    author: 'Jhon Smith 3',
    role: 'Marketing Director at XYZ Corp',
    text: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."'
  },
  {
    id: 4,
    author: 'Jhon Smith 4',
    role: 'Marketing Director at XYZ Corp',
    text: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."'
  },
  {
    id: 5,
    author: 'Jhon Smith 5',
    role: 'Marketing Director at XYZ Corp',
    text: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."'
  },
]


export const TestimonialsSection: React.FC = () => {
  return (
    <section className='testimonial-section'>
      <Header title='Testimonials' subtitle='Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services' />

      <div className="testimonial-section__box">

        <Carousel>
          {testimonials.map((t) => (
            <TestimonialCard
              key={t.id}
              text={t.text}
              author={t.author}
              role={t.role}
            />
          ))}
        </Carousel>
      </div>
    </section>
  )
}

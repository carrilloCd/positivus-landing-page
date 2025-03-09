import { Header, TestimonialCard } from "@components/ui";
import { Carousel } from "@components/ui/Carousel/Carousel";
import "./TestimonialsSection.scss";
import React from "react";
interface ITestimonial {
  id: number;
  text: string;
  role: string;
  author: string;
}

const testimonials: ITestimonial[] = [
  {
    id: 1,
    author: "John Doe 1",
    role: "Marketing Director at Acme Inc.",
    text: '"Positivus consistently delivers creative solutions that help us reach new audiences effectively."',
  },
  {
    id: 2,
    author: "Jane Miller 2",
    role: "Project Lead at BetaWorks",
    text: '"Their team is responsive, detail-oriented, and knowledgeable. We are seeing remarkable growth."',
  },
  {
    id: 3,
    author: "Alice Brown 3",
    role: "Head of Growth at Global Ventures",
    text: '"Since partnering with Positivus, we have experienced a steady increase in conversions and brand recognition."',
  },
  {
    id: 4,
    author: "Michael Green 4",
    role: "Lead Developer at InnovateCo",
    text: '"They proactively suggest improvements and consistently deliver results on time and within budget."',
  },
  {
    id: 5,
    author: "Sara Lee 5",
    role: "Operations Manager at SyncSolutions",
    text: '"Their data-driven strategies have streamlined our campaigns and boosted our return on investment."',
  },
];

const CarouselNavigation: React.FC<{
  totalOriginalItems: number;
  currentIndex: number;
  goToPrev: () => void;
  goToNext: () => void;
  goToSlide: (index: number) => void;
}> = ({ totalOriginalItems, currentIndex, goToPrev, goToNext, goToSlide }) => {
  return (
    totalOriginalItems > 1 && (
      <div className="carousel__navigation">
        <button
          onClick={goToPrev}
          className="carousel__arrow carousel__arrow--left"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M22 13.5C22.8284 13.5 23.5 12.8284 23.5 12C23.5 11.1716 22.8284 10.5 22 10.5L22 13.5ZM0.939341 10.9393C0.353554 11.5251 0.353554 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939341 10.9393ZM22 10.5L2 10.5L2 13.5L22 13.5L22 10.5Z"
              fill="inherit"
            />
          </svg>
        </button>

        <div className="carousel__indicators">
          {Array.from({ length: totalOriginalItems }, (_, index) => (
            <span
              key={index}
              className={`carousel__indicator ${index === currentIndex % totalOriginalItems ? "active" : ""
                }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          className="carousel__arrow carousel__arrow--right"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5L2 10.5ZM23.0607 13.0607C23.6464 12.4749 23.6464 11.5251 23.0607 10.9393L13.5147 1.3934C12.9289 0.807613 11.9792 0.807613 11.3934 1.3934C10.8076 1.97919 10.8076 2.92893 11.3934 3.51472L19.8787 12L11.3934 20.4853C10.8076 21.0711 10.8076 22.0208 11.3934 22.6066C11.9792 23.1924 12.9289 23.1924 13.5147 22.6066L23.0607 13.0607ZM2 13.5L22 13.5L22 10.5L2 10.5L2 13.5Z"
              fill="inherit"
            />
          </svg>
        </button>
      </div>
    )
  );
};

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="testimonial-section">
      <Header
        title="Testimonials"
        subtitle="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
      />

      <div className="testimonial-section__box">
        <Carousel
          showItems={3}
          autoPlay={true}
          interval={5000}
          overflowWidth={100}
          renderFooter={(args) => <CarouselNavigation {...args} />}
        >
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
  );
};
/*
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
} */

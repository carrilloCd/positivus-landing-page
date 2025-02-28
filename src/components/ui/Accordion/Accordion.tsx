import './Acoordion.scss'
import { useState } from 'react';
import { AccordionItem } from './AccordionItem/AccordionItem';

const accordionData = [
  {
    title: 'Consultation',
    content: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
  },
  {
    title: 'Research and Strategy Development',
    content: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
  },
  {
    title: 'Implementation',
    content: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
  },
  {
    title: 'Monitoring and Optimization',
    content: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
  },
  {
    title: 'Reporting and Communication',
    content: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
  },
  {
    title: 'Continual Improvement',
    content: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
  },
]



export const Accordion: React.FC = () => {
  const [curOpen, setIsOpen] = useState<null | number>(null);
  return (
    <div className="accordion">
      {
        accordionData.map((el, i) => (
          <AccordionItem
            content={el.content}
            title={el.title}
            num={i}
            onOpen={setIsOpen}
            curOpen={curOpen}
          />
        ))
      }

    </div>
  )
}

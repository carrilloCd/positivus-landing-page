import './WorkingProcess.scss';

import { Header, Accordion } from '@components/ui';

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

export const WorkingProcess: React.FC = () => {
  return (
    <section className='working-process'>
      <Header title='Our Working Process' subtitle='Step-by-Step Guide to Achieving Your Business Goals' width='30rem' />

      <Accordion data={accordionData} />
    </section>
  )
}

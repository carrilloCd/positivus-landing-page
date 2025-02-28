import './WorkingProcess.scss';

import { Header, Accordion } from '@components/ui';

export const WorkingProcess: React.FC = () => {
  return (
    <section className='working-process'>
      <Header title='Our Working Process' subtitle='Step-by-Step Guide to Achieving Your Business Goals' width='30rem' />

      <Accordion />
    </section>
  )
}

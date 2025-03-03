import './Acoordion.scss'
import { useState } from 'react';
import { AccordionItem } from './AccordionItem/AccordionItem';

interface IData {
  title: string;
  content: string;
}

interface IAccordionProps {
  data: IData[];
}

export const Accordion: React.FC<IAccordionProps> = ({ data }) => {
  const [curOpen, setIsOpen] = useState<null | number>(null);
  return (
    <div className="accordion">
      {
        data.map((el, i) => (
          <AccordionItem
            content={el.content}
            title={el.title}
            num={i}
            onOpen={setIsOpen}
            curOpen={curOpen}
            key={el.title}
          />
        ))
      }

    </div>
  )
}

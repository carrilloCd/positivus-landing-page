import './AccordionItem.scss';

interface IAccordionItemProps {
  num: number;
  content: string;
  title: string;
  onOpen: (num: number | null) => void;
  curOpen: number | null;
}

export const AccordionItem: React.FC<IAccordionItemProps> = ({ content, num, title, onOpen, curOpen }) => {
  const isOpen = num === curOpen;

  const handleToggle = () => {
    if (num === curOpen) {
      onOpen(null)
    } else onOpen(num)
  }

  return (
    <div className={`accordion__item  ${isOpen ? 'active' : ''}`} onClick={handleToggle}>
      <div className='accordion__header'>
        <h3 className='accordion__title'>
          <span className='accordion__number'>{num < 9 ? `0${num + 1}` : num}</span>
          {title}
        </h3>

        <div className="accordion__icon">
          {isOpen === true && (
            <svg width="18" height="7" viewBox="0 0 18 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 6.14V0.5H17.76V6.14H0Z" fill="black" />
            </svg>
          )}
          {isOpen === false && (
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.6 25.58V15.86H0V10.22H9.6V0.5H15.48V10.22H25.08V15.86H15.48V25.58H9.6Z" fill="#191A23" />
            </svg>

          )}
        </div>
      </div>

      {isOpen && (<p className="accordion__content">
        {content}
      </p>)}
    </div>
  )
}
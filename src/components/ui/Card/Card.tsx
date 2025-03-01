import './Card.scss'

interface ICardProps {
  image: string;
  description: string;
  name: string;
  occupation: string;
}
export const Card: React.FC<ICardProps> = ({ description, image, name, occupation }) => {
  return (
    <div className="card">
      <div className="card__header">
        <img src={image} alt="Photo of member of the team" />
        <div className='card__box'>
          <h4 className='card__name'>{name}</h4>
          <p className='card__occupation'>{occupation}</p>
        </div>
        <div className='card__icon'>
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.317757 17H3.81308V5.68438H0.317757V17Z" fill="#B9FF66" />
            <path d="M0 2.07188C0 3.1875 0.900311 4.09062 2.06542 4.09062C3.17757 4.09062 4.07788 3.1875 4.07788 2.07188C4.07788 0.95625 3.17757 0 2.06542 0C0.900311 0 0 0.95625 0 2.07188Z" fill="#B9FF66" />
            <path d="M13.4517 17H17V10.7844C17 7.75625 16.3115 5.36562 12.7632 5.36562C11.0685 5.36562 9.90343 6.32188 9.42679 7.225H9.37383V5.68438H6.03738V17H9.53271V11.4219C9.53271 9.93437 9.79751 8.5 11.6511 8.5C13.4517 8.5 13.4517 10.2 13.4517 11.475V17Z" fill="#B9FF66" />
          </svg>
        </div>
      </div>

      <p className='card__description'>
        {description}
      </p>

    </div>
  )
}
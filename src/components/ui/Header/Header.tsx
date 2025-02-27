import './Header.scss'

interface IHeaderProps {
  title: string;
  subtitle: string;
}

export const Header: React.FC<IHeaderProps> = ({ title, subtitle }) => {
  return (
    <header className='header'>
      <h2 className='header__title'>{title}</h2>
      <p className='header__subtitle'>{subtitle}</p>
    </header>
  )
}

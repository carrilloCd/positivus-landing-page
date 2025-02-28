import './Header.scss'

interface IHeaderProps {
  title: string;
  subtitle: string;
  width?: string;
}

export const Header: React.FC<IHeaderProps> = ({ title, subtitle, width }) => {
  return (
    <header className='header'>
      <h2 className='header__title'>{title}</h2>
      <p className='header__subtitle' style={{ width: width }}>{subtitle}</p>
    </header>
  )
}


import { ReactNode } from 'react';
import './Button.scss'

interface IButtonProps {
  url?: string;
  text?: string | ReactNode;
  variant?: 'primary' | 'secondary';
  blank?: boolean;
  className?: string;
  onClick?: () => void;
}
export const Button: React.FC<IButtonProps> = ({ text, variant, url, blank, onClick, className }) => {

  if (url) {
    return (
      <a href={url} className={`btn btn--${variant} ${className || ''}`} target={blank ? '_blank' : '_self'} rel="noopener noreferrer">
        {text}
      </a>)
  }

  return (
    <button onClick={onClick} className={`btn btn--${variant} ${className || ''}`}>
      {text}
    </button>
  )

}

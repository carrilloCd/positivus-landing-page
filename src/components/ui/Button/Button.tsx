
import { ReactNode } from 'react';
import './Button.scss'

interface IButtonProps {
  url?: string;
  text?: string | ReactNode;
  variant?: 'primary' | 'secondary';
  blank?: boolean;
}
export const Button: React.FC<IButtonProps> = ({ text, variant, url, blank }) => {
  const ButtonContent = (
    <>
      {text && <span>{text}</span>}
    </>
  )

  if (url) {
    return (
      <a href={url} className={`btn btn--${variant}`} target={blank ? '_blank' : '_self'} rel="noopener noreferrer">
        {ButtonContent}
      </a>)
  }

  return (
    <button className={`btn btn--${variant}`}>
      {ButtonContent}
    </button>
  )

}

import { AnchorHTMLAttributes, ReactNode } from 'react'

type LinkToProps = {
  children: ReactNode
} & AnchorHTMLAttributes<HTMLAnchorElement>

export const LinkTo = ({ children, className, ...props }: LinkToProps) => {
  return (
    <a
      {...props}
      className={`text-xl font-semibold hover:text-primary-1-hover ${
        className ?? ''
      }`}
    >
      {children}
    </a>
  )
}

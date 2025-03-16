import { AnchorHTMLAttributes, ReactNode } from 'react'

type LinkToProps = {
  children: ReactNode
} & AnchorHTMLAttributes<HTMLAnchorElement>

export const LinkTo = ({ children, ...props }: LinkToProps) => {
  return <a className='hover:text-primary-1-hover' {...props}>{children}</a>
}

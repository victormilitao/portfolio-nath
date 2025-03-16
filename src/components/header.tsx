import { LinkTo } from './link-to'
import cv from '/src/assets/cv-nath.pdf'

export const Header = () => {
  return (
    <div className='flex gap-10'>
      <LinkTo href='/'>Início</LinkTo>
      <LinkTo href={cv} target='_blank'>
        Currículo
      </LinkTo>
      <LinkTo href='https://www.linkedin.com/in/nathaliagob' target='_blank'>
        Linkedin
      </LinkTo>
    </div>
  )
}

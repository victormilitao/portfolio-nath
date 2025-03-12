import cv from '/src/assets/cv-nath.pdf'

export const Header = () => {
  return (
    <div className='flex gap-10 text-xl font-semibold'>
      <a href='/'>Início</a>
      <a href={cv} target='_blank'>Currículo</a>
      <a href='https://www.linkedin.com/in/nathaliagob' target='_blank'>
        Linkedin
      </a>
    </div>
  )
}

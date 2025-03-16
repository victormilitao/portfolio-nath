import { Link } from 'react-router-dom'
import { Button } from './button'

type ProjectProps = {
  img: string
  title: string
  subtitle: string
  url: string
}

export const Project = ({ img, title, subtitle, url }: ProjectProps) => {
  return (
    <Link to={url}>
      <div className='mt-2 flex flex-col-reverse sm:flex-row sm:flex-auto overflow-hidden cursor-pointer rounded-xl text-primary-2 shadow-[0_0_64px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out hover:scale-[101%] active:scale-[101%]'>
        <div className='sm:w-[70%] p-10 flex flex-col gap-2'>
          <p className='text-xl font-bold'>{title}</p>
          <p>{subtitle}</p>
          <div className='mt-2'>
            <Button>Abrir o projeto</Button>
          </div>
        </div>
        <div className='work-schedule'>
          <img
            className='h-48 w-full object-cover sm:w-[293px] sm:h-full'
            src={img}
          />
        </div>
      </div>
    </Link>
  )
}

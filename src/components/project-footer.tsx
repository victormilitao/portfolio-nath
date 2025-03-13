import { Link } from 'react-router-dom'
import { Profile } from './profile'

export const ProjectFooter = () => {
  return (
    <div className='flex justify-between items-center'>
      <Profile />
      <Link
        to=''
        className='text-xl font-semibold'
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        Voltar ao topo
      </Link>
    </div>
  )
}

import { CircleChevronUp } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from './icon'

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className='fixed right-20 bottom-14 z-10'>
      <Link
        to=''
        className='text-xl font-semibold absolute'
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <Icon name='chevronUp' />
      </Link>
    </div>
  )
}

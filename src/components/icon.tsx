import { CircleChevronUp } from 'lucide-react'

const icons = {
  chevronUp: CircleChevronUp,
}

type IconProps = {
  name: keyof typeof icons
  size?: number
  strokeWidth?: number
}

export const Icon = ({ name, size = 40, strokeWidth = 1 }: IconProps) => {
  const Component = icons[name]
  return <Component className='cursor-pointer hover:text-primary-1-hover' size={size} strokeWidth={strokeWidth} />
}

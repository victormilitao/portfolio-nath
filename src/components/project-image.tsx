type ProjectImageProps = {
  src: string
  size?: 'sm' | 'md' | 'lg'
}

const ImgSize = {
  sm: '400px',
  md: '800px',
  lg: '1200px',
}

export const ProjectImage = ({ src, size = 'md' }: ProjectImageProps) => {
  const width = ImgSize[size]
  return (
    <div className='mt-10 w-full flex justify-center'>
      <img className={`w-[${width}] sm:max-w-none object-cover`} src={src} />
    </div>
  )
}

type ProjectImageProps = {
  src: string
  size?: 'sm' | 'md' | 'lg'
}

export const ProjectImage = ({ src, size = 'md' }: ProjectImageProps) => {
  const ImgSize = {
    sm: '400px',
    md: '800px',
    lg: '900px',
  }
  
  const width = ImgSize[size]

  return (
    <div className="mt-10 w-full flex justify-center">
      <img
        className={`sm:max-w-none object-cover`}
        style={{ width }}
        src={src}
        alt="Project"
      />
    </div>
  )
}

type ProjectImageProps = {
  src: string
}

export const ProjectImage = ({ src }: ProjectImageProps) => {
  return (
    <div className='mt-10 w-full flex justify-center'>
      <img className='w-[800px] sm:max-w-none object-cover' src={src} />
    </div>
  )
}

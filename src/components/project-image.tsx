type ProjectImageProps = {
  src: string
}

export const ProjectImage = ({ src }: ProjectImageProps) => {
  return (
    <div className='mt-10 w-full h-[460px] flex justify-center'>
      <img className='w-[800px] object-cover absolute' src={src} />
    </div>
  )
}

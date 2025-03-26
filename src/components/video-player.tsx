type VideoPlayerProps = {
  src: string
  width?: string
  height?: string
}

export const VideoPlayer = ({ src, width = '100%', height = 'auto' }: VideoPlayerProps) => {
  return (
    <div className="mt-10 w-full flex justify-center">
      <video className="sm:max-w-none" width={width} height={height} controls>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
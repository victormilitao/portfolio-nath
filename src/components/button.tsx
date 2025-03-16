interface ButtonProps {
  children?: React.ReactNode
}

export function Button(props: ButtonProps) {
  return (
    <button className='cursor-pointer h-fit min-w-fit py-1 px-6 border-[1px] border-solid border-button-text rounded-3xl text-button-text transition-transform duration-300 ease-in-out hover:bg-button-text hover:text-white active:bg-button-text active:text-white'>
      <span className='text-sm'>{props?.children}</span>
    </button>
  )
}

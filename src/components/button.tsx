interface ButtonProps {
  children?: React.ReactNode
}

export function Button(props: ButtonProps) {
  return (
    
      <button className='cursor-pointer max-w-fit py-1 px-6 border-[1px] border-solid border-zinc-900 rounded-3xl text-zinc-900 transition-transform duration-300 ease-in-out hover:bg-zinc-900 hover:text-white active:bg-zinc-900'>
        <span className="text-sm">{props?.children}</span>
      </button>
    
  )
}

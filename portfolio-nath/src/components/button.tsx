interface ButtonProps {
  children?: React.ReactNode
}

export function Button(props: ButtonProps) {
  return (
    <>
      <button className='cursor-pointer max-w-fit py-2 px-6 border-[1px] border-solid border-zinc-900 rounded-3xl text-zinc-900'>
        {props?.children}
      </button>
    </>
  )
}

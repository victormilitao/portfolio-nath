import { Header } from '../components/header'
import info from '/src/assets/work-schedule-info.png'

export const WorkSchedule = () => {
  return (
    <>
      <Header />
      <div className='flex flex-col gap-5 items-center mt-10'>
        <p className='text-secondary-1 text-4xl font-bold'>
          Escala - O Discovery
        </p>
        <img
          className='w-[650px] object-cover'
          src={info}
        />
      </div>
    </>
  )
}

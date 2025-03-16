import { Profile, ProfileInline } from './profile'

export const ProjectFooter = () => {
  return (
    <>
      <div className='flex justify-center sm:hidden'>
        <Profile />
      </div>
      <div className='hidden sm:flex'>
        <ProfileInline />
      </div>
    </>
  )
}

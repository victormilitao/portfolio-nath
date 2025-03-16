import { Button } from './button'
import profile from '/src/assets/profile.png'
import cv from '/src/assets/cv-nath.pdf'

export const Profile = () => {
  return (
    <div className='flex flex-col gap-5'>
      <div className='profile flex gap-5'>
        <img
          className='w-20 h-full sm:w-[114px] rounded-full'
          src={profile}
          alt='Nathália Gonçalves'
        />
        <div className='profile-info flex flex-col justify-center text-secondary-1'>
          <p className='profile-name font-bold'>Nathália Gonçalves</p>
          <p className='profile-job font-light mb-3'>
            Product designer no ecossistema VR
          </p>
          <div className='hidden sm:flex gap-2'>
            <Button>
              <a
                href={cv}
                target='_blank'
                rel='noopener noreferrer'
                className='block w-full h-full'
              >
                Currículo
              </a>
            </Button>
            <Button>
              <a
                href='https://www.linkedin.com/in/nathaliagob'
                target='_blank'
                rel='noopener noreferrer'
                className='block w-full h-full'
              >
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className='sm:hidden min-w-full flex gap-2'>
        <Button>
          <a
            href={cv}
            target='_blank'
            rel='noopener noreferrer'
            className='block w-full h-full'
          >
            Currículo
          </a>
        </Button>
        <Button>
          <a
            href='https://www.linkedin.com/in/nathaliagob'
            target='_blank'
            rel='noopener noreferrer'
            className='block w-full h-full'
          >
            LinkedIn
          </a>
        </Button>
      </div>
    </div>
  )
}

export const ProfileInline = () => {
  return (
    <div className='w-full flex justify-between gap-5'>
      <div className='flex items-center gap-5'>
        <img
          className='w-20 h-full sm:w-[60px] rounded-full'
          src={profile}
          alt='Nathália Gonçalves'
        />
        <div className='profile-info flex flex-col justify-center text-secondary-1'>
          <p className='profile-name font-bold'>Nathália Gonçalves</p>
          <p className='profile-job font-light'>
            Product designer no ecossistema VR
          </p>
        </div>
      </div>

      <div className='hidden sm:flex sm:items-center gap-2'>
        <Button>
          <a href={cv} target='_blank' rel='noopener noreferrer'>
            Currículo
          </a>
        </Button>
        <Button>
          <a
            href='https://www.linkedin.com/in/nathaliagob'
            target='_blank'
            rel='noopener noreferrer'
          >
            LinkedIn
          </a>
        </Button>
      </div>
    </div>
  )
}

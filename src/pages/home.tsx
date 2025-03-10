import { Button } from '../components/button'
import profile from '/src/assets/profile.png'
import workSchedule from '/src/assets/work-schedule.png'
import metrics from '/src/assets/metrics.png'

export function Home() {
  return (
    <div className='container w-full h-full flex justify-center items-center'>
      <div className='content max-w-[754px] flex flex-col gap-5 p-5'>
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
              <Button>Currículo</Button>
              <Button>LinkedIn</Button>
            </div>
          </div>
        </div>

        <div className='sm:hidden min-w-full flex gap-2'>
          <Button>Currículo</Button>
          <Button>LinkedIn</Button>
        </div>

        <p className='text-3xl font-bold'>
          Com análise de dados e design, transformo ideias em experiências
          intuitivas que encantam.
          <p className='text-lg font-normal mt-3'>
            Minha expertise está em criar experiências que fazem sentido para o
            negócio e para os usuários, através de pesquisas, construção e
            acompanhamento de métricas, discovery contínuo e análise de dados.
          </p>
        </p>

        <div className='mt-2 flex flex-col-reverse sm:flex-row sm:flex-auto overflow-hidden cursor-pointer rounded-xl text-primary-2 shadow-[0_0_64px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out hover:scale-[101%]'>
          <div className='sm:w-[70%] p-10 flex flex-col gap-2'>
            <p className='text-xl font-bold'>Escala - O Discovery</p>
            <p>
              Confira como realizei o discovery para a criação de uma
              funcionalidade de escala dentro de um sistema de controle de
              ponto.
            </p>

            <div className='mt-2'>
              <Button>Abrir o projeto</Button>
            </div>
          </div>
          <div className='work-schedule'>
            <img
              className='h-48 w-full object-cover sm:w-[293px] sm:h-full'
              src={workSchedule}
              alt='Escala'
            />
          </div>
        </div>

        <div className='mt-2 flex flex-col-reverse sm:flex-row sm:flex-auto overflow-hidden cursor-pointer rounded-xl text-primary-2 shadow-[0_0_64px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out hover:scale-[101%]'>
          <div className='sm:w-[70%] p-10 flex flex-col gap-3'>
            <p className='text-xl font-bold'>Medindo o sucesso de um produto</p>
            <p>
              Justifiquei a necessidade de melhorias com base em métricas de
              sucesso e gerei impacto positivo para o negócio e para os
              usuários.
            </p>

            <div className='mt-2'>
              <Button>Abrir o projeto</Button>
            </div>
          </div>
          <div className='metrics'>
            <img
              className='h-48 w-full object-cover sm:w-[293px] sm:h-full'
              src={metrics}
              alt='Escala'
            />
          </div>
        </div>

        <div className='footer text-center text-sm'>
          <span>Confira mais projetos aqui em breve :)</span>
        </div>
      </div>
    </div>
  )
}

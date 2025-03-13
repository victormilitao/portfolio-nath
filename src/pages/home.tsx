import { Button } from '../components/button'
import profile from '/src/assets/profile.png'
import workSchedule from '/src/assets/work-schedule.png'
import metrics from '/src/assets/metrics.png'
import { Project } from '../components/project'

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

        <Project
          url='work-schedule'
          title='Escala - O Discovery'
          subtitle='Confira como realizei o discovery para a criação de uma
              funcionalidade de escala dentro de um sistema de controle de
              ponto.'
          img={workSchedule}
        />

        <Project
          url='metrics'
          title='Medindo o sucesso de um produto'
          subtitle='Justifiquei a necessidade de melhorias com base em métricas de
              sucesso e gerei impacto positivo para o negócio e para os
              usuários.'
          img={metrics}
        />

        <div className='footer text-center text-sm'>
          <span>Confira mais projetos aqui em breve :)</span>
        </div>
      </div>
    </div>
  )
}

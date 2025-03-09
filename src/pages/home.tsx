import { Button } from '../components/button'
import profile from '/src/assets/profile.png'
import workSchedule from '/src/assets/work-schedule.png'
import metrics from '/src/assets/metrics.png'

export function Home() {
  return (
    <div className='container w-full h-full flex justify-center items-center'>
      <div className='content max-w-[754px] flex flex-col gap-7 p-5'>
        <div className='profile flex gap-5'>
          <img
            className='w-[114px] rounded-full'
            src={profile}
            alt='Nathália Gonçalves'
          />
          <div className='profile-info flex flex-col justify-center text-amber-700'>
            <p className='profile-name font-bold'>Nathália Gonçalves</p>
            <p className='profile-job font-light mb-3'>
              Product designer no ecossistema VR
            </p>
            <div className='profile-buttons flex gap-2'>
              <Button>Currículo</Button>
              <Button>LinkedIn</Button>
            </div>
          </div>
        </div>
        <p className='text-3xl font-bold'>
          Com análise de dados e design, transformo ideias em experiências
          intuitivas que encantam.
        </p>
        <p className=''>
          Minha expertise está em criar experiências que fazem sentido para o
          negócio e para os usuários, através de pesquisas, construção e
          acompanhamento de métricas, discovery contínuo e análise de dados.
        </p>

        <div className='cursor-pointer project-card flex flex-auto rounded-xl shadow-[0_0_64px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out hover:scale-[101%]'>
          <div className='info w-[70%] p-10 flex flex-col gap-3'>
            <p className='text-xl font-bold'>Escala - O Discovery</p>
            <p>
              Confira como realizei o discovery para a criação de uma
              funcionalidade de escala dentro de um sistema de controle de
              ponto.
            </p>

            <Button>Abrir o projeto</Button>
          </div>
          <div className='work-schedule'>
            <img
              className='w-[293px] h-full object-cover'
              src={workSchedule}
              alt='Escala'
            />
          </div>
        </div>

        <div className='cursor-pointer project-card flex flex-auto rounded-xl shadow-[0_0_64px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out hover:scale-[101%]'>
          <div className='info w-[70%] p-10 flex flex-col gap-3'>
            <p className='text-xl font-bold'>Medindo o sucesso de um produto</p>
            <p>
              Justifiquei a necessidade de melhorias com base em métricas de
              sucesso e gerei impacto positivo para o negócio e para os
              usuários.
            </p>

            <Button>Abrir o projeto</Button>
          </div>
          <div className='metrics'>
            <img
              className='w-[293px] h-full object-cover'
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

import workSchedule from '/src/assets/work-schedule.png'
import metrics from '/src/assets/metrics.png'
import continuos from '/src/assets/continuos-improvement.png'
import { Project } from '../components/project'
import { Profile } from '../components/profile'

export function Home() {
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div className='max-w-[754px] flex flex-col gap-5 py-5'>
        <Profile />

        <p className='text-3xl font-bold'>
          Com análise de dados e design, transformo ideias em experiências
          intuitivas que encantam.
          <span className='text-lg font-normal mt-3 block'>
            Minha expertise está em criar experiências que fazem sentido para o
            negócio e para os usuários, através de pesquisas, construção e
            acompanhamento de métricas, discovery contínuo e análise de dados.
          </span>
        </p>

        <Project
          url='escala-discovery'
          title='Escala - O Discovery'
          subtitle='Confira como realizei o discovery para a criação de uma
              funcionalidade de escala dentro de um sistema de controle de
              ponto.'
          img={workSchedule}
        />

        <Project
          url='metricas-sucesso'
          title='Medindo o sucesso de um produto'
          subtitle='Justifiquei a necessidade de melhorias com base em métricas de
              sucesso e gerei impacto positivo para o negócio e para os
              usuários.'
          img={metrics}
        />

        <Project
          url='melhoria-continua'
          title='Ciclo de melhoria contínua'
          subtitle='Após o lançamento de uma nova funcionalidade, utilizei dados para refinar a experiência dos usuários e impulsionar a evolução do produto.'
          img={continuos}
        />

        <div className='footer text-center text-sm'>
          <span>Confira mais projetos aqui em breve :)</span>
        </div>
      </div>
    </div>
  )
}

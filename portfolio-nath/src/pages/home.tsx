import { Button } from '../components/button'

export function Home() {
  return (
    <div className='container w-full h-full flex justify-center items-center'>
      <div className='content max-w-3xl flex flex-col gap-7 p-5'>
        <div className='profile flex gap-5'>
          <img
            className='w-[114px] rounded-full'
            src='./src/assets/profile.png'
            alt='Nathália Gonçalves'
          />
          <div className='profile-info flex flex-col justify-center gap-1 text-amber-700'>
            <p className='profile-name font-bold'>Nathália Gonçalves</p>
            <p className='profile-job'>Product designer no ecossistema VR</p>
            <div className='profile-buttons flex gap-2'>
              <Button>Currículo</Button>
              <Button>LinkedIn</Button>
            </div>
          </div>
        </div>
        <p className='text-3xl font-bold'>
          Mais do que uma experiência intuitiva, crio produtos que geram impacto
          real e mensurável.
        </p>
        <p className=''>
          Minha expertise está em criar experiências que fazem sentido para o
          negócio e para os usuários, através de pesquisas, construção e
          acompanhamento de métricas, discovery contínuo e análise de dados.
        </p>
        <div className='project-card flex flex-auto rounded-xl shadow-lg'>
          <div className='info w-[70%] p-4 flex flex-col gap-3'>
            <p className='text-xl font-bold'>Escala - O Discovery</p>
            <p>
              Confira como realizei o discovery para a criação de uma
              funcionalidade de escala dentro de um sistema de controle de
              ponto.
            </p>

            <Button>Abrir o projeto</Button>
          </div>
          <div className='work-schedule'>
            <img className='w-full h-full object-cover' src='./src/assets/work-schedule-thumb.png' alt='Escala' />
          </div>
        </div>
        <div className='footer text-center'>
          <span>Confira mais projetos aqui em breve :)</span>
        </div>
      </div>
    </div>
  )
}

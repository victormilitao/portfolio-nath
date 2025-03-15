import { Header } from '../components/header'
import info from '/src/assets/work-schedule-info.png'
import info2 from '/src/assets/work-schedule-info-2.png'
import info3 from '/src/assets/work-schedule-info-3.png'
import info4 from '/src/assets/work-schedule-info-4.png'
import info5 from '/src/assets/work-schedule-info-5.png'
import { ProjectFooter } from '../components/project-footer'
import { Line } from '../components/line'
import { Title } from '../components/title'
import { ProjectImage } from '../components/project-image'
import { BackToTop } from '../components/back-to-top'

export const WorkSchedule = () => {
  return (
    <>
      <Header />
      <BackToTop />
      <div className='flex justify-center mt-10'>
        <div className='flex flex-col max-w-[650px] text-lg'>
          <p className='text-secondary-1 text-4xl font-bold text-center mb-6'>
            Escala - O Discovery
          </p>
          <img className='w-[650px] object-cover mb-6' src={info} />
          <Title type='2' text='Introdução' />
          <p className='mt-2'>
            Este foi um dos grandes projetos em que trabalhei nos últimos anos.
            A seguir, compartilho como foi o processo de Discovery, desde a
            motivação inicial até as etapas que conduzimos para validar e
            direcionar o projeto.
          </p>
          <p className='mt-5'>
            Sigo atuando ativamente nele, monitorando suas métricas de sucesso e
            conduzindo discoveries contínuos para garantir sua evolução. Como em
            todo desenvolvimento de produto, enfrentamos desafios, ajustes e
            aprendizados ao longo do caminho, e essa jornada de aprimoramento
            ainda continua.
          </p>
          <div className='mt-14'>
            <Title type='2' text='Por que o projeto nasceu?' />
          </div>
          <p className='mt-2'>
            Embora o sistema de controle de ponto já oferecesse uma
            funcionalidade robusta para a gestão de turnos, ele se mostrava
            pouco flexível para clientes com escalas e folgas variáveis ao longo
            do mês, sendo uma dor recorrente entre nossos usuários.
          </p>
          <div className='mt-14'>
            <Title type='2' text='Quais eram as premissas de negócio?' />
          </div>
          <p className='mt-2'>
            Uma das premissas desse projeto era que a nova funcionalidade não
            estaria inclusa na mensalidade do sistema de controle de ponto,
            sendo comercializada separadamente. No entanto, seu uso seria
            exclusivo para clientes que utilizam o sistema, sem a possibilidade
            de adquiri-la de forma independente.
          </p>
          <p className='mt-5'>
            Outro ponto essencial era a integração total com o sistema de
            controle de ponto. Isso significa que, se um colaborador estiver de
            folga na escala, o sistema deve reconhecer essa informação e
            garantir que a ausência não seja contabilizada como falta.
          </p>
          <p className='mt-5'>
            Essa premissa é um diferencial importante em relação a outras
            soluções disponíveis no mercado. No entanto, também adiciona um
            nível significativo de complexidade, pois, além de considerar dias
            de trabalho, folgas e horários, o sistema precisa levar em conta
            regras específicas do controle de ponto.
          </p>
          <ProjectImage src={info2} />
          <Line />
          <div className='mt-3'>
            <Title type='3' text='O discovery' />
          </div>
          <div className='mt-7'>
            <div className='mb-2'>
              <Title type='5' text='Imersão no tema e pesquisa inicial' />
            </div>
            <p>
              Antes de avançar no projeto, era fundamental compreender o
              contexto e as particularidades das escalas de trabalho. Para isso,
              realizamos uma pesquisa exploratória em sites de busca, com o
              objetivo de mapear os tipos de escalas mais comuns adotados pelas
              empresas e entender as regulamentações existentes.
            </p>
          </div>
          <p className='mt-6'>
            Esse estudo permitiu aprofundar o conhecimento sobre as regras de
            escalas, incluindo a quantidade mínima de dias de descanso, a
            sequência máxima de dias trabalhados e as diretrizes para escalas em
            feriados. Descobri, por exemplo, que há regulamentações específicas
            para o trabalho aos domingos, podendo haver distinções entre homens
            e mulheres.
          </p>
          <p className='mt-6'>
            Essa pesquisa inicial foi essencial para que adquirir um
            conhecimento prévio sólido antes de conversar com nosso público,
            garantindo conversas mais produtivas e embasadas.
          </p>
          <ProjectImage src={info3} />
          <div>
            <div className='mt-12 mb-2'>
              <Title
                type='5'
                text='Pesquisa de campo: entendendo o dia a dia dos usuários'
              />
            </div>
            <p>
              Com um conhecimento mais aprofundado sobre o tema, passamos para a
              próxima etapa: conversar diretamente com o nosso público. O
              objetivo era entender, na prática, como as escalas de trabalho são
              montadas no dia a dia e quais desafios as pessoas responsáveis por
              essa tarefa enfrentam.
            </p>
          </div>
          <p className='mt-6'>
            Para isso, realizei um verdadeiro <b>trabalho de campo</b>,
            visitando comércios próximos à minha casa que funcionam de domingo a
            domingo — estabelecimentos que, necessariamente, lidam com escalas
            de trabalho. Em cada local, procurei conversar com a pessoa
            responsável pela montagem das escalas, investigando como esse
            processo era feito, quais dificuldades enfrentavam e se consideravam
            o método atual eficiente ou se sentiam a necessidade de uma
            ferramenta mais adequada.
          </p>
          <p className='mt-6'>
            Durante essa pesquisa, foi possível aprender muito sobre a realidade
            dessas pessoas, desde os critérios que utilizam na organização das
            escalas até os desafios operacionais que enfrentam. Além disso, tive
            a oportunidade de observar referências visuais de como as escalas
            são disponibilizadas para os colaboradores. Visitei lojas de
            shopping, supermercados, farmácias e hotéis, coletando diferentes
            perspectivas sobre o tema.
          </p>
          <p className='mt-6'>
            Em uma dessas visitas, consegui{' '}
            <b>acompanhar, na prática, a criação de uma escala mensal</b>. A
            responsável por essa tarefa me convidou para observar como ela
            montava a escala no sistema exigido pela empresa. Essa experiência
            foi extremamente enriquecedora, pois permitiu realizar uma sombra
            (shadowing) — ou seja, acompanhar o usuário em seu ambiente real de
            trabalho, observando suas dificuldades e facilidades no processo.
          </p>
          <ProjectImage src={info4} />
          <div className='mt-12 mb-2'>
            <Title type='5' text='Análise de mercado e benchmarking' />
          </div>
          <p>
            A última etapa do Discovery foi analisar o mercado para entender
            quais soluções já existiam para a gestão de escalas e como elas
            funcionavam. O objetivo era identificar boas práticas, oportunidades
            de inovação e possíveis diferenciais para o nosso produto.
          </p>
          <p className='mt-6'>
            Consegui acesso a alguns sistemas, o que me permitiu navegar pelas
            funcionalidades e documentar toda a experiência de uso. Para os
            softwares aos quais não tive acesso direto, busquei informações por
            meio de tutoriais, vídeos no YouTube, páginas institucionais e guias
            de uso, coletando um grande volume de referências visuais.
          </p>
          <p className='mt-6'>
            Com esse material, montei um painel de inspiração com diferentes
            layouts e abordagens para escalas de trabalho. Essas referências
            foram combinadas com os insights obtidos na pesquisa de campo,
            enriquecendo ainda mais a base de conhecimento para a próxima fase
            do projeto.
          </p>
          <ProjectImage src={info5} />

          <Line />

          <div className='mt-3'>
            <Title type='3' text='O fim do discovery e as etapas seguintes' />
          </div>
          <p className='mt-5'>
            Todos os processos foram documentados no Notion, enquanto o painel
            de inspiração foi estruturado no FigJam, reunindo todas as
            referências visuais coletadas ao longo da pesquisa.
          </p>
          <p className='mt-6'>
            Aqui, compartilhei apenas a etapa de Discovery, mas estive presente
            em todas as fases seguintes e, como mencionei na introdução, sigo
            atuando ativamente no projeto. Por questões de confidencialidade,
            não pude compartilhar detalhes sobre os insights obtidos, mas o foco
            aqui foi demonstrar o processo de Discovery, e não necessariamente
            seus resultados.
          </p>
          <p className='mt-6'>
            As telas exibidas ao longo desta descrição são telas do produto
            atualmente, elas foram desenvolvidas baseadas nos protótipos que
            desenhei, seguindo a identidade visual e o design system do sistema.
          </p>
          <p className='mt-6'>
            Essa funcionalidade seguiu um processo de design bem estruturado,
            nascendo de uma necessidade real dos clientes e, ao mesmo tempo,
            criando uma nova oportunidade de receita para a empresa. O Discovery
            foi fundamentado em dados e direcionou as etapas seguintes: ideação,
            conduzida em conjunto com as equipes de produto, negócios e
            tecnologia; prototipação; e testes de usabilidade antes do
            desenvolvimento. Após a implementação, realizamos um piloto com
            clientes selecionados, refinamos a solução com base no feedback e,
            até hoje, seguimos aprimorando-a por meio de Continuous Discovery
            para garantir a evolução do produto e o alcance das métricas de
            sucesso estabelecidas.
          </p>
          <p className='font-bold mt-6'>
            Abaixo, incluí um vídeo mostrando como a solução é comercializada
            atualmente.
          </p>

          <div className='mt-10 w-full h-[460px] flex justify-center'>
            <iframe
              className='rounded-2xl absolute'
              width='800'
              height='460'
              src='https://www.youtube.com/embed/fphAw9RQ50I?si=PLiBOFQevWnKiMAj'
              title='Escala'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerPolicy='strict-origin-when-cross-origin'
              allowFullScreen
            ></iframe>
          </div>

          <Line />
        </div>
      </div>
      <div className='mt-10'>
        <ProjectFooter />
      </div>
    </>
  )
}

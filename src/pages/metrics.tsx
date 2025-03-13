import { Header } from '../components/header'
import info from '/src/assets/metrics-info.png'
import info2 from '/src/assets/metrics-info-2.png'
import info3 from '/src/assets/metrics-info-3.png'
import info4 from '/src/assets/metrics-info-4.png'
import info5 from '/src/assets/metrics-info-5.png'
import info6 from '/src/assets/metrics-info-6.png'
import info7 from '/src/assets/metrics-info-7.png'
import { ProjectFooter } from '../components/project-footer'

export const Metrics = () => {
  return (
    <>
      <Header />
      <div className='flex justify-center mt-10'>
        <div className='flex flex-col gap-6 max-w-[650px] text-lg'>
          <p className='text-secondary-1 text-4xl font-bold text-center'>
            Medindo o sucesso de um produto
          </p>
          <img className='w-[650px] object-cover' src={info} />
          <p className='text-left text-xl font-bold'>Introdução</p>
          <p>
            Este é um dos projetos dos quais mais me orgulho, pois evidencia o
            verdadeiro valor do design além das telas, destacando seu impacto
            estratégico no negócio.
          </p>
          <p>
            Até então, não existia na empresa uma cultura de mensuração do
            impacto das funcionalidades lançadas. As novas entregas eram
            disponibilizadas sem acompanhamento posterior, o que impedia a
            equipe de entender se estavam, de fato, resolvendo problemas ou
            agregando valor para usuários e para a empresa.
          </p>
          <p>
            Juntamente com minha gestora, levantei a bandeira da importância de
            medir o que estava sendo lançado. Precisávamos validar se nossos
            esforços estavam gerando os resultados esperados e identificar
            oportunidades de melhoria. Assim, começamos a definir métricas de
            sucesso para funcionalidades estratégicas, garantindo que a
            avaliação do impacto fosse baseada em dados concretos.
          </p>
          <p>
            Utilizei o framework de métricas piratas (AARRR) para estruturar a
            mensuração da primeira funcionalidade analisada: a Gestão Completa
            de Férias. Os aprendizados e impactos desse projeto foram tão
            relevantes que consegui replicar a abordagem para outras
            funcionalidades, consolidando uma cultura de mensuração dentro da
            empresa.
          </p>
          <p>
            A seguir, compartilho mais detalhes sobre a criação dessas métricas
            e os impactos que elas trouxeram para o produto e para o negócio.
          </p>
          <img className='w-[650px] object-cover' src={info2} />
          <div>
            <hr className='absolute text-gray-1 left-0 right-0' />
          </div>
          <p className='mt-3 text-xl font-bold'>
            Aplicação das métricas piratas ao nosso cenário
          </p>
          <p>
            O framework de métricas piratas (AARRR) estrutura a análise do
            desempenho de um produto em cinco etapas:
            <b>aquisição, ativação, retenção, recomendação e receita</b>. No
            entanto, adaptamos esse modelo ao nosso contexto, considerando as
            informações disponíveis e as métricas que conseguimos medir e
            acompanhar.
          </p>
          <p>
            Atualmente, a aquisição não é uma responsabilidade direta da área de
            produto. Embora reconheçamos que o próprio produto pode impulsionar
            novas vendas e incentivar a adoção de funcionalidades, medir a
            aquisição do sistema com base em uma funcionalidade específica seria
            um desafio. Ainda assim, entendemos que essa métrica é relevante e,
            no futuro, pode fazer sentido ser acompanhada pela equipe de
            produto, mas neste primeiro momento, optamos por não monitorá-la.
          </p>
          <p>
            Da mesma forma, não conseguimos medir a receita por funcionalidade,
            pois o modelo de venda do sistema não permite correlacionar
            diretamente a geração de receita a uma funcionalidade específica.
          </p>
          <p>
            Diante desse cenário, substituímos as métricas de aquisição e
            receita por um indicador mais alinhado à nossa realidade: eficiência
            operacional.
          </p>
          <img className='w-[650px] object-cover' src={info3} />
          <p className='mt-3 text-xl font-bold'>Métrica 1: Ativação</p>
          <p>
            <span className='text-secondary-1 text-lg font-bold block'>
              O cliente começou a usar a Gestão Completa de Férias?
            </span>
            No contexto da funcionalidade ‘Gestão Completa de Férias’, a
            <b>configuração</b> inicial é o fator determinante para considerar o
            cliente como ativado. Sem essa etapa, o uso da funcionalidade não é
            possível e, ao realizá-la, o cliente dá o primeiro passo para sua
            efetiva utilização.
          </p>
          <p className='mt-3 text-xl font-bold'>Métrica 2: Retenção</p>
          <p>
            <span className='text-secondary-1 text-lg font-bold block'>
              O cliente está utilizando a Gestão Completa de Férias?
            </span>
            Ao analisar a retenção, medimos e analisamos se os clientes estão,
            de fato, utilizando a funcionalidade Gestão Completa de Férias e
            também se estão deixando de usá-la.
          </p>
          <p>
            Para isso, consideramos que um usuário está utilizando a
            funcionalidade quando realiza ações como: programar, excluir ou
            editar férias, além de aprovar ou reprovar solicitações recebidas.
          </p>
          <p>
            Além disso, verificamos se os colaboradores cadastrados no sistema
            estão vinculados à configuração de férias. Caso contrário, mesmo que
            o cliente tenha ativado a funcionalidade, ele pode estar registrando
            as férias dos colaboradores no sistema sem utilizar a Gestão
            Completa de Férias.
          </p>
          <p>
            Para medir o abandono da funcionalidade, utilizamos esses mesmos
            critérios e analisamos o tempo em que o cliente permanece nessa
            situação. Se por mais de três meses ele não realizar nenhuma ação na
            funcionalidade nem tiver colaboradores vinculados à configuração,
            consideramos que ele deixou de utilizá-la.
          </p>
          <img className='w-[650px] object-cover' src={info4} />
          <p className='mt-3 text-xl font-bold'>Métrica 3: Recomendação</p>
          <p>
            <span className='text-secondary-1 text-lg font-bold block'>
              O cliente está satisfeito com a Gestão Completa de Férias?
            </span>
            Para avaliar a satisfação dos clientes com a funcionalidade,
            realizamos periodicamente pesquisas de CSAT. Definimos que, no nosso
            contexto, um CSAT de 80 ou mais indica um nível satisfatório de
            experiência com a funcionalidade.
          </p>
          <p>
            Atualmente, não seguimos uma periodicidade fixa para o lançamento
            dessas pesquisas. Optamos por aplicá-las sempre que realizamos
            alterações e melhorias significativas, pois entendemos que, sem
            mudanças, a tendência é que a percepção dos clientes permaneça a
            mesma.
          </p>
          <p>
            Como essa funcionalidade ainda está em constante evolução, essa
            abordagem faz mais sentido no momento. No entanto, sabemos que, no
            futuro, será necessário adotar um ciclo mais consistente e
            estruturado para a medição dessa métrica.
          </p>
          <img className='w-[650px] object-cover' src={info5} />
          <p className='mt-3 text-xl font-bold'>
            Métrica 4: Eficiência operacional
          </p>
          <p>
            <span className='text-secondary-1 text-lg font-bold block'>
              O cliente está precisando acionar o suporte para utilizar a Gestão
              Completa de Férias?
            </span>
            Se um cliente precisa acionar o suporte para utilizar a
            funcionalidade, entendemos que há um problema. Esse atrito indica
            que algo na experiência do usuário não está claro ou intuitivo o
            suficiente.
          </p>
          <p>
            Por isso, acompanhamos essa métrica sob dois aspectos principais:
            primeiro, porque a necessidade de suporte pode gerar frustração e
            impactar negativamente a percepção do cliente sobre a
            funcionalidade; segundo, porque um produto que exige constantes
            atendimentos não é operacionalmente eficiente, já que demanda mais
            recursos e sobrecarrega a equipe de suporte.
          </p>
          <p>
            Nosso objetivo é minimizar o número de chamados relacionados à
            funcionalidade, garantindo que os clientes consigam utilizá-la de
            forma simples e intuitiva. Para isso, comparamos a porcentagem de
            clientes que utilizam a funcionalidade com a porcentagem daqueles
            que acionam o suporte para pedir ajuda. Essa análise nos permite
            identificar oportunidades de melhoria e tornar o produto cada vez
            mais eficiente.
          </p>
          <img className='w-[650px] object-cover' src={info6} />
          <div>
            <hr className='absolute text-gray-1 left-0 right-0' />
          </div>
          <p className='mt-3 text-xl font-bold'>As descobertas e impactos</p>
          <p>
            Com este projeto, identificamos insights valiosos que nos ajudaram a
            direcionar melhorias e tomar decisões estratégicas. Embora não possa
            compartilhar os números acompanhados por questões de
            confidencialidade, quero destacar algumas descobertas, as ações
            implementadas e o impacto gerado.
          </p>
          <p>
            Ao analisar a <b>métrica de ativação</b>, percebemos que, embora
            muitos clientes tenham a funcionalidade contratada, a taxa de
            ativação estava consideravelmente abaixo do que estabelecemos como
            sucesso. Diante disso, foi priorizada uma iniciativa para tornar o
            uso inicial mais intuitivo e atrativo, ajustamos alguns
            comportamentos padrão e criamos gatilhos dentro do próprio produto
            para incentivar o uso. Essa iniciativa ainda está em
            desenvolvimento, então seus impactos ainda não podem ser mensurados,
            mas é interessante destacar como o acompanhamento de métricas nos
            orienta na tomada de decisões e definição de prioridades.
          </p>
          <p>
            Em relação à <b>métrica de recomendação</b>, tivemos aprendizados e
            impactos muito significativos. Em 2023, realizamos uma pesquisa de
            CSAT e identificamos que a satisfação dos usuários estava bem abaixo
            do que consideramos ideal. Com base nisso, trabalhamos para
            solucionar os principais pontos de insatisfação e, um ano depois,
            realizamos uma nova pesquisa. O resultado foi um aumento expressivo
            na satisfação dos clientes, aproximando-se da meta de sucesso
            estabelecida. Atualmente, seguimos focados em aprimorar os pontos de
            melhoria identificados na pesquisa mais recente.
          </p>
          <img className='w-[650px] object-cover' src={info7} />
          <p>
            Observamos também que a <b>métrica de eficiência operacional</b>
            demandava uma ação urgente, pois, ao comparar a porcentagem de
            clientes que utilizavam a funcionalidade com o número de
            atendimentos gerados, identificamos uma demanda excessiva por
            suporte. Isso nos levou a analisar os chamados para entender os
            principais desafios enfrentados pelos usuários. A partir dessa
            análise, realizamos ajustes na experiência do produto para que os
            clientes pudessem solucionar suas demandas de forma autônoma, sem
            precisar acionar o suporte. O impacto foi uma redução extremamente
            significativa no volume de atendimentos, beneficiando tanto a
            empresa, que conseguiu otimizar o time de atendimento, quanto os
            clientes, que passaram a utilizar a funcionalidade de forma mais
            fluida e intuitiva.
          </p>
          <p className='mt-3 text-xl font-bold'>
            A visibilidade do design como área estratégica
          </p>
          <p>
            O projeto de construção dessas métricas não apenas gerou diversas
            iniciativas, mas também nos permitiu atuar de forma mais
            estratégica. Ainda não conseguimos nos aprofundar em todas as
            frentes, mas priorizamos as dores mais urgentes e recorrentes,
            garantindo impacto onde era mais necessário. Os resultados,
            especialmente nas métricas de recomendação e eficiência operacional,
            mostraram que nosso esforço foi eficaz: identificamos problemas,
            implementamos planos de ação e conseguimos medir as melhorias
            realizadas.
          </p>
          <p>
            Mais do que números, este projeto reforça como o trabalho de design
            vai muito além das telas. Ele envolve análise, entendimento do
            comportamento do usuário e otimização da experiência, gerando
            impacto direto na satisfação dos clientes e no sucesso do negócio.
            Seguimos evoluindo e acompanhando as métricas para tornar a
            funcionalidade cada vez mais valiosa.
          </p>
          <p className='mt-3 text-xl font-bold'>Minha atuação no projeto</p>
          <p>
            Atuei de ponta a ponta no projeto, começando pelo levantamento da
            necessidade de se ter métricas de sucesso e definição das mesmas.
            Acompanhei a construção do BI para garantir que tivéssemos os dados
            necessários para monitorar as métricas definidas.
          </p>
          <p>
            Lançei e analisei pesquisas, coletei feedback diretamente com os
            usuários, analisei atendimentos de suporte, desenhei os protótipos
            das melhorias identificadas e priorizadas, e validei as soluções com
            os usuários para garantir que atendiam às suas necessidades e
            expectativas.
          </p>
          <div>
            <hr className='absolute text-gray-1 left-0 right-0' />
          </div>
        </div>
      </div>
      <div className='mt-10'>
        <ProjectFooter />
      </div>
    </>
  )
}

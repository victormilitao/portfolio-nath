import { Header } from '../components/header'
import info from '/src/assets/ci-1.png'
import info2 from '/src/assets/ci-2.png'
import info3 from '/src/assets/ci-3.png'
import info4 from '/src/assets/ci-4.png'
import info5 from '/src/assets/ci-5.png'
import info6 from '/src/assets/ci-6.png'
import info7 from '/src/assets/ci-7.png'
import info8 from '/src/assets/ci-8.png'
import info9 from '/src/assets/ci-9.png'
import info10 from '/src/assets/ci-10.png'
import { ProjectFooter } from '../components/project-footer'
import { Line } from '../components/line'
import { Title } from '../components/title'
import { ProjectImage } from '../components/project-image'
import { BackToTop } from '../components/back-to-top'
import { LinkTo } from '../components/link-to'

export const Continuos = () => {
  return (
    <>
      <Header />
      <BackToTop />
      <div className='flex justify-center mt-10'>
        <div className='flex flex-col max-w-[650px] text-lg'>
          <p className='text-secondary-1 text-3xl sm:text-4xl font-bold text-center mb-6'>
            Ciclo de melhoria contínua
          </p>
          <img className='w-[650px] object-cover mb-6' src={info} />
          <Title type='2' text='Introdução' />
          <p className='mt-2'>
            Tenho um grande apreço pelos projetos em que trabalho, mas, ao mesmo
            tempo, sou totalmente desapegada às soluções que crio. Se algo não
            funciona como o esperado, se os feedbacks indicam um caminho melhor,
            não hesito em mudar, refazer ou até recomeçar do zero. Para mim, o
            mais importante é que o produto entregue seja, de fato, valioso para
            o usuário.
          </p>
          <p className='mt-5'>
            Embora o objetivo de um produto muitas vezes esteja atrelado à
            venda, acredito que o verdadeiro sucesso está em oferecer algo que
            realmente faça a diferença. Quando conseguimos encantar o usuário,
            ele se torna nosso maior defensor — e não há marketing melhor do que
            isso.
          </p>
          <p className='mt-5'>
            Este projeto de melhoria contínua ilustra bem essa dinâmica. Mesmo
            com um Discovery sólido, ainda havia espaço para melhorias e
            aprendizados. A seguir, compartilho como seguimos refinando a
            funcionalidade de escala após o lançamento, garantindo sua evolução
            para torná-la cada vez mais eficiente e satisfatória para os
            usuários.
          </p>
          <Line />
          <div className='mt-3'>
            <Title type='2' text='Ações do ciclo de melhoria contínua' />
          </div>
          <p className='mt-2'>
            No primeiro ciclo de melhoria contínua da funcionalidade de escala,
            realizei <b>três ações</b>, cada uma baseada em uma fonte de
            informação diferente.
          </p>
          <p className='mt-6'>
            <b>Análise de gravações:</b> A primeira ação foi a análise de
            gravações de usuários reais interagindo com a funcionalidade,
            utilizando o Hotjar. Ao assistir a esses vídeos, identifiquei
            padrões de uso, dificuldades e oportunidades de melhoria,
            especialmente em termos de usabilidade.
          </p>
          <p className='mt-6'>
            <b>Atendimentos/Suporte:</b> A segunda fonte de informação veio do
            Zendesk, plataforma utilizada pelo time de atendimento para atender
            usuários com dúvidas. Filtrei os chamados relacionados à
            funcionalidade de escala e analisei os atendimentos para identificar
            quais dificuldades mais levavam os usuários a buscarem ajuda. Com
            isso, foi possível detectar o que ainda não estava tão intuitivo e
            fluído.
          </p>
          <p className='mt-6'>
            <b>Pesquisa de satisfação:</b> Por fim, conduzi uma pesquisa de
            satisfação (CSAT) para medir a percepção dos usuários e captar
            sugestões de melhoria. A pesquisa perguntava aos usuários como eles
            avaliavam a funcionalidade (de 1 a 5) e, em seguida, solicitava que
            compartilhassem o motivo da nota. As respostas abertas trouxeram
            insights valiosos e, além disso, consegui entrar em contato com
            alguns respondentes para conversas mais profundas. Assim, compreendi
            melhor seus desafios, expectativas e como poderíamos tornar a
            experiência ainda mais eficiente.
          </p>
          <Line />
          <div className='mt-6'>
            <Title
              type='3'
              text='O que descobri assistindo às gravações de uso?'
            />
          </div>
          <p className='mt-6'>
            Ao analisar as gravações do Hotjar, identifiquei sete bugs de
            funcionamento, além de 15 inconsistências na interface em relação ao
            design system. Também encontrei nove pontos críticos no fluxo e no
            comportamento da funcionalidade, que impactavam negativamente a
            experiência dos usuários. Com base nessas descobertas, priorizamos
            os ajustes necessários e realizamos a implementação. A seguir,
            destaco algumas das principais questões que identificamos e como as
            resolvemos:
          </p>
          <div className='mt-6'>
            <Title
              type='6'
              text='1. Confusão com o botão "+ Novo modelo de escala'
            />
          </div>
          <p className='mt-3'>
            Muitos usuários clicavam no botão "+ Novo Modelo de Escala" quando,
            na verdade, queriam publicar uma escala. Essa confusão indicava uma
            falha na hierarquia visual e na localização do botão para realizar a
            publicação de uma escala.
          </p>
          <ProjectImage src={info2} size='lg' />
          <p className='mt-6'>
            Para evitar essa situação, adicionamos um botão "+ Nova publicação"
            na aba de escalas publicadas, tornando o fluxo mais intuitivo. Após
            essa implementação, observamos que o problema não voltou a ocorrer.
          </p>
          <p className='mt-6'>
            Ainda assim, mantivemos o botão de publicação junto ao modelo, pois
            identificamos que os usuários já habituados poderiam preferir o
            fluxo que já era conhecido. Dessa forma, equilibramos a experiência
            tanto para novos usuários quanto para aqueles que já estavam
            familiarizados com o processo.
          </p>
          <ProjectImage src={info3} size='lg' />
          <p className='mt-6'>
            Antes, o botão de publicação estava sempre associado a um modelo de
            escala específico. Ao adicioná-lo na aba de escalas publicadas, foi
            necessário considerar um novo fluxo:
          </p>
          <ul className='mt-6 list-disc list-inside'>
            <li>
              Se o usuário não estiver visualizando um modelo de escala no
              momento em que clicar no botão, além de selecionar o período da
              publicação, ele também precisará escolher para qual modelo deseja
              publicá-la.
            </li>
            <li className='mt-6'>
              Se ele já estiver visualizando um modelo específico, o sistema
              sugerirá automaticamente a publicação para esse modelo, mas ainda
              permitindo que ele selecione outro, caso prefira.
            </li>
          </ul>
          <p className='mt-14'>
            <Title type='6' text='2. Dificuldade para começar a utilizar' />
          </p>
          <p className='mt-3'>
            Ao acessar a funcionalidade pela primeira vez, os usuários se
            deparavam com uma tela vazia, sem informações ou orientações. Sem um
            direcionamento claro, muitos não sabiam por onde começar e,
            consequentemente, não avançavam no uso da funcionalidade.
          </p>
          <ProjectImage src={info4} />
          <p className='mt-3'>
            Essa descoberta deu origem a uma iniciativa dentro da squad: o
            projeto de onboarding do Escala. Desenvolvemos um fluxo guiado para
            os primeiros passos do usuário, facilitando as configurações
            iniciais e tornando a experiência mais intuitiva, o que reduziu
            significativamente a fricção no primeiro uso.
          </p>
          Videooooooooooooooo
          <p className='mt-3'>
            Uma das ações para medir a efetividade desta iniciativa foi a
            implementação de uma pesquisa CES ao final do fluxo guiado. Quando o
            usuário finaliza a última etapa, perguntamos o quão fácil foi
            realizar as configurações iniciais, em uma escala de 1 a 7.
          </p>
          <p className='mt-3'>
            O CES é calculado pela média das respostas recebidas, e
            estabelecemos como métrica de sucesso um CES igual ou superior a 6.
            Acompanhamos essa métrica há seis meses e, em dois deles, atingimos
            o resultado esperado. No mês de menor desempenho, o CES ficou em
            5,4, um número que ainda reflete um impacto positivo, mas também
            evidencia oportunidades de melhoria.
          </p>
          <p className='mt-3'>
            As respostas abertas da pesquisa trouxeram insights valiosos, que já
            mapeamos em um backlog de melhorias. Dessa forma, garantimos a
            evolução contínua da iniciativa, ajustando pontos que podem tornar a
            experiência ainda mais intuitiva e eficiente.
          </p>
          <div className='mt-14'>
            <Title
              type='6'
              text='3. A pesquisa demorava para retornar resultados'
            />
          </div>
          <p className='mt-6'>
            Percebemos que a barra de pesquisa dentro da criação de um modelo
            estava lenta para exibir os resultados. Isso acontecia porque, ao
            digitar um termo, o sistema buscava a palavra em diversas
            categorias, como nomes de colaboradores, equipes, cargos e
            departamentos, tornando a pesquisa pesada.
          </p>
          <ProjectImage src={info5} size='lg' />
          <p className='mt-6'>
            Para melhorar essa experiência, implementamos um filtro de categoria
            antes da busca, permitindo que o usuário selecione previamente se
            deseja pesquisar por cargo, colaborador, departamento ou unidade de
            negócio. Dessa forma, ao buscar por um termo, o sistema restringe a
            pesquisa à categoria escolhida, tornando o carregamento muito mais
            rápido.
          </p>
          <ProjectImage src={info6} size='lg' />
          <Line />
          <div className='mt-3'>
            <Title type='3' text='O que descobri analisando os atendimentos?' />
          </div>
          <p className='mt-3'>
            Foram analisados 105 atendimentos referentes um período de 20 dias.
            A análise mostrou que não havia um motivo predominante para os
            acionamentos ao suporte, exceto por dois bugs que afetaram vários
            clientes no período. Fora isso, as dúvidas estavam distribuídas
            entre diferentes tópicos, sem um padrão claro de recorrência.
          </p>
          <p className='mt-6'>
            Uma das dificuldades mais comuns foi o início do uso da
            funcionalidade, um problema também identificado na análise das
            gravações do Hotjar. Além disso, surgiram dúvidas pontuais, como a
            exclusão de escalas, a adição de colaboradores em escalas já
            publicadas e a diferença entre turno e escala.
          </p>
          <p className='mt-6'>
            No entanto, a principal questão identificada foi a falta de
            publicação das escalas por alguns clientes, impactando diretamente a
            gestão de horas extras. Como o sistema interpreta dias sem
            publicação como dias de descanso, qualquer trabalho nesses dias
            resulta automaticamente em horas extras.
          </p>
          <p className='mt-6'>
            Os clientes, então, acionavam o suporte para entender por que as
            horas extras estavam sendo geradas, sem perceber que a causa era a
            ausência da publicação da escala. Para minimizar esse problema,
            implementamos duas soluções para reforçar a necessidade de
            publicação: alertas por e-mail e notificações e um indicador visual
            na interface, destacando modelos sem publicação no período vigente.
          </p>
          <ProjectImage src={info7} />
          <p className='mt-6'>
            Essas ações já foram implementadas, mas seus impactos ainda estão
            sendo avaliados. Seguimos monitorando os resultados para validar sua
            efetividade e, se necessário, ajustar a abordagem.
          </p>
          <Line />
          <div className='mt-10'>
            <Title
              type='3'
              text='O que descobri com a pesquisa de satisfação?'
            />
          </div>
          <p className='mt-6'>
            A pesquisa de satisfação revelou quatro bugs desconhecidos, que
            foram rapidamente corrigidos. Além disso, muitos usuários relataram
            erros inesperados e intermitentes. Para lidar com essa questão, o
            time de desenvolvimento iniciou um projeto de monitoramento e
            correção desses erros antes que impactassem mais clientes. Como
            resultado, já solucionamos cerca de 20 casos mapeados.
          </p>
          <p className='mt-6'>
            Além de identificar e corrigir problemas técnicos, a pesquisa também
            nos trouxe insights valiosos sobre a experiência dos usuários. A
            partir das respostas e das conversas com os participantes, mapeamos
            mais de 30 possíveis melhorias. Dentre elas, priorizamos as que
            tinham maior impacto na usabilidade e eficiência do sistema. A
            seguir, destaco três aprimoramentos realizados com base nessas
            descobertas:
          </p>
          <div className='mt-6'>
            <Title
              type='6'
              text='1. Personalização da validação da legislação'
            />
          </div>
          <p className='mt-3'>
            O sistema alertava os usuários sempre que uma escala infringia
            alguma regra trabalhista, como excesso de domingos consecutivos
            trabalhados ou muitos dias seguidos sem folga. No entanto,
            percebemos que essas regras, apesar de estarem na legislação, não se
            aplicavam de maneira uniforme a todas as empresas, devido a
            convenções coletivas específicas.
          </p>
          <p className='mt-6'>
            Isso gerava frustração para alguns clientes, pois o sistema indicava
            que uma escala estava irregular, quando, na realidade, a regra não
            era válida para aquela empresa. Em outros casos, algumas empresas
            não queriam receber alertas de legislação, pois precisavam operar
            fora dessas normas e preferiam que o sistema não interferisse.
          </p>
          <p className='mt-6'>
            Para resolver essa questão, tornamos essa funcionalidade
            configurável. Agora, os usuários podem ativar ou desativar os
            alertas conforme a necessidade da empresa. Além disso, é possível
            definir um limite personalizado para domingos consecutivos
            trabalhados, permitindo que o sistema se adapte às regras da
            convenção coletiva da empresa.
          </p>
          <ProjectImage src={info8} />
          <div className='mt-6'>
            <Title
              type='6'
              text='2. Ajustes no arquivo de impressão da escala'
            />
          </div>
          <p className='mt-3'>
            Outra melhoria importante foi a inclusão dos horários de trabalho no
            arquivo de impressão da escala. Anteriormente, o arquivo impresso
            era apenas uma captura da tela, exibindo apenas se o dia era de
            trabalho ou folga, sem detalhar os horários. Como no sistema digital
            os horários só apareciam ao clicar em cada dia, essa informação não
            era transportada para a versão impressa, o que gerava reclamações.
          </p>
          <p className='mt-6'>
            Realizamos então os ajustes necessários para que a versão impressa
            incluísse os horários de trabalho dos dias em que os colaboradores
            precisassem atuar em um turno diferente do contratado. No entanto,
            durante a implementação dessa melhoria, enfrentamos um desafio
            adicional: a identidade visual do sistema. Atualmente, o aplicativo,
            onde os colaboradores também acessam a escala, já segue a nova
            identidade da empresa, enquanto a versão web ainda está em processo
            de transição.
          </p>
          <p className='mt-6'>
            Isso nos levou a uma decisão importante: alinhar o arquivo de
            impressão ao design do aplicativo, garantindo uma experiência mais
            consistente para os colaboradores. Como são eles quem precisam
            visualizar a escala com clareza para organizar sua rotina de
            trabalho, priorizamos um layout mais próximo da versão do app, em
            vez da interface web usada pelos gestores e RH.
          </p>
          <ProjectImage src={info9} />
          <div className='mt-6'>
            <Title
              type='6'
              text='3. Correção na regra de pagamento para dias de descanso'
            />
          </div>
          <p className='mt-3'>
            Essa melhoria não trouxe mudanças visuais, mas ajustou a fórmula de
            cálculo do sistema. O problema identificado era que, ao calcular o
            pagamento de um dia de descanso que coincidia com um sábado, por
            exemplo, o sistema considerava a regra de pagamento do sábado, e não
            do dia de descanso.
          </p>
          <p className='mt-3'>
            Agora, o sistema prioriza corretamente a regra do dia de descanso,
            independentemente de ser sábado, domingo ou feriado. Assim, se um
            colaborador trabalhar em um dia de descanso, o pagamento seguirá
            essa regra, e não a do dia da semana em que ele caiu.
          </p>
          <Line />
          <div className='mt-3'>
            <Title type='3' text='E o ciclo se repete...' />
          </div>
          <ProjectImage src={info10} size='sm' />
          <p className='mt-6'>
            O ciclo de melhoria contínua garante que o produto não fique para
            trás. Ele pode atingir suas métricas de sucesso iniciais, mas o
            mercado, as necessidades dos clientes e a tecnologia estão em
            constante evolução. Novos desafios surgem, novas oportunidades
            aparecem, e esse ciclo nos permite acompanhar essas mudanças,
            refinando e aprimorando a experiência dos usuários.
          </p>
          <p className='mt-6'>
            Mais do que um ajuste pontual, essa prática assegura que o produto
            se mantenha relevante, competitivo e alinhado às reais necessidades
            dos clientes, impulsionando sua evolução de forma consistente.
          </p>
          <LinkTo className='mt-12 -mb-5 text-center' href='/'>
            Acessar a página inicial
          </LinkTo>
          <Line />
        </div>
      </div>

      <ProjectFooter />
    </>
  )
}

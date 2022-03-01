import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

/*Trabalhos*/ 
import thumbMafiaBatata from '../public/images/works/mafia-batata.gif'
import thumbDocTenis from '../public/images/works/doc-tenis.png'
import thumbMarinhaBrasil from '../public/images/works/project-9.png'
import thumbBellaZen from '../public/images/works/bella-zen.png'
import thumbArujoShoes from '../public/images/works/araujo.png'

/*Colabs*/
import thumbSegundaCP from '../public/images/works/SegundaCP.jpg'


const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Trabalhos
      </Heading>

      <SimpleGrid columns={[1, 1, 1, 1, 2]} gap={6}>

        <Section>
          <WorkGridItem id="MafiaBatata" title="Mafia da Batata" href="https://mafia-da-batata.netlify.app/" thumbnail={thumbMafiaBatata}>
            Este é um website com menu dinâmico que possibilita o cliente escolher seus pedidos e realizar o Check-in direto no WhatsApp do restaurante.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            title="Docsneakers"
            href="https://docsneakers.netlify.app/"
            thumbnail={thumbDocTenis}
          >
            Este é um website de vitrine com possibilidade de vendas on-line para uma Web Store de Brasília - DF.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            title="Hotel Management"
            href="#"
            thumbnail={thumbMarinhaBrasil}
          >
            Este é um Software em C# (C-Sharp) de Gestão de Hotelaria desenvolvido para a Marinha do Brasil.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="https://bella-zen-spa.netlify.app/" title="Bella Zen" href="https://bella-zen-spa.netlify.app/" thumbnail={thumbBellaZen}>
            Este é um website de vitrine para uma empresa especializada em Spar em Brasília - DF.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="AraujoShoes" href="https://araujo-store-uniplan.netlify.app/" thumbnail={thumbArujoShoes} title="Araujo Shoes">
            Este é um website de vitrine com possibilidade de vendas on-line para uma Web Store de Brasília - DF.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Colaborações
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            href="https://github.com/matthaiosalves/Segunda-Companhia"
            thumbnail={thumbSegundaCP}
            title="Segunda Companhia - EB"
          >
            Este é um website desenvolvido para uma instituição de um RPG chamado Habbo.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      {/* <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Acadêmicos
        </Heading>
      </Section> */}

      {/* <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="pichu2" thumbnail={thumbPichu2} title="Pichu*Pichu">
            Twitter client app for iPhone Safari
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="freedbtagger"
            thumbnail={thumbFreeDBTagger}
            title="freeDBTagger"
          >
            Automatic audio file tagging tool using FreeDB for Windows
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="amembo" thumbnail={thumbAmembo} title="Amembo">
            P2P private file sharing tool with MSN Messenger integration for
            Windows
          </WorkGridItem>
        </Section>
      </SimpleGrid> */}

    </Container>
  </Layout>
)

export default Works

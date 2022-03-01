import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'

import thumbYouTube from '../public/images/works/youtube-thumb.jpg'


const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Olá, sou um desenvolvedor Front-End baseado no Brasil
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Matheus Alves
          </Heading>
          <p>Desenvolvedor Front-End ( Next.js / Wordpress )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/matheus.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Trabalho
        </Heading>
        <Paragraph>
          Sou formado em Análise e Desenvolvimento de Sistemas.
          Tenho facilidade para compreender as demandas e explicar de uma forma didática para todos os envolvidos e interessados no projeto (gestores, desenvolvedores, designers, usuários).
          Caso tenha qualquer curiosidade, pode-se conferir meus trabalhos em meu 
          {' '}
          <NextLink href="https://github.com/matthaiosalves">
            <Link>portfolio</Link>
          </NextLink>
          .
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Meu portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2000</BioYear>
          Natural do Rio de Janeiro, Brasíl.
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Graduei-me no Ensino Médio pela Faculdade Mauá do Distrito Federal.
        </BioSection>
        <BioSection>
          <BioYear>2019 até hoje.</BioYear>
          Trabalhando como freelancer.
        </BioSection>
        <BioSection>
          <BioYear>2021 até hoje.</BioYear>
          Trabalhando como desenvolvedor Front-End na Coopers.
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Graduei-me Em Análise e desenvolvimento de sistemas pelo Centro Universitário Planalto do Distrito Federal  (UNIPLAN).
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Eu ♥
        </Heading>
        <Paragraph>
          Filosofia, Música e Jiu Jitsu.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
         Na web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/matthaiosalves" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @MatthaiosAlves
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/MatthaiosAlves" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @MatthaiosAlves
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/matthaiosalves" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @matthaiosalves
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
        
          <GridItem
            href="https://www.youtube.com/channel/UCIaxuAfnfupWAYS4GZlPIlw"
            title="Meu Canal no Youtube."
            thumbnail={thumbYouTube}
          >
          </GridItem>
    
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/posts">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Posts Populares
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home

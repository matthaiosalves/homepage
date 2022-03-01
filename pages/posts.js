import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbFlashPlayer from '../public/images/contents/habbo-flash-player-electron.jpg'
import thumbHabboAir from '../public/images/contents/habbo-air-mobile.jpg'
import thumbFlashPlayerExtension from '../public/images/contents/habbo-flash-player-extension.jpg'
import thumbLepatto from '../public/images/contents/habbo-anti-lag.jpg'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Posts Populares
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Habbo Flash Player Extension"
            thumbnail={thumbFlashPlayerExtension}
            href="https://youtu.be/Wp3o0evQfqc"
          />
          <GridItem
            title="Habbo Air (Mobile)"
            thumbnail={thumbHabboAir}
            href="https://youtu.be/zeI5YXFoyy0"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Habbo Flash Electron"
            thumbnail={thumbFlashPlayer}
            href="https://youtu.be/y5AyTSAiovA"
          />
          <GridItem
            title="Habbo Air Facebook (Mobile)"
            thumbnail={thumbHabboAir}
            href="https://youtu.be/dGcEkh76n8o"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Anti Lag Habbo - Lepatto"
            thumbnail={thumbLepatto}
            href="https://youtu.be/Dqigjdi6w1o"
          />
        </SimpleGrid>
      </Section>

    </Container>
  </Layout>
)

export default Posts

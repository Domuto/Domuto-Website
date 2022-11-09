import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/IMG_1943.jpg'
import thumbWalknote from '../public/images/works/IMG_1942.jpg'
import thumbFourPainters from '../public/images/works/IMG_1941.jpg'
import thumbMenkiki from '../public/images/works/IMG_1944.jpg'
import thumbMargelo from '../public/images/works/IMG_1945.jpg'
import thumbModeTokyo from '../public/images/works/IMG_1949.jpg'
import thumbStyly from '../public/images/works/IMG_1947.jpg'
import thumbModeTokyo2 from '../public/images/works/IMG_1946.jpg'
import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png'
import thumbAmembo from '../public/images/works/amembo_eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        PROJECT MOBILE VIEWS 
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="inkdrop" title="ETHNIC SH*T VIRTUAL STORE " thumbnail={thumbInkdrop}>
  Added a 3D VIRTUAL STORE to a Shopify Website          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="walknote"
            title="PINKFLAMINGOUSA HALLOWEEN PARTY"
            thumbnail={thumbWalknote}
          >
            Made a VIRTUAL club for the PINKFLAMINGOUSA,PRIX,NODISCO Halloween Party
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="fourpainters"
            title="KODONE ART SHOW"
            thumbnail={thumbFourPainters}
          >
            Made a VIRTUAL art room for the artist Kodone's PUMA sponsored Art showcase in NewYork
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="menkiki" thumbnail={thumbMenkiki} title="STRESSGODS WEBSITE">
           Wesbite for the brand STRESSGODS
          </WorkGridItem>
        </Section>
      </SimpleGrid>

     

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="margelo" thumbnail={thumbMargelo} title="13TH Clothing ">
            
          </WorkGridItem>
        </Section>


        <Section delay={0.3}>
          <WorkGridItem
            id=""
            thumbnail={thumbModeTokyo}
            title="VP SOLUTIONS"
          >
            Made a website for VP Solutions Valet company 
          </WorkGridItem>
        </Section>


       
        <Section delay={0.3}>
          <WorkGridItem
            id=""
            thumbnail={thumbModeTokyo2}
            title="FILMSBYNAS"
          >
            Made a Website for FILMSBYNAS
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="" thumbnail={thumbStyly} title="PEACHSOLDIER ">
Made a Website for the brand PEACHSOLDIER          </WorkGridItem>
          
        </Section>

        
      </SimpleGrid>

    

      
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'

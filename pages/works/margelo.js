import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Margelo">
    <Container>
      <Title>
      THIRTEENTH <Badge>2022</Badge>
      </Title>
      <P>
      A website for the brand THIRTEENTH
      </P>
     
      <List ml={4} my={4}>
      <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.muse.place/estate">
          ETHNIC SH*T VIRTUAL STORE  <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>SHOPIFY</span>
        </ListItem>
      
</List>         
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

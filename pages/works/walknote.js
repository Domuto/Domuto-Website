import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="walknote">
    <Container>
      <Title>
      PINKFLAMINGOUSA Halloween Party<Badge>2022</Badge>
      </Title>
      <P>
      Made a VIRTUAL club for the PINKFLAMINGOUSA,PRIX,NODISCO Halloween Party
      </P>
    
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>MUSE</span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.muse.place/pinkflamingousa">
          PINKFLAMINGOUSA Halloween Party <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        
      </List>

      
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="The four painters">
    <Container>
      <Title>
      KODONE ART SHOW <Badge>2022</Badge>
      </Title>
      <P>
      Made a VIRTUAL art room for the artist Kodone's PUMA sponsored Art showcase in NewYork
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>MUSE</span>
        </ListItem>
       
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.muse.place/nice2meetukodone">
          Nice2MeetuKodone <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
       
    
</List>
    
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'

import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m an Web developer based in Atlanta!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Danie Omuto
          </Heading>
          <p>Software Engineer || Creator (Developer / Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/dmuto.png"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
        I am a Cum Laude Computer Science Graduate. Georgia Tech Master Student, Published Medium Author, Freelance Developer. I am a dedicated and focused team player with excellent communication skills, reliable, flexible, and hardworking, always ready to learn and apply learned information. A few of my skills include Web Development, Software Development, Cloud Computing, Website Design, Data Analysis, Database Management, Python, Javascript, HTML/XML/CSS, Data Visualization
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1996</BioYear>
          Born in Lancaster Pennsylvania
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Completed the BBS IN COMPUTER SCIENCE | SOFTWARE ENGINEERING
          at Kennesaw State University
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
           Enrolled at MS IN DATA ANALYSIS at Georgia Institute of Technology
        </BioSection>
        <BioSection>
          <BioYear>2020 </BioYear>Accenture Software Engineer 
        </BioSection>
      </Section>

    

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Domuto" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @domuto
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://mobile.twitter.com/_coolthehype" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @_coolthehype
              </Button>
            </Link>
          </ListItem>
          
          <ListItem>
            <Link href="https://www.instagram.com/the_danielomuto/?hl=en" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @The_DanielOmuto
              </Button>
            </Link>
          </ListItem>
        </List>

       

        <Box align="center" my={4}>
          <NextLink href="/posts" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'

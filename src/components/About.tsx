import { Box, Container, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import { urls } from '../utils/urls'

export const About = () => {
  return (
    <Container maxW={'3xl'} id={urls.website.sections.aboutMe} h={'100vh'}>
      <Flex h={'100%'} w={'100%'} alignItems={'center'} justifyContent={'center'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
          >
            O kempu
          </Heading>
          <Text color={'gray.500'}>
            Týdenní kemp plný zážitků, nových přátel, sportovních aktivit a výletů! Poznej něco
            nového s naší partou.
          </Text>
        </Stack>
      </Flex>
    </Container>
  )
}

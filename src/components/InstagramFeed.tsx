import { Box, Container, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react'

export const InstagramFeed = () => {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'3xl'}>
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
            InstagramFeed #svinovskyKemp
          </Heading>
          <Text color={'gray.500'}>
            Týdenní kemp plný zážitků, nových přátel, sportovních aktivit a výletů! Poznej něco
            nového s naší partou.
          </Text>
        </Stack>
      </Container>
    </Box>
  )
}

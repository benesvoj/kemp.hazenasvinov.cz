import { Box, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import { PriceSelection } from './PriceSelection'
import { getCamps } from '../utils/campList'

export const Pricing = () => {
  const camps = getCamps()

  return (
    <Box py={12}>
      <VStack spacing={2} textAlign='center'>
        <Heading as='h1' fontSize='4xl'>
          Kempy a soustředění
        </Heading>
        <Text fontSize='lg' color={'gray.500'}>
          Svinovský kemp je pořádán pod hlavičkou oddílu TJ Sokol Svinov, celostátní soustředění pod
          komisi mládeže Svazu národní házené. <br />
          Na obou turnusech má vždy oddíl TJ Sokol Svinov své zástupce a to jak z řad vedoucích, tak
          zúčastněných.
        </Text>
      </VStack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign='center'
        justify='center'
        spacing={{ base: 4, lg: 10 }}
        py={10}
      >
        {camps.map(camp => {
          return (
            <PriceSelection
              key={camp.id}
              id={camp.id}
              isPopular={camp.isPopular}
              title={camp.title}
              description={camp.description}
              price={camp.price}
              currency={camp.currency}
              date={camp.date}
              place={camp.place}
              ageFrom={camp.ageFrom}
              ageTo={camp.ageTo}
            />
          )
        })}
      </Stack>
    </Box>
  )
}
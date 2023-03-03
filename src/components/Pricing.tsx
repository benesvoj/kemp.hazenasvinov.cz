import {
  Box,
  Button,
  HStack,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react'
import { BsCalendarDate } from 'react-icons/bs'
import { FaCampground, FaCheckCircle } from 'react-icons/fa'
import { GiAges } from 'react-icons/gi'
import { ReactNode } from 'react'

function PriceWrapper({ children }: { children: ReactNode }) {
  return (
    <Box
      mb={4}
      shadow='base'
      borderWidth='1px'
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius={'xl'}
    >
      {children}
    </Box>
  )
}

export const Pricing = () => {
  return (
    <Box py={12}>
      <VStack spacing={2} textAlign='center'>
        <Heading as='h1' fontSize='4xl'>
          Plans that fit your need
        </Heading>
        <Text fontSize='lg' color={'gray.500'}>
          Start with 14-day free trial. No credit card needed. Cancel at anytime.
        </Text>
      </VStack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign='center'
        justify='center'
        spacing={{ base: 4, lg: 10 }}
        py={10}
      >
        <PriceWrapper>
          <Box position='relative'>
            <Box
              position='absolute'
              top='-16px'
              left='50%'
              style={{ transform: 'translate(-50%)' }}
            >
              <Text
                textTransform='uppercase'
                bg={useColorModeValue('red.300', 'red.700')}
                px={3}
                py={1}
                color={useColorModeValue('gray.900', 'gray.300')}
                fontSize='sm'
                fontWeight='600'
                rounded='xl'
              >
                Populární
              </Text>
            </Box>
            <Box py={4} px={12}>
              <Text fontWeight='500' fontSize='2xl'>
                Svinovský kemp
              </Text>
              <HStack justifyContent='center'>
                <Text fontSize='5xl' fontWeight='900'>
                  2300
                </Text>
                <Text fontSize='3xl' fontWeight='600'>
                  Kč
                </Text>
              </HStack>
            </Box>
            <VStack bg={useColorModeValue('gray.50', 'gray.700')} py={4} borderBottomRadius={'xl'}>
              <List spacing={3} textAlign='start' px={12}>
                <ListItem>
                  <ListIcon as={BsCalendarDate} color='green.500' />
                  Termín: 7. - 12.8.2022
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCampground} color='green.500' />
                  Místo: Stará Ves nad Ondřejnicí
                </ListItem>
                <ListItem>
                  <ListIcon as={GiAges} color='green.500' />
                  Věk: 5 - 15 let
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color='green.500' />
                  Téma :
                </ListItem>
                <ListItem>přípravka, mladší žačky a žáci, starší žačky a žáci</ListItem>
              </List>
              <Box w='80%' pt={7}>
                <Button w='full' colorScheme='red'>
                  Přihlas se
                </Button>
              </Box>
            </VStack>
          </Box>
        </PriceWrapper>
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight='500' fontSize='2xl'>
              Celostátní soustředění
            </Text>
            <HStack justifyContent='center'>
              <Text fontSize='5xl' fontWeight='900'>
                3000
              </Text>
              <Text fontSize='3xl' fontWeight='600'>
                Kč
              </Text>
            </HStack>
          </Box>
          <VStack bg={useColorModeValue('gray.50', 'gray.700')} py={4} borderBottomRadius={'xl'}>
            <List spacing={3} textAlign='start' px={12}>
              <ListItem>
                <ListIcon as={BsCalendarDate} color='green.500' />
                Termín: 2. - 9.7.2022
              </ListItem>
              <ListItem>
                <ListIcon as={FaCampground} color='green.500' />
                Místo: Nové Město nad Metují/Dobruška
              </ListItem>
              <ListItem>
                <ListIcon as={GiAges} color='green.500' />
                Věk: 7 - 15 let
              </ListItem>
              <ListItem>přípravka, mladší žačky a žáci, starší žačky a žáci</ListItem>
            </List>
            <Box w='80%' pt={7}>
              <Button w='full' colorScheme='red' variant='outline'>
                Přihlas se
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>
      </Stack>
    </Box>
  )
}

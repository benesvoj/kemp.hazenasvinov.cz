import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  GridItem,
  HStack,
  Input,
  List,
  ListIcon,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Text,
  VStack,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import { BsCalendarDate } from 'react-icons/bs'
import { FaCampground, FaCheckCircle } from 'react-icons/fa'
import { GiAges } from 'react-icons/gi'
import { ReactNode } from 'react'

export type PriceSelectionProps = {
  id: number
  isPopular: boolean
  title: string
  description: string
  price: number
  currency: string
  date: string
  place: string
  ageFrom: number
  ageTo: number
  theme?: string
}

const getDialog = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>ABCD</Text>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant='ghost'>Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

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
export const PriceSelection = (props: PriceSelectionProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <PriceWrapper>
        <Box position='relative'>
          {props.isPopular ? (
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
          ) : null}
          <Box py={4} px={12}>
            <Text fontWeight='500' fontSize='2xl'>
              {props.title}
            </Text>
            <HStack justifyContent='center'>
              <Text fontSize='5xl' fontWeight='900'>
                {props.price}
              </Text>
              <Text fontSize='3xl' fontWeight='600'>
                {props.currency}
              </Text>
            </HStack>
          </Box>
          <VStack bg={useColorModeValue('gray.50', 'gray.700')} py={4} borderBottomRadius={'xl'}>
            <List spacing={3} textAlign='start' px={12}>
              <ListItem>
                <ListIcon as={BsCalendarDate} color='green.500' />
                Termín: {props.date}
              </ListItem>
              <ListItem>
                <ListIcon as={FaCampground} color='green.500' />
                Místo: {props.place}
              </ListItem>
              <ListItem>
                <ListIcon as={GiAges} color='green.500' />
                Věk: {props.ageFrom} - {props.ageTo} let
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color='green.500' />
                Téma: {props.theme}
              </ListItem>
              <ListItem>{props.description}</ListItem>
            </List>
            <Box w='80%' pt={7}>
              <Button w='full' colorScheme='red' onClick={onOpen}>
                Přihlas se
              </Button>
            </Box>
          </VStack>
        </Box>
      </PriceWrapper>

      <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Přihláška</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Grid>
              <GridItem pb={'4'}>
                <FormControl>
                  <FormLabel>Email:</FormLabel>
                  <Input type={'email'} placeholder={'email@email.cz'} isRequired />
                </FormControl>
              </GridItem>
              <GridItem pb={'4'}>
                <FormControl>
                  <FormLabel>Telefon:</FormLabel>
                  <Input type={'tel'} placeholder={'777123456'} />
                </FormControl>
              </GridItem>
              <GridItem pb={'4'}>
                <FormControl>
                  <FormLabel>Jméno a příjmení dítěte:</FormLabel>
                  <Input type={'text'} placeholder={'Josef Novák'} />
                </FormControl>
              </GridItem>
              <GridItem pb={'4'}>
                <FormControl>
                  <FormLabel>Datum narození:</FormLabel>
                  <Input type={'date'} />
                </FormControl>
              </GridItem>
              <GridItem pb={'4'}>
                <FormControl>
                  <FormLabel>Třída ZŠ:</FormLabel>
                  <Input type={'text'} placeholder={'5.třída'} />
                </FormControl>
              </GridItem>
              <GridItem pb={'4'}>
                <FormControl>
                  <FormLabel>Doplňující informace (alergie, jídlo, ...):</FormLabel>
                  <Input type={'text'} placeholder={'Alergický na lepek, laktózu, jahody.'} />
                </FormControl>
              </GridItem>
              <GridItem pb={'4'}>
                <FormControl>
                  <FormLabel>Soustředění:</FormLabel>
                  <RadioGroup defaultValue='kemp'>
                    <HStack spacing='24px'>
                      <Radio value='kemp'>Svinovský kemp</Radio>
                      <Radio value='celostatko'>Celostátní soustředení</Radio>
                      <Radio value='oboje'>Oboje</Radio>
                    </HStack>
                  </RadioGroup>
                </FormControl>
              </GridItem>
            </Grid>
          </ModalBody>

          <ModalFooter>
            <Button variant='ghost' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme='blue'>Odeslat</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

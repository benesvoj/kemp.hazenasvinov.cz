import {
  Box,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { urls } from '../utils/urls'

export const Contact = () => {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')} id={urls.website.sections.contact}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12} h={'100vh'}>
        <Flex h={'100%'} w={'100%'} alignItems={'center'} justifyContent={'center'}>
          <Stack>
            <Stack spacing={0} align={'center'}>
              <Heading as={'h1'}>Kontaktujte nás</Heading>
            </Stack>
            <Text>V pripade nejanostni nas nevahejte kontaktovat pro vice informaci</Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={{ base: 10, md: 4, lg: 10 }}>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input type={'email'} />
              </FormControl>
              <FormControl>
                <FormLabel>Text zpravy:</FormLabel>
                <Input type={'textarea'} />
              </FormControl>
            </Stack>
          </Stack>
        </Flex>
      </Container>
    </Box>
  )
}

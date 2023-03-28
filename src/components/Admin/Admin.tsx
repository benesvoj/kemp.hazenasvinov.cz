import { AuthContext } from '../../context/AuthContext'
import { Box, Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

export const Admin = () => {
  let navigate = useNavigate()

  const { login } = useAuth()

  const handleLogin = () => {
    login({
      id: '1',
      name: 'Vojtech Benes',
      email: 'benesvojtech@seznam.cz',
    })
  }

  return (
    <VStack alignItems={'center'} justifyContent={'center'} h={'100vh'}>
      <Box w={'500px'} borderWidth={1} p={20} borderRadius={8} bgColor={'gray.700'}>
        <FormControl onSubmit={() => navigate('/')}>
          <FormLabel>Login</FormLabel>
          <Input type={'login'} borderColor={'whitesmoke'} />
          <FormLabel pt={4}>Password</FormLabel>
          <Input type={'password'} borderColor={'whitesmoke'} />
          <Box display={'flex'} justifyContent={'flex-end'} pt={4}>
            <Button colorScheme={'blue'} onClick={handleLogin}>
              <Link to={'admin/'}>Login</Link>
            </Button>
          </Box>
        </FormControl>
      </Box>
    </VStack>
  )
}

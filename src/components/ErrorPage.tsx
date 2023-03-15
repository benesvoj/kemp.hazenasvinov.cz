import { Box, Center, Flex, HStack, Heading, Text, VStack } from '@chakra-ui/react'
import { useRouteError } from 'react-router-dom'
import React from 'react'

type RouteError = {
  statusText?: string
  message?: string
}

export const ErrorPage = () => {
  const error = useRouteError() as RouteError
  console.error(error)

  return (
    <Flex h={'100%'} w={'100%'} position={'fixed'} alignItems={'center'} justifyContent={'center'}>
      <Box id='error-page'>
        <Heading as='h1'>Oops!</Heading>
        <Text>Omlouváme se, ale stránka nebyla nalezena.</Text>
        <Text>
          <i>{error.statusText || error.message}</i>
        </Text>
      </Box>
    </Flex>
  )
}

import { Box, Image, Link, Text } from '@chakra-ui/react'
import { urls } from '../utils/urls'
import React from 'react'
export const Logo = () => {
  return (
    <Box pl={20}>
      <Link href={urls.website.link}>
        <Image src={urls.website.logo} alt={'Logo oddilu TJ Sokol Svinov'} w={'100px'} h={'auto'} />
      </Link>
    </Box>
  )
}

import { Box, HStack, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Logo } from './Logo'
import { getMenuItems } from '../utils/urls'
import React from 'react'

export const Header = () => {
  const menuItems = getMenuItems()

  const handleClickScroll = (props: string) => {
    const element = document.getElementById(props)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <HStack
        position={'fixed'}
        top={0}
        h={24}
        justifyContent={'space-between'}
        overflow={'hidden'}
        w={'100%'}
        zIndex={1000}
      >
        <Logo />

        <Box p={4}>
          <Stack direction={'row'} align={'center'}>
            {menuItems.map(menuItem => {
              return menuItem.isAvailable ? (
                <Link key={menuItem.id} to={menuItem.url}>
                  <Text fontSize={'3xl'} as={'b'} p={4}>
                    {menuItem.title}
                  </Text>
                </Link>
              ) : null
            })}
          </Stack>
        </Box>
      </HStack>
    </Box>
  )
}

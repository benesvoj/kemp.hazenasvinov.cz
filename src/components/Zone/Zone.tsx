import React from 'react';
import {Box, Container, Flex, Stack} from '@chakra-ui/react';

interface ZoneProps {
  children: React.ReactNode;
  url?: string;
  bg?: string;
}

export const Zone = (props: ZoneProps) => {
  const url = props.url ? props.url : '';

  return (
    <Box bg={props.bg} id={url}>
      <Container maxW={'3xl'} h={'100vh'}>
        <Flex h={'100%'} w={'100%'} alignItems={'center'} justifyContent={'center'}>
          <Stack as={Box} textAlign={'center'} spacing={{base: 8, md: 14}} py={{base: 20, md: 36}}>
            {props.children}
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};

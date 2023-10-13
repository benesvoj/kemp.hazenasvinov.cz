import React from 'react';
import {Box, Container, Stack, Text} from '@chakra-ui/react';
import {Logo} from './Logo';
import styled, {useTheme} from 'styled-components';

const ButtonIcon = ({icon}: {icon: string}) => {
  const theme = useTheme();

  if (!icon) return null;

  const IconComponent = theme.icons?.[icon];

  return (
    <StyledIcon>
      <IconComponent data-iconkey={icon} />
    </StyledIcon>
  );
};

export const Footer = () => {
  return (
    <Box bg={'gray.900'} color={'gray.200'}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{base: 'column', md: 'row'}}
        spacing={4}
        justify={{base: 'center', md: 'space-between'}}
        align={{base: 'center', md: 'center'}}
      >
        <Logo />
        <Text>&copy; 2023 TJ Sokol Svinov. Všechna práva vyhrazena.</Text>
        <Stack direction={'row'} spacing={6}>
          <ButtonIcon icon={'facebook'} />
          <ButtonIcon icon={'instagram'} />
        </Stack>
        <Stack direction={'row'} spacing={6}>
          <ButtonIcon icon={'admin'} />
        </Stack>
      </Container>
    </Box>
  );
};

const StyledIcon = styled.div`
  display: inline-block;
  cursor: pointer;
  width: 1.2em;
  height: auto;
  color: ${(props) => props.theme.color.primary};
  filter: invert(84%) sepia(57%) saturate(3604%) hue-rotate(167deg) brightness(100%) contrast(101%);
`;

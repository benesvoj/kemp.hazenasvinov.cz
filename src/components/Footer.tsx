import React from 'react';
import {
  Box,
  Container,
  Stack,
  Text,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from '@chakra-ui/react';
import {Logo} from './Logo';
import {ReactNode} from 'react';
import {useTheme} from 'styled-components';

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const SocialIcon = ({icon}: {icon: string}) => {
  const theme = useTheme();

  if (!icon) return null;

  const IconComponent = theme.icons?.[icon];

  return <IconComponent data-iconkey={icon} />;
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
          <SocialButton label={'Facebook'} href={'#'}>
            <SocialIcon icon={'facebook'} />
          </SocialButton>
          <SocialButton label={'Instagram'} href={'#'}>
            <SocialIcon icon={'instagram'} />
          </SocialButton>
        </Stack>
        |
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Administrace'} href={'/admin'}>
            <SocialIcon icon={'admin'} />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
};

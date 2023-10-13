import {Heading, Text} from '@chakra-ui/react';

export const ZoneHeading = ({heading, text}: {heading: string; text?: string}) => {
  return (
    <>
      <Heading fontWeight={600} fontSize={{base: '2xl', sm: '4xl', md: '6xl'}} lineHeight={'110%'}>
        {heading}
      </Heading>
      {text ? <Text color={'gray.500'}>{text}</Text> : null}
    </>
  );
};

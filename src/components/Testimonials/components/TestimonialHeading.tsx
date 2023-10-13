import {ReactNode} from 'react';
import {Heading} from '@chakra-ui/react';

export const TestimonialHeading = ({children}: {children: ReactNode}) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

import {ReactNode} from 'react';
import {Text} from '@chakra-ui/react';

export const TestimonialText = ({children}: {children: ReactNode}) => {
  return (
    <Text textAlign={'center'} color={'gray.400'} fontSize={'sm'}>
      {children}
    </Text>
  );
};

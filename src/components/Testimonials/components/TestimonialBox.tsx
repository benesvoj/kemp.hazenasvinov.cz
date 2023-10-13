import {Box} from '@chakra-ui/react';
import {ReactNode} from 'react';
import {testimonialProps} from '../../../utils/testimonialList';
import {TestimonialAvatar} from './TestimonialAvatar';
import {TestimonialHeading} from './TestimonialHeading';
import {TestimonialText} from './TestimonialText';
import {TestimonialContent} from './TestimonialContent';

const Testimonial = ({children}: {children: ReactNode}) => {
  return <Box w={{base: 200, lg: 350}}>{children}</Box>;
};

export const TestimonialBox = (props: testimonialProps) => {
  return (
    <Testimonial>
      <TestimonialContent>
        <TestimonialHeading>{props.title}</TestimonialHeading>
        <TestimonialText>{props.description}</TestimonialText>
      </TestimonialContent>
      <TestimonialAvatar src={props.imageUrl} name={props.name} title={props.ageAndCamp} />
    </Testimonial>
  );
};

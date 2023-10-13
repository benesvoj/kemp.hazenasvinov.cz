import {Stack} from '@chakra-ui/react';
import {TestimonialBox} from './components/TestimonialBox';
import {getTestimonialList} from '../../utils/testimonialList';
import {ZoneHeading} from '../Zone/components/ZoneHeading';
import {textData} from '../../api/data';
import {Zone} from '../Zone/Zone';
import {useTheme} from 'styled-components';

export const Testimonials = () => {
  const testimonials = getTestimonialList();
  const theme = useTheme();

  return (
    <Zone bg={theme.background.secondary}>
      <Stack spacing={0} align={'center'}>
        <ZoneHeading heading={textData.testimonials.heading} />
      </Stack>
      <Stack direction={{base: 'column', md: 'row'}} gap={{base: 4, md: 4, lg: 10}}>
        {testimonials.map((testimonial) => {
          return (
            <TestimonialBox
              key={testimonial.id}
              id={testimonial.id}
              title={testimonial.title}
              description={testimonial.description}
              imageUrl={testimonial.imageUrl}
              name={testimonial.name}
              ageAndCamp={testimonial.ageAndCamp}
            />
          );
        })}
      </Stack>
    </Zone>
  );
};

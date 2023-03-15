import { Box, Container, Flex, Heading, Stack, useColorModeValue } from '@chakra-ui/react'
import { TestimonialElement } from './TestimonialElement'
import { getTestimonialList } from '../utils/testimonialList'

export const Testimonials = () => {
  const testimonials = getTestimonialList()

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12} h={'100vh'}>
        <Flex h={'100%'} w={'100%'} alignItems={'center'} justifyContent={'center'}>
          <Stack>
            <Stack spacing={0} align={'center'}>
              <Heading>Co o kempu říkájí Ti, kteří se zúčastnili?</Heading>
            </Stack>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={{ base: 10, md: 4, lg: 10 }}>
              {testimonials.map(testimonial => {
                return (
                  <TestimonialElement
                    key={testimonial.id}
                    id={testimonial.id}
                    title={testimonial.title}
                    description={testimonial.description}
                    imageUrl={testimonial.imageUrl}
                    name={testimonial.name}
                    ageAndCamp={testimonial.ageAndCamp}
                  />
                )
              })}
            </Stack>
          </Stack>
        </Flex>
      </Container>
    </Box>
  )
}

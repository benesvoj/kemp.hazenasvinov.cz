export type testimonialProps = {
  id: number
  title: string
  description: string
  imageUrl: string
  name: string
  ageAndCamp: string
}

const testimonialList = [
  {
    id: 1,
    title: 'Těším se, jak pojedu znova',
    description:
      'Nejvíce se mi na soustředění líbilo, že jsem tam měla spoustu kamarádů, všichni byli hodní a hráli jsme spoustu her a svačiny byly super. Také mě bavilo si hrát na cestovatele.',
    imageUrl:
      'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    name: 'Julča',
    ageAndCamp: '6let, oddílové soustředění',
  },
  {
    id: 2,
    title: 'Asi pojedeme znovu',
    description: 'Na soustředění se nám líbilo všechno.',
    imageUrl:
      'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    name: 'Verča a Markét',
    ageAndCamp: '10 let, celostátní soustředění',
  },
  {
    id: 3,
    title: 'Soustředění bylo dobré',
    description: 'Byla tam spousta her a zábavných věcí.',
    imageUrl:
      'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    name: 'Ríša',
    ageAndCamp: '12 let, oddílové soustředění',
  },
]

export const getTestimonialList = () => testimonialList

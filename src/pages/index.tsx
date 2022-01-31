import {
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import Header from '../components/Header';
import { TravelTypeCard } from '../components/TravelTypeCard';

const travelTypes = [
  {
    label: 'vida noturna',
    icon: '/images/cocktail.svg',
  },
  {
    label: 'praia',
    icon: '/images/surf.svg',
  },
  {
    label: 'moderno',
    icon: '/images/building.svg',
  },
  {
    label: 'clássico',
    icon: '/images/museum.svg',
  },
  {
    label: 'e mais',
    icon: '/images/earth.svg',
  },
];

const Home: NextPage = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <>
      <Header />
      <Box
        width='100%'
        backgroundImage='url(/images/bg-hero.png)'
        backgroundPosition='center'
        backgroundRepeat='no-repeat'
        backgroundSize='cover'
      >
        <Flex
          h={['163px', '335px']}
          w='100%'
          align='center'
          maxWidth={1200}
          mx='auto'
          px='4'
        >
          <Box maxWidth='600px'>
            <Heading
              as='h1'
              fontWeight='medium'
              fontSize={['xl', '4xl']}
              lineHeight={['30px', '54px']}
              color='gray.50'
            >
              5 Continentes,
              <br />
              infinitas possibilidades.
            </Heading>
            <Text
              color='gray.100'
              fontSize={['sm', 'xl']}
              lineHeight={['21px', '30px']}
              mt={['2', '5']}
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Box>

          <Box
            alignSelf='flex-end'
            marginLeft='auto'
            display={{ base: 'none', md: 'none', lg: 'block' }}
          >
            <Image
              src='/images/airplane.png'
              alt='Avião'
              transform='rotate(3deg)'
            />
          </Box>
        </Flex>
      </Box>

      <Flex
        maxWidth={1200}
        mx='auto'
        mt='20'
        px='4'
        alignItems='center'
        justifyContent='space-between'
      >
        {travelTypes.map((item) => (
          <TravelTypeCard
            key={item.label}
            imgSrc={item.icon}
            label={item.label}
          />
        ))}
      </Flex>
      <Divider
        width={90}
        colorScheme='gray.800'
        height='2px'
        mt='20'
        mx='auto'
      />
      <Box mt='14'>
        <Box maxWidth={839} mx='auto'>
          <Text
            textAlign='center'
            fontSize='4xl'
            lineHeight='54px'
            color='gray.800'
            fontWeight='500'
          >
            Vamos nessa? <br />
            Escolha seu continente
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default Home;

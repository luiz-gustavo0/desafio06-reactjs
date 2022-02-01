import type { NextPage } from 'next';
import { Box, Divider, Flex, Heading, Image, Text } from '@chakra-ui/react';

import Header from '../components/Header';
import TravelTypeCard from '../components/TravelTypeCard';
import Slide from '../components/Slide';
import { continents, travelTypes } from '../constants/data';

const Home: NextPage = () => {
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
        justifyContent={['center', 'space-between']}
        flexWrap='wrap'
        gap='3'
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
            fontSize={['xl', '4xl']}
            lineHeight={['30px', '54px']}
            color='gray.800'
            fontWeight='500'
          >
            Vamos nessa? <br />
            Escolha seu continente
          </Text>
        </Box>
      </Box>
      <Box maxWidth={1200} mx='auto' mt='14' mb='10' px='4'>
        <Slide continents={continents} />
      </Box>
    </>
  );
};

export default Home;

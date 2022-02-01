import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import CardCountry from '../../components/CardCountry';
import Header from '../../components/Header';
import { countries } from '../../constants/data';

function Continent() {
  return (
    <>
      <Header />

      <Box
        h={['150px', '500px']}
        bgImage='url(/images/banner.png)'
        bgPosition='center'
        bgSize='cover'
        bgRepeat='no-repeat'
      >
        <Flex
          maxWidth={1200}
          mx='auto'
          px='4'
          py='8'
          height='100%'
          align={['center', 'flex-end']}
          justify={['center', 'flex-start']}
        >
          <Heading
            fontWeight='600'
            color='gray.50'
            lineHeight={['42px', '72px']}
            fontSize={['28px', '5xl']}
          >
            Europa
          </Heading>
        </Flex>
      </Box>
      <Box maxWidth={1200} mx='auto' px='4'>
        <Flex
          mt={['6', '20']}
          align='center'
          justifyContent='space-between'
          flexWrap='wrap'
          gap='4'
        >
          <Box maxWidth={['100%', '100%', '600px']}>
            <Text
              fontSize={['sm', '2xl']}
              lineHeight={['5', '9']}
              textAlign='justify'
            >
              A Europa é, por convenção, um dos seis continentes do mundo.
              Compreendendo a península ocidental da Eurásia, a Europa
              geralmente divide-se da Ásia a leste pela divisória de águas dos
              montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a
              sudeste.
            </Text>
          </Box>

          <Flex align='center' gap='42px'>
            <Box h='100px'>
              <Text
                fontSize={['2xl', '5xl']}
                lineHeight={['9', '72px']}
                color='yellow'
                fontWeight='600'
                textAlign='center'
              >
                50
              </Text>
              <Text
                fontSize={['lg', '2xl']}
                lineHeight={['27px', '9']}
                fontWeight='600'
                textAlign='center'
              >
                países
              </Text>
            </Box>
            <Box h='100px'>
              <Text
                fontSize={['2xl', '5xl']}
                lineHeight={['9', '72px']}
                color='yellow'
                fontWeight='600'
                textAlign='center'
              >
                60
              </Text>
              <Text
                fontSize={['lg', '2xl']}
                lineHeight={['27px', '9']}
                fontWeight='600'
                textAlign='center'
              >
                línguas
              </Text>
            </Box>
            <Box h='100px'>
              <Text
                fontSize={['2xl', '5xl']}
                lineHeight={['9', '72px']}
                color='yellow'
                fontWeight='600'
                textAlign='center'
              >
                27
              </Text>
              <Text
                fontSize={['lg', '2xl']}
                lineHeight={['27px', '9']}
                fontWeight='600'
                textAlign='center'
              >
                cidades +100
              </Text>
            </Box>
          </Flex>
        </Flex>

        <Box mt={['8', '20']}>
          <Heading
            fontSize={['2xl', '4xl']}
            lineHeight={['9', '54px']}
            fontWeight='600'
          >
            Cidades +100
          </Heading>
          <Grid
            mt='10'
            gridTemplateColumns='repeat(auto-fill, minmax(256px, 1fr))'
            gridGap='8'
            placeItems='center'
          >
            {countries.map((country) => (
              <GridItem key={country.name}>
                <CardCountry
                  name={country.name}
                  capital={country.capital}
                  image={country.image}
                  flag={country.flag}
                />
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default Continent;

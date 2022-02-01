import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper';
import { Flex, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Continent {
  name: string;
  description: string;
  image: string;
}

interface ContinentProps {
  continents: Continent[];
}

const Slide = ({ continents }: ContinentProps) => {
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      // className='mySwiper'
    >
      {continents.map((continent) => (
        <SwiperSlide key={continent.name} color='yellow'>
          <Grid gridTemplateColumns='1fr' height={424}>
            <GridItem gridColumn={1 / -1} gridRow={1 / -1}>
              <Image
                src={continent.image}
                alt={continent.name}
                objectFit='cover'
                height='100%'
              />
            </GridItem>
            <GridItem gridColumn={1 / -1} gridRow={1 / -1}>
              <Link href={`/continent/europa`}>
                <a>
                  <Flex
                    w='100%'
                    height='100%'
                    alignItems='center'
                    justifyContent='center'
                    flexDir='column'
                  >
                    <Heading
                      fontSize={['2xl', '5xl']}
                      lineHeight={['9', '72px']}
                      color='gray.50'
                      fontWeight='bold'
                    >
                      {continent.name}
                    </Heading>
                    <Text
                      color='gray.100'
                      fontSize={['sm', '2xl']}
                      lineHeight={['21px', '9']}
                      textAlign='center'
                    >
                      {continent.description}
                    </Text>
                  </Flex>
                </a>
              </Link>
            </GridItem>
          </Grid>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slide;

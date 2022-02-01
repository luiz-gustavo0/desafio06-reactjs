import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

interface CardCountryProps {
  name: string;
  capital: string;
  image: string;
  flag: string;
}

const CardCountry = ({ name, capital, image, flag }: CardCountryProps) => {
  return (
    <Box maxWidth={256} height={280}>
      <Image
        src={image}
        alt={`Foto de ${name}`}
        objectFit='cover'
        width='100%'
        height={174}
      />
      <Flex
        border='1px'
        borderColor='yellow'
        py='5'
        px='6'
        borderTop='none'
        width='100%'
        borderBottomLeftRadius='4px'
        borderBottomRightRadius='4px'
        align='center'
        justify='space-between'
      >
        <Box>
          <Heading
            as='h4'
            fontSize='xl'
            lineHeight='25px'
            fontWeight='600'
            mb='3'
          >
            {capital}
          </Heading>
          <Text fontSize='md' lineHeight='26px' color='gray.500'>
            {name}
          </Text>
        </Box>
        <Image src={flag} alt={`Bandira de ${capital}`} w={30} h={30} />
      </Flex>
    </Box>
  );
};

export default CardCountry;

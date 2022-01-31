import { Box, Button, Flex, Image, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const { asPath } = useRouter();

  const isHomePage = asPath === '/' ? true : false;

  return (
    <Flex
      as='header'
      alignItems='center'
      h='100px'
      maxWidth={1200}
      mx='auto'
      px='4'
    >
      {!isHomePage && (
        <NextLink href='/'>
          <Link background='gray.50'>
            <Image
              src='/images/arrow-left.svg'
              alt='Voltar'
              width='32px'
              height='32px'
            />
          </Link>
        </NextLink>
      )}
      <Box flex='1' display='flex' justifyContent='center'>
        <Image
          src='/images/logo-world-trip.svg'
          alt='Logo'
          h='46px'
          w='184px'
        />
      </Box>
    </Flex>
  );
};

export default Header;

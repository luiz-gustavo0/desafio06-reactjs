import { Box, Image, Text } from '@chakra-ui/react';

interface TraveTypeCardProps {
  label: string;
  imgSrc: string;
}

export const TravelTypeCard = ({ label, imgSrc }: TraveTypeCardProps) => {
  return (
    <Box
      h={145}
      display='flex'
      flexDir='column'
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Image src={imgSrc} alt='image' width={85} height={85} />
      <Text
        fontSize='2xl'
        lineHeight='9'
        fontWeight='600'
        mt='1.5'
        color='gray.800'
      >
        {label}
      </Text>
    </Box>
  );
};

import { Box, Image, Tag, Text } from '@chakra-ui/react';

interface TraveTypeCardProps {
  label: string;
  imgSrc: string;
}

const TravelTypeCard = ({ label, imgSrc }: TraveTypeCardProps) => {
  return (
    <Box
      h={['auto', 'auto', '145px']}
      display='flex'
      flexDir={['row', 'row', 'column']}
      alignItems='center'
      justifyContent={['flex-start', 'center']}
      gap='2'
    >
      <Image
        src={imgSrc}
        alt='image'
        width={85}
        height={85}
        display={['none', 'none', 'block']}
      />
      <Box
        display={['block', 'block', 'none']}
        bgColor='yellow'
        width='8px'
        height='8px'
        rounded='full'
      ></Box>
      <Text
        fontSize={['lg', 'lg', '2xl']}
        lineHeight={['27px', '27px', '9']}
        fontWeight='600'
        mt='1.5'
        color='gray.800'
      >
        {label}
      </Text>
    </Box>
  );
};

export default TravelTypeCard;

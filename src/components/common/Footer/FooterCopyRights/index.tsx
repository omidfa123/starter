import { Box, Center, Grid } from '@chakra-ui/react';
import { InstagramIcon, LinkedinIcon, WhatsappIcon } from '../../Icons';

export default function FooterCopyRights() {
  const bgColor =
    location.pathname !== '/users/login'
      ? ['primary.500', 'black']
      : ['secondary.500', 'white'];
  return (
    <Box bgColor={['transparent', 'transparent', bgColor[0]]}>
      <Grid
        gridTemplateColumns="max-content max-content"
        gridTemplateRows={['20px 40px', '40px']}
        alignItems="center"
        justifyItems="center"
        maxW="1280px"
        mx="auto"
        px={[0, 0, 32]}
        rowGap={[2, 0]}
        columnGap={[0, 0, 2]}
      >
        <Center
          as="p"
          gridRow={['2', '2', '1']}
          gridColumn={['-1', '-1', '1']}
          textStyle={['regular11', 'regular16']}
          textAlign="center"
          bgColor={bgColor[0]}
          w="full"
          h={['full', 10]}
          color={bgColor[1]}
        >
          تمامی حقوق مادی و معنوی این وبسایت برای آترامارت محفوظ می باشد
        </Center>
        <Center
          gridColumn={'-1'}
          rounded="16px 16px 0px 0px"
          justifySelf={['center', 'center', 'end']}
          bgColor={['black', 'black', 'transparent']}
          color={['white', 'white', bgColor[1]]}
          px={[6, 8, 0]}
          gap={[3, 4, 6]}
          py={[2]}
        >
          <LinkedinIcon boxSize={[5, 6]} />
          <WhatsappIcon boxSize={[5, 6]} />
          <InstagramIcon boxSize={[5, 6]} />
        </Center>
      </Grid>
    </Box>
  );
}

import { Box, Center, Grid } from '@chakra-ui/react';
import { InstagramIcon, LinkedinIcon, WhatsappIcon } from '../../Icons';

export default function FooterCopyRights() {
  return (
    <Box bgColor={['transparent', 'transparent', 'primary.500']}>
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
          bgColor={'primary.500'}
          w="full"
          h={['full', 10]}
        >
          تمامی حقوق مادی و معنوی این وبسایت برای آترامارت محفوظ می باشد
        </Center>
        <Center
          gridColumn={'-1'}
          rounded="16px 16px 0px 0px"
          justifySelf={['center', 'center', 'end']}
          bgColor={['black', 'black', 'transparent']}
          color={['white', 'white', 'black']}
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

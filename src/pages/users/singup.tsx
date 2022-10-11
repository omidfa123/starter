import { Box, Button, Grid, Heading } from '@chakra-ui/react';
import { RegisterVector } from 'components/common/Icons';
import { PinFrom, SingUpForm } from 'components/custom/Forms/SingUpForm';
import NextLink from 'components/custom/NextLink';
import type { NextPage } from 'next';
import { useState } from 'react';

const SingUp: NextPage = () => {
  const [pinInput, setPinInput] = useState(false);
  return (
    <Box
      as="main"
      layerStyle="container"
      pb={[24, 14]}
      pt={['24px', '58px', '68px']}
      px={['22px', '78px', 24, 32]}
    >
      <Grid
        as="section"
        border={['none', '6px solid white']}
        rounded={40}
        position="relative"
        gridTemplateColumns={{ base: '1fr', md: 'repeat(4 , 1fr)  ' }}
        gridTemplateAreas={{
          base: `
       "vector"
       "heading"
       "forms "
       `,
          md: `
      "heading    heading  vector  vector"
      "forms      forms    vector  vector"
     `,
        }}
        rowGap={[8, 9, 0]}
        p={[0, '15px', '22px 42px 22px 28px ']}
      >
        <Heading
          as="h1"
          textAlign="center"
          alignSelf="end"
          fontSize={[24, 32, 24]}
          gridArea="heading"
        >
          {pinInput ? 'کد تایید را وارد کنید' : 'مثل آب خوردن ثبت نام کن!'}
        </Heading>
        {pinInput ? (
          <PinFrom pinInput={setPinInput} pin={pinInput} />
        ) : (
          <SingUpForm pinInput={setPinInput} />
        )}

        <RegisterVector gridArea="vector" />
        <NextLink href="/users/login">
          <Button
            variant="smallNav"
            bgColor="secondary.500"
            _hover={{ bgColor: 'secondary.600' }}
            color="white"
            position="absolute"
            left={[6, 8, 10, 12]}
            top={[2, 4, 6, 8]}
          >
            ورود
          </Button>
        </NextLink>
      </Grid>
    </Box>
  );
};

export default SingUp;

import { Box, Button, Grid, Heading } from '@chakra-ui/react';
import { LoginVector, RegisterVector } from 'components/common/Icons/Vectors';
import LoginForm from 'components/custom/Forms/LoginForm';
import { PinFrom, SingUpForm } from 'components/custom/Forms/SingUpForm';
import type { NextPage } from 'next';
import { useState } from 'react';

const Login: NextPage = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [login, setLogin] = useState(false);

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
        gridTemplateColumns={{ base: '1fr', md: 'repeat(3 , 2fr) 3fr  ' }}
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
        columnGap={'42px'}
        p={[0, '15px', '22px 42px 22px 28px ']}
      >
        {login ? (
          <>
            <Heading
              as="h1"
              textAlign="center"
              fontSize={[24, 32, 24]}
              gridArea="heading"
              alignSelf="end"
              mb={8}
            >
              ورود به حساب کاربری
            </Heading>
            <LoginForm />
            <LoginVector gridArea="vector" />
            <Button
              variant="smallNav"
              color="black"
              _hover={{ bgColor: 'primary.600' }}
              position="absolute"
              left={[6, 8, 10, 12]}
              top={[2, 8, 10]}
              onClick={() => setLogin(false)}
            >
              ثبت نام
            </Button>
          </>
        ) : (
          <>
            <Heading
              as="h1"
              textAlign="center"
              alignSelf="end"
              fontSize={[24, 32, 24]}
              gridArea="heading"
            >
              {!!phoneNumber
                ? 'کد تایید را وارد کنید'
                : 'مثل آب خوردن ثبت نام کن!'}
            </Heading>
            {!!phoneNumber ? (
              <PinFrom phoneNumber={phoneNumber} />
            ) : (
              <SingUpForm setPhoneNumber={setPhoneNumber} />
            )}
            <RegisterVector gridArea="vector" />
            <Button
              variant="smallNav"
              bgColor="secondary.500"
              _hover={{ bgColor: 'secondary.600' }}
              color="white"
              position="absolute"
              left={[6, 8, 10, 12]}
              top={[2, 4, 6, 8]}
              onClick={() => alert('need to validate first fix me !!!')}
            >
              ورود
            </Button>
          </>
        )}
      </Grid>
    </Box>
  );
};

export default Login;

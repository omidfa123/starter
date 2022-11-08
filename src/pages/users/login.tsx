import { Box, Button, Grid, Heading, Highlight } from '@chakra-ui/react';
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
            {!!phoneNumber ? (
              <>
                <Heading
                  as="h1"
                  textAlign="center"
                  alignSelf="end"
                  fontSize={[24, 32, 24]}
                  gridArea="heading"
                >
                  کد تایید را وارد کنید
                </Heading>
                <PinFrom phoneNumber={phoneNumber} />
              </>
            ) : (
              <>
                <Heading
                  as="h1"
                  textAlign="center"
                  alignSelf="end"
                  fontSize={[24, 32, 24]}
                  display="flex"
                  gridArea="heading"
                  alignItems="center"
                  justifyContent="center"
                  gap="8px"
                >
                  <Highlight
                    query={'شماره'}
                    styles={{
                      display: 'inline-flex',
                      gap: '8px',
                      alignItems: 'center',
                      color: 'primary.500',
                      '&::before': {
                        content: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='34' height='34' fill='none' viewBox='0 0 34 34'%3E%3Crect width='32.11' height='32.105' x='.796' y='1.211' fill='%239773FF' stroke='%2315121D' stroke-width='1.2' rx='8.6'/%3E%3Cg clip-path='url(%23a)'%3E%3Cpath fill='%23fff' d='M16.185 9.93a.667.667 0 0 0-.667-.666A6.674 6.674 0 0 0 8.85 15.93a.667.667 0 1 0 1.334 0 5.34 5.34 0 0 1 5.333-5.333.666.666 0 0 0 .667-.667Zm-.667 3.334a2.667 2.667 0 0 0-2.667 2.666.667.667 0 1 1-1.333 0 4.004 4.004 0 0 1 4-4 .667.667 0 0 1 0 1.334Zm-6.062 7.16a2.067 2.067 0 0 0 0 2.918l.607.7c5.46 5.226 18.746-8.057 13.6-13.534l-.767-.667a2.054 2.054 0 0 0-2.885.027c-.02.02-1.256 1.625-1.256 1.625a2.067 2.067 0 0 0 .005 2.855l.772.97a8.521 8.521 0 0 1-4.62 4.63l-.977-.776a2.067 2.067 0 0 0-2.854-.004s-1.604 1.234-1.625 1.255Zm.917.968s1.596-1.227 1.616-1.248a.734.734 0 0 1 1.033 0c.018.02 1.363 1.09 1.363 1.09a.666.666 0 0 0 .652.102 10.005 10.005 0 0 0 5.88-5.872.667.667 0 0 0-.096-.667s-1.071-1.345-1.09-1.363a.733.733 0 0 1 0-1.032c.022-.02 1.249-1.617 1.249-1.617a.733.733 0 0 1 1.007.026l.766.667C26.515 16 15.001 26.876 11.037 23.13l-.607-.7a.747.747 0 0 1-.057-1.038Z'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath fill='%23fff' d='M24.851 9.264h-16v16h16z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E")`,
                        filter: 'drop-shadow(2px 3px 0px #15121D)',
                      },
                    }}
                  >
                    فقط با یه شماره وارد شو!
                  </Highlight>
                </Heading>
                <SingUpForm setPhoneNumber={setPhoneNumber} />
              </>
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

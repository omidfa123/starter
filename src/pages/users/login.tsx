import { Box, Button, Grid, Heading, Link } from '@chakra-ui/react';
import { LoginVector } from 'components/common/Icons';
import LoginForm from 'components/custom/LoginForm';
import NextLink from 'components/custom/NextLink';
import type { NextPage } from 'next';

const Login: NextPage = () => {
  return (
    <Box
      as="main"
      layerStyle="container"
      pb={[24, 14]}
      pt={['24px', '58px', '68px']}
      px={['22px', '42px', '78px', 32]}
    >
      <Grid
        as="section"
        pos="relative"
        border={['none', '6px solid white']}
        rounded={40}
        gridTemplateColumns={{ base: '1fr', md: 'repeat(4 , 1fr)  ' }}
        gridTemplateRows={{ base: 'auto', md: '64px max-content' }}
        gridTemplateAreas={{
          base: `
          "vector"
          "heading"
          "forms "
          `,
          md: `
         "heading    heading  vector vector"
         "forms      forms    vector vector"
        `,
        }}
        rowGap={[8, 9, 0]}
        p={[0, '15px', '22px 42px 22px 28px ']}
      >
        <Heading
          as="h1"
          textAlign="center"
          fontSize={[24, 32, 24]}
          gridArea="heading"
          pl={{ base: 'none', md: '42px' }}
        >
          ورود به حساب کاربری
        </Heading>
        <LoginForm />
        <LoginVector gridArea="vector" />
        <NextLink href="/users/singup">
          <Button
            variant="smallNav"
            color="black"
            _hover={{ bgColor: 'primary.600' }}
            position="absolute"
            left={[6, 8, 10, 12]}
            top={[2, 8, 10]}
          >
            ثبت نام
          </Button>
        </NextLink>
      </Grid>
    </Box>
  );
};

export default Login;

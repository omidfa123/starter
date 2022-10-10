import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Heading,
  Link,
} from '@chakra-ui/react';
import { RegisterVector } from 'components/common/Icons';
import CheckBoxField from 'components/custom/Fields/checkBoxField';
import TextField from 'components/custom/Fields/TextField';
import NextLink from 'components/custom/NextLink';
import { Formik } from 'formik';
import type { NextPage } from 'next';
import * as Yup from 'yup';

const Login: NextPage = () => {
  const mobileReg =
    /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/gi;
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
        columnGap="42px"
        p={[0, '15px', '22px 42px 22px 28px ']}
      >
        <Heading
          as="h1"
          textAlign="center"
          fontSize={[24, 32, 24]}
          alignSelf="center"
          gridArea="heading"
        >
          ورود به حساب کاربری
        </Heading>
        <Formik
          initialValues={{ phone: '', password: '', security: '' }}
          validationSchema={Yup.object({
            phone: Yup.string()
              .required('لطفا این قسمت را خالی نگذارید')
              .matches(mobileReg, 'شماره تلفن نادرست است'),
            password: Yup.string()
              .required('لطفا این قسمت را خالی نگذارید')
              .min(4, 'لطفا حداقل چهار کاراکتر وارد کنید')
              .max(16, 'حداکثر شانزده کاراکتر'),
            security: Yup.number().required('لطفا این قسمت را  خالی نگذارید'),
          })}
          onSubmit={(values, action) => {
            alert(JSON.stringify(values, null, 2));
            action.resetForm();
          }}
        >
          {formik => (
            <Flex
              as="form"
              gridArea="forms"
              flexDir="column"
              gap={6}
              px={[9, 14, 0]}
              onSubmit={formik.handleSubmit as any}
            >
              <TextField
                name="phone"
                placeholder="شماره تلفن همراه"
                type="tel"
              />
              <TextField
                name="password"
                placeholder="رمز عبور"
                type="password"
              />
              <Center>
                <TextField
                  name="security"
                  placeholder="کد امنیتی"
                  type="number"
                />
                <Center w="185px" bgColor="#fff">
                  ۱۲۳۴
                </Center>
              </Center>
              <CheckBoxField id="rememberMe" name="rememberMe">
                مرا بخاطر بسپار
              </CheckBoxField>
              <Button
                colorScheme="secondary"
                shadow="0px 0px 8px rgba(151, 115, 255, 0.4)"
                h="42px"
                type="submit"
              >
                ورود
              </Button>
            </Flex>
          )}
        </Formik>
        <NextLink href="/forget-password">
          <Link fontSize={13} w="max-content" px={[9, 14, 0]}>
            رمز عبور خود را فراموش کرده اید؟
          </Link>
        </NextLink>
        <RegisterVector gridArea="vector" />
        <NextLink href="/users/singup">
          <Button
            position="absolute"
            left={[6, 8, 10, 12]}
            top={[2, 8, 10]}
            w={[12, 14, 16]}
            fontSize={[12, 14, 16]}
            color="black"
          >
            ثبت نام
          </Button>
        </NextLink>
      </Grid>
    </Box>
  );
};

export default Login;

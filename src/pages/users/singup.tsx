import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Heading,
  PinInput,
  PinInputField,
  Text,
} from '@chakra-ui/react';
import { RegisterVector } from 'components/common/Icons';
import TextField from 'components/custom/Fields/TextField';
import NextLink from 'components/custom/NextLink';
import Timer from 'components/custom/Timer';
import { Formik } from 'formik';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';

const SingUp: NextPage = () => {
  const [pinInput, setPinInput] = useState(false);
  const [timer, setTimer] = useState(new Date());
  useEffect(() => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 10);
    setTimer(time);
  }, [pinInput]);
  const mobileReg =
    /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/gi;
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
          <Center
            flexDir="column"
            gap={10}
            gridArea="forms"
            as={'form'}
            px={[9, 14, '42px']}
            pt={[5, 4]}
          >
            <Text color="description">
              حساب کاربری با شماره ۰۹۹۹۹۹۹۹۹ وجود ندارد ، برای ساخت حساب جدید کد
              تایید برای این شماره ارسال گردید
            </Text>
            <Center
              gap={6}
              dir="ltr"
              sx={{ fontFeatureSettings: "'ss02' , 'ss03'" }}
            >
              <PinInput
                otp
                autoFocus
                variant="flushed"
                focusBorderColor="transparent"
                onComplete={vlaue => setPinInput(!pinInput)}
              >
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
            </Center>
            <Timer
              expiryTimeStamp={timer}
              onExpire={() => {
                const time = new Date();
                time.setSeconds(time.getSeconds() + 10);
                setTimer(time);
              }}
            />
            <Button
              shadow="0px 0px 8px rgba(255, 168, 38, 0.4)"
              h="42px"
              w="full"
              color="black"
              type="submit"
            >
              ثبت نام
            </Button>
          </Center>
        ) : (
          <Formik
            initialValues={{ phone: '' }}
            validationSchema={Yup.object({
              phone: Yup.string()
                .required('لطفا این قسمت را خالی نگذارید')
                .matches(mobileReg, 'شماره تلفن نادرست است'),
            })}
            onSubmit={(values, action) => {
              alert(JSON.stringify(values, null, 2));
              setPinInput(!pinInput);
              action.resetForm();
            }}
          >
            {formik => (
              <Flex
                as="form"
                gridArea="forms"
                flexDir="column"
                onSubmit={formik.handleSubmit as any}
                gap={formik.errors.phone ? 10 : 16}
                px={[9, 14, '42px']}
                pt={[5, 8]}
              >
                <TextField
                  name="phone"
                  placeholder="شماره تلفن همراه"
                  type="tel"
                />
                <Button
                  shadow="0px 0px 8px rgba(255, 168, 38, 0.4)"
                  h="42px"
                  color="black"
                  type="submit"
                >
                  ارسال کد
                </Button>
              </Flex>
            )}
          </Formik>
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

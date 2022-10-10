import {
  Box,
  Button,
  Center,
  FormControl,
  Grid,
  Heading,
  Input,
  PinInput,
  PinInputField,
  Text,
} from '@chakra-ui/react';
import { RegisterVector } from 'components/common/Icons';
import NextLink from 'components/custom/NextLink';
import Timer from 'components/custom/Timer';
import type { NextPage } from 'next';
import { useState } from 'react';

const SingUp: NextPage = () => {
  const [pinInput, setPinInput] = useState(false);

  const time = new Date();
  time.setSeconds(time.getSeconds() + 10);
  const [timer, setTimer] = useState(time);
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
        <FormControl
          gridArea="forms"
          display="flex"
          flexDir="column"
          gap={pinInput ? 10 : 16}
          px={[9, 14, '42px']}
          pt={[5, `${pinInput ? 4 : 8}`]}
        >
          {pinInput ? (
            <Center flexDir="column" gap={10}>
              <Text color="description">
                حساب کاربری با شماره ۰۹۹۹۹۹۹۹۹ وجود ندارد ، برای ساخت حساب جدید
                کد تایید برای این شماره ارسال گردید
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
            </Center>
          ) : (
            <Input placeholder="شماره تلفن همراه" type="tel" />
          )}
          <Button
            shadow="0px 0px 8px rgba(255, 168, 38, 0.4)"
            h="42px"
            color="black"
            onClick={() => setPinInput(prev => (prev ? false : true))}
          >
            {pinInput ? 'ثبت نام' : 'ارسال کد'}
          </Button>
        </FormControl>

        <RegisterVector gridArea="vector" />
        <NextLink href="/users/login">
          <Button
            position="absolute"
            colorScheme="secondary"
            left={[6, 8, 10, 12]}
            top={[2, 4, 6, 8]}
            w={[1, 12, 14, 16]}
            fontSize={[12, 14, 16]}
          >
            ورود
          </Button>
        </NextLink>
      </Grid>
    </Box>
  );
};

export default SingUp;

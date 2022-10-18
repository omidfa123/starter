import {
  Button,
  Center,
  Flex,
  FormErrorMessage,
  PinInput,
  PinInputField,
  Text,
} from '@chakra-ui/react';
import { Formik } from 'formik';
import { useEffect, useState } from 'react';
import { mobileRegex } from 'utils/mobileRegex';
import * as Yup from 'yup';
import TextField from '../Fields/TextField';
import Timer from '../Timer';

export function PinFrom({ pin, pinInput }: { pin: boolean; pinInput: any }) {
  const [timer, setTimer] = useState(new Date());
  useEffect(() => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 10);
    setTimer(time);
  }, [pin]);
  return (
    <Center
      flexDir="column"
      gap={10}
      gridArea="forms"
      as={'form'}
      px={[9, 14, '42px']}
      pt={[5, 4]}
      onSubmit={() => pinInput((prev: any) => !prev)}
    >
      <Text color="description">
        حساب کاربری با شماره ۰۹۹۹۹۹۹۹۹ وجود ندارد ، برای ساخت حساب جدید کد تایید
        برای این شماره ارسال گردید
      </Text>
      <Center gap={6} dir="ltr" sx={{ fontFeatureSettings: "'ss02' , 'ss03'" }}>
        <PinInput
          otp
          autoFocus
          variant="flushed"
          focusBorderColor="transparent"
          onComplete={vlaue => pinInput((prev: any) => !prev)}
        >
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
        <FormErrorMessage>نمی تواند خالی باشد</FormErrorMessage>
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
  );
}

export function SingUpForm({ pinInput }: any) {
  return (
    <Formik
      initialValues={{ phone: '' }}
      validationSchema={Yup.object({
        phone: Yup.string()
          .required('لطفا این قسمت را خالی نگذارید')
          .matches(mobileRegex(), 'شماره تلفن نادرست است'),
      })}
      onSubmit={(values, action) => {
        alert(JSON.stringify(values, null, 2));
        pinInput((prev: any) => !prev);
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
            maxLength={11}
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
  );
}

import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  Input,
  PinInput,
  PinInputField,
  Text,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { mobileRegex } from 'utils/formRegexs';
import Timer from '../Timer';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation } from 'react-query';
import { axiosInstance } from 'libs/axios/axiosInstance';
import Router from 'next/router';
import { setCookie } from 'nookies';

type Input = {
  mobile: string;
};

const postPhoneNumber = async (phoneNumber: string) => {
  const { data } = await axiosInstance.post('/auth/register', {
    mobile: phoneNumber,
  });

  console.log(data);
  return data;
};

const postVerifyCode = async ({
  phoneNumber,
  code,
}: {
  phoneNumber: string;
  code: string;
}) => {
  const { data } = await axiosInstance.post('/auth/verify', {
    mobile: phoneNumber,
    verify_code: code,
  });
  console.log(data);
  return data;
};

export function PinFrom({ phoneNumber }: { phoneNumber: string }) {
  const {
    data = [],
    mutate,
    isLoading,
    isError,
    isSuccess,
  } = useMutation(postVerifyCode);
  const toast = useToast();
  useEffect(() => {
    if (isSuccess && data.status === 'success') {
      setCookie(null, 'access_token', data.token, {
        maxAge: 4000,
        secure: true,
        sameSite: true,
      });
      setCookie(null, 'user_info', JSON.stringify(data.user), {
        maxAge: 4000,
        secure: true,
        sameSite: true,
      });
      Router.push('/users/welcome');
    }
    if (isError || data.status === 'error') {
      toast({
        title: 'خطایی رخ داد',
        description:
          'هنگام ورود شما مشکلی به وجود  آمد لطفا دوباره امتحان کنید',
        status: 'error',
        duration: 9000,
      });
    }
  }, [isSuccess, data, isError, toast]);

  const [timer, setTimer] = useState(new Date());
  useEffect(() => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 10);
    setTimer(time);
  }, [phoneNumber]);
  return (
    <Box gridArea="forms" as={'form'} pt={[5, 4]}>
      <Text color="description" textAlign="center" mb={10}>
        حساب کاربری با شماره{' '}
        {`۰${(+phoneNumber).toLocaleString('fa-IR').replace(/\٬/g, '')}`} وجود
        ندارد ، برای ساخت حساب جدید کد تایید برای این شماره ارسال گردید
      </Text>
      <Center
        gap={6}
        dir="ltr"
        sx={{ fontFeatureSettings: "'ss02' , 'ss03'" }}
        mb={8}
      >
        <PinInput
          otp
          autoFocus
          variant="flushed"
          focusBorderColor="transparent"
          onComplete={value => mutate({ phoneNumber, code: value })}
        >
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
          {/* <PinInputField /> */}
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
        h="42px"
        w="full"
        color="black"
        type="submit"
        mt={8}
        mb={5}
        isLoading={isLoading}
      >
        ثبت نام
      </Button>
      <Box border="2px inset #15121D" w="70px" rounded={4} mb={5} mx="auto" />
      <Button
        h="42px"
        w="48%"
        colorScheme="secondary"
        mx="auto"
        display="block"
      >
        ورود با نام کاربری
      </Button>
    </Box>
  );
}

export function SingUpForm({
  setPhoneNumber,
}: {
  setPhoneNumber: Dispatch<SetStateAction<string>>;
}) {
  const {
    data = [],
    mutate,
    isLoading,
    isError,
    isSuccess,
  } = useMutation(postPhoneNumber);
  const toast = useToast();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<Input>({
    mode: 'onTouched',
    defaultValues: { mobile: '' },
  });

  const onSubmit: SubmitHandler<Input> = data => {
    mutate(data.mobile);
  };
  useEffect(() => {
    if (isSuccess && data.status === 'success') {
      toast({
        title: 'ارسال شد',
        description: 'پیامک با موفقیت ارسال شد لطفا تلفن همراه خود را چک کنید',
        status: 'success',
        duration: 9000,
      });
      setPhoneNumber(getValues('mobile'));
    }
    if (isError || data.status === 'error') {
      toast({
        title: 'خطایی رخ داد',
        description:
          'هنگام ارسال پیام به شماره شما مشکلی به وجود امد لطفا دوباره امتحان کنید',
        status: 'error',
        duration: 9000,
      });
    }
  }, [isSuccess, toast, getValues, setPhoneNumber, data, isError]);

  return (
    <VStack
      as="form"
      gridArea="forms"
      flexDir="column"
      onSubmit={handleSubmit(onSubmit)}
      spacing={errors.mobile ? 14 : 16}
      pt={[5, 8]}
    >
      <FormControl isInvalid={!!errors.mobile}>
        <Input
          _autofill={{
            WebkitBoxShadow: '0 0 0px 30px white  inset',
          }}
          variant="white-filled"
          type="tel"
          placeholder="شماره تماس خود را وارد کنید"
          maxLength={11}
          {...register('mobile', {
            required: 'لطفا این قسمت را خالی نگذارید',
            pattern: {
              value: mobileRegex(),
              message: 'شماره وارد شده درست نیست',
            },
          })}
        />
        <FormErrorMessage>
          {errors.mobile && errors.mobile.message}
        </FormErrorMessage>
      </FormControl>
      <Button
        isLoading={isLoading}
        h="42px"
        color="black"
        type="submit"
        w="100%"
      >
        ارسال کد
      </Button>
    </VStack>
  );
}

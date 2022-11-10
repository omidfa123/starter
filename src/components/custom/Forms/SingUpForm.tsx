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
import { useMutation } from '@tanstack/react-query';
import { axiosInstance } from 'libs/axios/axiosInstance';
import Router from 'next/router';
import { setCookie } from 'nookies';

type Input = {
  mobile: string;
};

const postPhoneNumber = async (phoneNumber: string) => {
  const { data } = await axiosInstance.post('/auth/verify', {
    mobile: phoneNumber,
  });

  return data;
};

const postVerifyCode = async ({
  phoneNumber,
  type,
  password,
  code,
}: {
  phoneNumber: string;
  type: string;
  code?: string;
  password?: string;
}) => {
  const { data } = await axiosInstance.post(
    '/auth/login',
    type === 'verify'
      ? {
          type,
          mobile: phoneNumber,
          code,
        }
      : {
          type,
          mobile: phoneNumber,
          password,
        }
  );
  return data;
};

export function PinFrom({
  phoneNumber,
  setLogin,
}: {
  phoneNumber: any;
  setLogin: Dispatch<SetStateAction<boolean>>;
}) {
  const toast = useToast();
  const {
    data = [],
    mutate,
    isLoading,
    isError,
  } = useMutation({
    mutationFn: postVerifyCode,
    onMutate: () => {
      Router.prefetch('/profile');
      Router.prefetch('/users/welcome');
    },
    onSuccess: data => {
      const path = data.user_status === 'exist' ? '/profile' : '/users/welcome';
      if (data.status === 'success') {
        Router.replace(path);
        setCookie(null, 'access_token', data.access_token, {
          maxAge: 259200,
          secure: true,
          sameSite: true,
          path: '/',
        });
        setCookie(null, 'user_info', JSON.stringify(data.user), {
          maxAge: 259200,
          secure: true,
          sameSite: true,
          path: '/',
        });
      }
    },
    onError: error => {
      toast({
        title: 'خطایی رخ داد',
        description:
          'هنگام ورود شما مشکلی به وجود  آمد لطفا دوباره امتحان کنید',
        status: 'error',
        duration: 9000,
      });
    },
  });

  const [timer, setTimer] = useState(new Date());
  useEffect(() => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 10);
    setTimer(time);
  }, [phoneNumber]);

  return (
    <Box gridArea="forms" as={'form'} pt={[5, 4]}>
      <Text color="description" textAlign="center" mb={10}>
        {phoneNumber.user_status == 'new'
          ? ` حساب کاربری با شماره ${phoneNumber.mobile} وجود ندارد ، برای ساخت حساب
        جدید کد تایید برای این شماره ارسال گردید`
          : `کاربر گرامی با شماره ${phoneNumber.mobile} کد ورود به حساب کاربری برای شما ارسال شد`}
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
          onComplete={value =>
            mutate({
              phoneNumber: phoneNumber.mobile,
              code: value,
              type: 'verify',
            })
          }
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
        {phoneNumber.user_status == 'new' ? 'ثبت نام' : 'ورود'}
      </Button>
      {phoneNumber.user_status !== 'new' && (
        <>
          <Box
            border="2px inset #15121D"
            w="70px"
            rounded={4}
            mb={5}
            mx="auto"
          />
          <Button
            h="42px"
            w="48%"
            colorScheme="secondary"
            mx="auto"
            display="block"
            onClick={() => {
              setLogin(true);
            }}
          >
            ورود با رمز عبور
          </Button>
        </>
      )}
    </Box>
  );
}

export function SingUpForm({ setPhoneNumber }: { setPhoneNumber: any }) {
  const toast = useToast();
  const {
    data = [],
    mutate,
    isLoading,
    isError,
  } = useMutation({
    mutationFn: postPhoneNumber,
    onSuccess: data => {
      if (data.status === 'success') {
        toast({
          title: 'ارسال شد',
          description:
            'پیامک با موفقیت ارسال شد لطفا تلفن همراه خود را چک کنید',
          status: 'success',
          duration: 9000,
        });
        setPhoneNumber({
          mobile: getValues('mobile'),
          user_status: data?.user_status,
        });
      } else undefined;
    },
    onError: data => {
      if (isError) {
        toast({
          title: 'خطایی رخ داد',
          description:
            'هنگام ذخیره کردن تغیرات مشکلی پیش آمد لطفا ورودی ها را برسی کنید',
          status: 'error',
          duration: 9000,
        });
      } else undefined;
    },
  });

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
    const p2e = (s: any) =>
      s.replace(/[۰-۹]/g, (d: any) => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));
    mutate(p2e(data.mobile));
  };

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

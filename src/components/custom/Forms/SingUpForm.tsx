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
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';

type Input = {
  mobile: string;
};
interface IProps {
  pin: boolean;
  pinInput: Dispatch<SetStateAction<boolean>>;
}
export function PinFrom({ pin, pinInput }: IProps) {
  const [timer, setTimer] = useState(new Date());
  useEffect(() => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 10);
    setTimer(time);
  }, [pin]);
  return (
    <Box
      gridArea="forms"
      as={'form'}
      pt={[5, 4]}
      onSubmit={() => pinInput((prev: any) => !prev)}
    >
      <Text color="description" textAlign="center" mb={10}>
        حساب کاربری با شماره ۰۹۹۹۹۹۹۹۹ وجود ندارد ، برای ساخت حساب جدید کد تایید
        برای این شماره ارسال گردید
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
      <Button h="42px" w="full" color="black" type="submit" mt={8} mb={5}>
        ثبت نام
      </Button>
      <Box border="2px inset #15121D" w="70px" rounded={4} mb={5} mx="auto" />
      <Button
        h="42px"
        w="48%"
        type="submit"
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
  pinInput,
}: {
  pinInput: Dispatch<SetStateAction<boolean>>;
}) {
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Input>({
    mode: 'onTouched',
    defaultValues: { mobile: '' },
  });

  const onSubmit: SubmitHandler<Input> = data => {
    return new Promise<void>(resolve => {
      setTimeout(() => {
        alert(JSON.stringify(data, null, 2));
        toast({
          title: 'ارسال شد',
          description:
            'پیامک با موفقیت ارسال شد لطفا تلفن همراه خود را چک کنید',
          status: 'success',
          duration: 9000,
        });
        pinInput((prev: any) => !prev);
        resolve();
      }, 3000);
    });
  };
  const onError: SubmitErrorHandler<Input> = error => {
    return new Promise<void>(resolve => {
      setTimeout(() => {
        toast({
          title: 'خطایی رخ داد',
          description:
            'هنگام ارسال پیام به شماره شما مشکلی به وجود امد لطفا دوباره امتحان کنید',
          status: 'error',
          duration: 9000,
        });
        resolve();
      }, 1000);
    });
  };
  return (
    <VStack
      as="form"
      gridArea="forms"
      flexDir="column"
      onSubmit={handleSubmit(onSubmit, onError)}
      spacing={errors.mobile ? 14 : 16}
      pt={[5, 8]}
    >
      <FormControl isInvalid={!!errors.mobile}>
        <Input
          _autofill={{
            WebkitBoxShadow: '0 0 0px 30px rgba(151, 115, 255, 0.25)  inset',
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
        isLoading={isSubmitting}
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

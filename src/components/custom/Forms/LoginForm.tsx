import {
  Button,
  Center,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
  Link,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import { mobileRegex } from 'utils/formRegexs';
import NextLink from '../NextLink';

type Inputs = {
  mobile: string;
  password: string;
  code: string;
  rememberMe: boolean;
};
const defaultValues = {
  mobile: '',
  password: '',
  code: '',
  rememberMe: true,
};

export default function LoginForm() {
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    mode: 'onTouched',
    defaultValues,
  });

  const onSubmit: SubmitHandler<Inputs> = data => {
    return new Promise<void>(resolve => {
      setTimeout(() => {
        alert(JSON.stringify(data, null, 2));

        toast({
          title: 'ورود',
          description: 'شما با موفقیت وارد حساب کاربری شده اید',
          status: 'success',
          duration: 9000,
        });

        resolve();
      }, 3000);
    });
  };
  const onError: SubmitErrorHandler<Inputs> = error => {
    return new Promise<void>(resolve => {
      setTimeout(() => {
        toast({
          title: 'خطایی رخ داد',
          description: 'هنگام ورود مشکلی پیش آمد لطفا ورودی ها را برسی کنید',
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
      onSubmit={handleSubmit(onSubmit, onError)}
      spacing={6}
      alignItems="start"
    >
      <FormControl isInvalid={!!errors.mobile}>
        <Input
          _autofill={{
            WebkitBoxShadow: '0 0 0px 30px rgba(255, 168, 38, 0.4)  inset',
          }}
          variant="white-filled"
          type="tel"
          placeholder="شماره تلفن همراه"
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
      <FormControl isInvalid={!!errors.password}>
        <Input
          _autofill={{
            WebkitBoxShadow: '0 0 0px 30px rgba(255, 168, 38, 0.25)  inset',
          }}
          variant="white-filled"
          type="password"
          placeholder="کلمه عبور"
          {...register('password', {
            required: 'لطفا این قسمت را خالی نگذارید',
            minLength: { value: 8, message: 'لطفا حداقل هشت حرف وارد کنید' },
          })}
        />
        <FormErrorMessage>
          {errors.password && errors.password.message}
        </FormErrorMessage>
      </FormControl>
      <Center w="100%" gap={8}>
        <FormControl isInvalid={!!errors.code}>
          <Input
            _autofill={{
              WebkitBoxShadow: '0 0 0px 30px rgba(255, 168, 38, 0.25)  inset',
            }}
            variant="white-filled"
            placeholder="کد امنیتی را وارد کنید"
            {...register('code', {
              required: 'لطفا این قسمت را خالی نگذارید',
            })}
          />
          <FormErrorMessage>
            {errors.code && errors.code.message}
          </FormErrorMessage>
        </FormControl>
        <Center bg="white" h="42px" rounded={12} w="100%">
          6642
        </Center>
      </Center>
      <NextLink href="/forget-password">
        <Link fontSize={13} w="max-content">
          رمز عبور خود را فراموش کرده اید؟
        </Link>
      </NextLink>
      <Flex flex={1} align="start">
        <Checkbox {...register('rememberMe')} colorScheme="secondary">
          مرا بخاطر بسپار
        </Checkbox>
      </Flex>
      <Button
        isLoading={isSubmitting}
        colorScheme="secondary"
        maxH="42px"
        type="submit"
        w="full"
      >
        ورود
      </Button>
    </VStack>
  );
}

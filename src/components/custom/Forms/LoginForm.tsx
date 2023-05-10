import { Button, useToast, VStack } from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';
import { axiosInstance } from 'libs/axios/axiosInstance';
import { useRouter } from 'next/router';
import { setCookie } from 'nookies';
import { useForm, SubmitHandler } from 'react-hook-form';
import { PasswordField } from './PasswordField';

type Inputs = {
  password: string;
};
const defaultValues = {
  password: '',
};

const postPassword = async ({
  password,
  mobile,
}: {
  password: string;
  mobile: string;
}) => {
  const { data } = await axiosInstance.post('/auth/login', {
    type: 'static',
    mobile,
    password,
  });
  return data;
};

export default function LoginForm({ phoneNumber }: { phoneNumber: any }) {
  const toast = useToast();
  const router = useRouter();
  const { mutate, isLoading } = useMutation({
    mutationFn: postPassword,
    onMutate: () => {
      router.prefetch('/profile');
    },
    onSuccess: data => {
      if (data.status === 'success') {
        router.replace('/profile');
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
      if (!toast.isActive('wrongPassword')) {
        toast({
          title: 'رمز ورودی اشتباه است',
          description:
            'رمز شما اشتباه است لطفا اگر رمز خود رو فراموش کردید با شماره تلفن وارد شوید',
          status: 'error',
          duration: 3000,
          isClosable: true,
          id: 'wrongPassword',
        });
      }
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    mode: 'onTouched',
    defaultValues,
  });

  const onSubmit: SubmitHandler<Inputs> = data => {
    mutate({ ...data, mobile: phoneNumber.mobile });
  };
  return (
    <VStack
      as="form"
      gridArea="forms"
      onSubmit={handleSubmit(onSubmit)}
      spacing={'64px'}
      alignItems="start"
    >
      <PasswordField
        isInvalid={!!errors.password}
        placeholder="کلمه عبور"
        register={register}
        name="password"
        pattern={{
          required: 'لطفا این قسمت را خالی نگذارید',
          minLength: { value: 8, message: 'لطفا حداقل هشت حرف وارد کنید' },
        }}
        variant={'white-filled'}
        errorMessage={errors?.password?.message}
      />
      <Button
        isLoading={isLoading}
        colorScheme="secondary"
        h="42px"
        type="submit"
        w="full"
      >
        ورود
      </Button>
    </VStack>
  );
}

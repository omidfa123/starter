import { Button, useToast, VStack } from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';
import { axiosInstance } from 'libs/axios/axiosInstance';
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
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
    mode: 'static',
    mobile,
    password,
  });
};

export default function LoginForm({ phoneNumber }: { phoneNumber: any }) {
  const { mutate } = useMutation({
    mutationFn: postPassword,
    onSuccess: () => {},
  });
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
    console.log({ ...data, mobile: phoneNumber.mobile });
    return new Promise<void>(resolve => {
      setTimeout(() => {
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
        isLoading={isSubmitting}
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

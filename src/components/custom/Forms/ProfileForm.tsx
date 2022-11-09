import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  useToast,
} from '@chakra-ui/react';
import { emailRegex, mobileRegex } from 'utils/formRegexs';
import { telephoneRegex } from 'utils/formRegexs';
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';

import { userInfoInputs } from 'types';
import { InputWithLabel } from './Inputs';
import { PasswordField } from './PasswordField';
import { axiosInstance } from 'libs/axios/axiosInstance';
import { useUser } from 'components/hooks/useUser';
import { useEffect } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { queryKeys } from 'libs/react-query/constants';

const defaultValues = {
  mobile: '',
  first_name: '',
  last_name: '',
  telephone: '',
  gender: '',
  email: '',
  national_code: '',
  password: '',
};
const required = 'لطفا این قسمت را خالی نگذارید';
const putUserInfo = async ({ token, userInfo }: any) => {
  const { data } = await axiosInstance.put(
    `/user/user/${userInfo.id}`,
    userInfo,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return data;
};

export default function ProfileForm({
  user,
  token,
}: {
  user: any;
  token: string;
}) {
  const queryClient = useQueryClient();
  const { data } = useUser(token, user.id);
  const {
    data: mut,
    mutate,
    isLoading,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: putUserInfo,
    // onSuccess: () =>
    //   queryClient.invalidateQueries({ queryKey: [queryKeys.userInfo] }),
  });
  const toast = useToast();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<userInfoInputs>({
    mode: 'onTouched',
    defaultValues,
  });
  useEffect(() => {
    if (data?.user?.detail) {
      reset(data.user.detail);
    }
  }, [data, reset]);
  const onSubmit: SubmitHandler<userInfoInputs> = data => {
    mutate({ token, userInfo: { ...data, id: user.id } });
  };
  const onError: SubmitErrorHandler<userInfoInputs> = error => {
    return new Promise<void>(resolve => {
      setTimeout(() => {
        toast({
          title: 'خطایی رخ داد',
          description:
            'هنگام ذخیره کردن تغیرات مشکلی پیش آمد لطفا ورودی ها را برسی کنید',
          status: 'error',
          duration: 9000,
        });
        resolve();
      }, 1000);
    });
  };
  console.log(mut);
  useEffect(() => {
    if (isSuccess && mut?.status === 'update') {
      toast({
        title: 'تغیرات با موفقیت ثبت شد',
        description: 'تمام تغیرات شما با موفقیت در سرورهای ما ذخیره شد',
        status: 'success',
        duration: 9000,
      });
    }
    if (isError || mut?.status === 'error') {
      toast({
        title: 'خطایی رخ داد',
        description:
          'هنگام ذخیره کردن تغیرات مشکلی پیش آمد لطفا ورودی ها را برسی کنید',
        status: 'error',
        duration: 9000,
      });
    }
  }, [isSuccess, isError, toast, mut]);

  return (
    <Grid
      as="form"
      onSubmit={handleSubmit(onSubmit, onError)}
      gridTemplateColumns="repeat(3 , 4fr) 1fr "
      gridTemplateAreas={`
      "name    lname  gender  ."
      "mobile  telePhone   .     . "
      "email    national    .     . "
      "password  repeat          btn   btn" 
    `}
      columnGap={10}
      rowGap={4}
      pt="56px"
      pb={8}
      px={10}
    >
      <InputWithLabel
        gridArea="name"
        isInvalid={!!errors.first_name}
        placeholder="نام :"
        register={register}
        name="first_name"
        required={true}
        errorMessage={errors?.first_name?.message}
      />
      <InputWithLabel
        gridArea="lname"
        isInvalid={!!errors.last_name}
        placeholder="نام خانوادگی :"
        register={register}
        name="last_name"
        required={true}
        errorMessage={errors?.last_name?.message}
      />
      <InputWithLabel
        gridArea="mobile"
        isInvalid={!!errors.mobile}
        placeholder="شماره موبایل :"
        register={register}
        name="mobile"
        required={true}
        errorMessage={errors?.mobile?.message}
        type="tel"
        maxLength={11}
        pattern={{
          value: mobileRegex(),
          message: 'شماره وارد شده درست نیست',
        }}
      />
      <InputWithLabel
        gridArea="telePhone"
        isInvalid={!!errors.telephone}
        placeholder="شماره تلفن ثابت :"
        register={register}
        name="telephone"
        required={true}
        errorMessage={errors?.telephone?.message}
        type="tel"
        maxLength={11}
        pattern={{
          value: telephoneRegex(),
          message: 'شماره وارد شده درست نیست',
        }}
      />

      <InputWithLabel
        gridArea="national"
        isInvalid={!!errors.national_code}
        placeholder="کد ملی :"
        register={register}
        name="national_code"
        required={true}
        errorMessage={errors?.national_code?.message}
        pattern={{
          value: /^[0-9]{10}$/g,
          message: 'کد ملی نامعتبر است',
        }}
      />
      <InputWithLabel
        gridArea="email"
        isInvalid={!!errors.email}
        placeholder="ایمیل :"
        register={register}
        name="email"
        errorMessage={errors?.email?.message}
        type="email"
        pattern={{
          value: emailRegex(),
          message: 'ایمیل نادرست است',
        }}
        required={false}
      />
      <PasswordField
        gridArea="password"
        isInvalid={!!errors.password}
        label="رمز عبور :"
        name="password"
        register={register}
        required
        pattern={{
          minLength: { value: 8, message: 'لطفا حداقل هشت حرف وارد کنید' },
        }}
        errorMessage={errors?.password?.message}
      />
      <PasswordField
        gridArea="repeat"
        isInvalid={!!errors.password_confirmation}
        label="تکرار رمز عبور :"
        name="password_confirmation"
        register={register}
        pattern={{
          validate: (val: string) => {
            if (watch('password') != val) {
              return 'رمز عبور و تکرار آن برابر نیستند';
            }
          },
        }}
        errorMessage={errors?.password_confirmation?.message}
        pb={6}
      />
      <FormControl gridArea="gender" isInvalid={!!errors.gender}>
        <FormLabel>
          جنسیت :
          <Box
            as="span"
            marginInlineStart={1}
            color="red.500"
            role="presentation"
            aria-hidden="true"
          >
            *
          </Box>
        </FormLabel>
        <RadioGroup
          defaultValue="man"
          display="flex"
          gap={6}
          colorScheme="secondary"
          ringColor="transparent"
        >
          <Radio
            value="man"
            {...register('gender', {
              required: required,
            })}
          >
            مرد
          </Radio>
          <Radio
            value="women"
            {...register('gender', {
              required: required,
            })}
          >
            زن
          </Radio>
        </RadioGroup>
        <FormErrorMessage>
          {errors.gender && errors.gender.message}
        </FormErrorMessage>
      </FormControl>
      <Button
        gridArea="btn"
        type="submit"
        w="166px"
        h="46px"
        isLoading={isLoading}
        alignSelf="end"
        justifySelf="end"
      >
        اعمال تغیرات
      </Button>
    </Grid>
  );
}



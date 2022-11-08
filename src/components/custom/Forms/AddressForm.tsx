import {
  Button,
  FormControl,
  FormLabel,
  Grid,
  useToast,
} from '@chakra-ui/react';
import { telephoneRegex, mobileRegex, postalCodeRegex } from 'utils/formRegexs';
import {
  useForm,
  SubmitHandler,
  SubmitErrorHandler,
  useFormContext,
} from 'react-hook-form';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { AddressInputs } from 'types';
import Selects from '../Select';
import { InputInsideLabel } from './Inputs';
import { AddressFormRadio } from '../CustomRadio/AddressFormRadio';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { axiosInstance } from 'libs/axios/axiosInstance';
import { queryKeys } from 'libs/react-query/constants';

const postAddress = async ({
  addressInfo,
  token,
  id,
}: {
  addressInfo: any;
  token: string;
  id?: string;
}) => {
  const { data } = id
    ? await axiosInstance.put(`/user/address/${id} `, addressInfo, {
        headers: { Authorization: `Bearer ${token}` },
      })
    : await axiosInstance.post(`/user/address/ `, addressInfo, {
        headers: { Authorization: `Bearer ${token}` },
      });
  return data;
};

const defaultValues = {
  mobile: '',
  name: '',
  telephone: '',
  city_id: { value: '', label: '' },
  post_code: '',
  state: '',
  street: '',
  is_default: '1',
};

export default function AddressForm({
  user,
  token,
  setIsUpdate,
  isUpdate,
}: {
  user: any;
  token: string;
  setIsUpdate: Dispatch<SetStateAction<undefined>>;
  isUpdate: any;
}) {
  console.log(isUpdate);

  const queryClient = useQueryClient();
  const {
    data: mut,
    mutate,
    isLoading,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: postAddress,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.userInfo] }),
        setIsUpdate(undefined);
      reset(defaultValues);
    },
  });
  const toast = useToast();
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useFormContext<AddressInputs>();
  const onSubmit: SubmitHandler<AddressInputs> = data => {
    console.log(data);
    const addressInfo = {
      ...data,
      user_id: user.id,
      city_id: data.city_id.value,
      is_default: data.is_default === '1' ? data.is_default : undefined,
    };
    isUpdate
      ? mutate({ addressInfo, token, id: isUpdate })
      : mutate({ addressInfo, token });
  };
  const onError: SubmitErrorHandler<AddressInputs> = error => {
    toast({
      title: 'خطایی رخ داد',
      description:
        'هنگام اضافه کردن آدرس شما مشکلی رخ داد لطفا ورودی ها را کنترل کنید',
      status: 'error',
      duration: 9000,
    });
  };
  useEffect(() => {
    if (isSuccess && mut?.status === 'success') {
      reset(defaultValues),
        toast({
          title: 'تغیرات با موفقیت ثبت شد',
          description: 'تمام تغیرات شما با موفقیت در سرور های ما ذخیره شد',
          status: 'success',
          duration: 9000,
        });
    }
    if (isError || mut?.status === 'error') {
      toast({
        title: 'خطایی رخ داد',
        description:
          'هنگام اضافه کردن آدرس شما مشکلی رخ داد لطفا ورودی ها را کنترل کنید',
        status: 'error',
        duration: 9000,
      });
    }
  }, [isError, isSuccess, mut, reset, toast]);

  return (
    <Grid
      as="form"
      h="max-content"
      onSubmit={handleSubmit(onSubmit, onError)}
      gridTemplateColumns="repeat( 2, 1fr)"
      gridTemplateAreas={`
      "name      mobile"
      "state     city_id"
      "street    street"
      "post      telephone"
      "is_default is_default" 
      "......... btn"
    `}
      columnGap="22px"
      rowGap={6}
      p="24px 16px 16px 16px"
      bgColor="#F7F4FF"
      rounded={32}
    >
      <Selects control={control} />
      <InputInsideLabel
        gridArea="name"
        isInvalid={!!errors.name}
        register={register}
        name={'name'}
        placeholder="نام و نام خانوادگی"
        right="120px"
        errorMessage={errors?.name?.message}
      />
      <InputInsideLabel
        gridArea="mobile"
        isInvalid={!!errors.mobile}
        register={register}
        name={'mobile'}
        placeholder="شماره موبایل"
        right="92px"
        errorMessage={errors?.mobile?.message}
        type="tel"
        maxLength={11}
        pattern={{
          value: mobileRegex(),
          message: 'شماره وارد شده درست نیست',
        }}
      />
      <InputInsideLabel
        gridArea="street"
        isInvalid={!!errors.street}
        register={register}
        name="street"
        placeholder="آدرس محل سکونت"
        right="128px"
        errorMessage={errors?.street?.message}
      />
      <InputInsideLabel
        gridArea="telephone"
        isInvalid={!!errors.telephone}
        isolation="isolate"
        register={register}
        name="telephone"
        placeholder="شماره تلفن ثابت"
        right="114px"
        errorMessage={errors?.telephone?.message}
        type="tel"
        maxLength={11}
        pattern={{
          value: telephoneRegex(),
          message: 'شماره وارد شده درست نیست',
        }}
      />
      <InputInsideLabel
        gridArea="post"
        isInvalid={!!errors.post_code}
        isolation="isolate"
        register={register}
        name="post_code"
        placeholder="کد پستی"
        right="68px"
        errorMessage={errors?.post_code?.message}
        pattern={{
          value: postalCodeRegex(),
          message: 'کد پستی نامعتبر است',
        }}
      />

      <FormControl
        display="flex"
        alignItems="center"
        gridArea="is_default"
        isInvalid={!!errors.is_default}
        color="black"
        my={3}
      >
        <FormLabel fontSize="14px" fontWeight="400" mb="0">
          آدرس به صورت پیش فرض :
        </FormLabel>
        <AddressFormRadio control={control} name="is_default" />
      </FormControl>
      <Button
        gridArea="btn"
        type="submit"
        w="166px"
        h="46px"
        isLoading={isLoading}
        alignSelf="end"
        justifySelf="end"
        colorScheme="secondary"
      >
        {isUpdate ? 'ویرایش آدرس' : 'ثبت آدرس'}
      </Button>
    </Grid>
  );
} 

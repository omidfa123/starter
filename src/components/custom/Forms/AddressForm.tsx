import {
  Button,
  Checkbox,
  CheckboxGroup,
  FormControl,
  FormLabel,
  Grid,
  useRadio,
  useToast,
  chakra,
  Center,
  Box,
  useRadioGroup,
  HStack,
} from '@chakra-ui/react';
import { telephoneRegex, mobileRegex, postalCodeRegex } from 'utils/formRegexs';
import {
  useForm,
  SubmitHandler,
  SubmitErrorHandler,
  useController,
} from 'react-hook-form';
import { forwardRef, useEffect } from 'react';
import { AddressInputs } from 'types';
import Selects from '../Select';
import { InputValidate } from './InputValidate';
import { TikIcon } from 'components/common/Icons';
import { AddressFormRadio } from '../CustomRadio/AddressFormRadio';

const defaultValues = {
  mobile: '',
  name: '',
  telephone: '',
  city: '',
  post_code: '',
  state: '',
  street: '',
  isDefault: '',
};

export default function ProfileForm() {
  const toast = useToast();
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<AddressInputs>({
    mode: 'onTouched',
    defaultValues,
  });
  const onSubmit: SubmitHandler<AddressInputs> = data => {
    return new Promise<void>(resolve => {
      setTimeout(() => {
        alert(JSON.stringify(data, null, 2));
        resolve();
      }, 3000);
    });
  };
  const onError: SubmitErrorHandler<AddressInputs> = error => {
    return new Promise<void>(resolve => {
      setTimeout(() => {
        toast({
          title: 'خطایی رخ داد',
          description:
            'هنگام اضافه کردن آدرس شما مشکلی رخ داد لطفا ورودی ها را کنترل کنید',
          status: 'error',
          duration: 9000,
        });
        resolve();
      }, 1000);
    });
  };
  useEffect(() => {
    isSubmitSuccessful &&
      (reset(defaultValues),
      toast({
        title: 'تغیرات با موفقیت ثبت شد',
        description: 'تمام تغیرات شما با موفقیت در سرور های ما ذخیره شد',
        status: 'success',
        duration: 9000,
      }));
  }, [isSubmitSuccessful, reset, toast]);

  return (
    <Grid
      as="form"
      h="max-content"
      onSubmit={handleSubmit(onSubmit, onError)}
      gridTemplateColumns="repeat( 2, 1fr)"
      gridTemplateAreas={`
      "name      mobile"
      "street    street"
      "state     city"
      "post      telephone"
      "isDefault isDefault" 
      "......... btn"
    `}
      columnGap="22px"
      rowGap={6}
      p="24px 16px 16px 16px"
      bgColor="#F7F4FF"
      rounded={32}
    >
      <Selects control={control} />
      <InputValidate
        gridArea="name"
        isInvalid={!!errors.name}
        register={register}
        name={'name'}
        placeholder="نام و نام خانوادگی"
        right="120px"
        errorMessage={errors?.name?.message}
      />
      <InputValidate
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
      <InputValidate
        gridArea="street"
        isInvalid={!!errors.street}
        register={register}
        name="street"
        placeholder="آدرس محل سکونت"
        right="128px"
        errorMessage={errors?.street?.message}
      />
      <InputValidate
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
      <InputValidate
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
        gridArea="isDefault"
        isInvalid={!!errors.isDefault}
        color="black"
        my={3}
      >
        <FormLabel fontSize="14px" fontWeight="400" mb="0">
          آدرس به صورت پیش فرض :
        </FormLabel>
        <AddressFormRadio control={control} name="isDefault" />
      </FormControl>
      <Button
        gridArea="btn"
        type="submit"
        w="166px"
        h="46px"
        isLoading={isSubmitting}
        alignSelf="end"
        justifySelf="end"
        colorScheme="secondary"
      >
        ثبت آدرس
      </Button>
    </Grid>
  );
}

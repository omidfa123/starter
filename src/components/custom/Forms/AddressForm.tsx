import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  Input,
  Radio,
  RadioGroup,
  useToast,
} from '@chakra-ui/react';
import { telephoneRegex, mobileRegex, postalCodeRegex } from 'utils/formRegexs';
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import { useEffect } from 'react';
import Select from '../Select';

type Inputs = {
  mobile: string;
  name: string;
  telephone: string;
  post_code: string;
  city: string;
  state: string;
  street: string;
  isDefault: boolean;
};
const required = 'لطفا این قسمت را خالی نگذارید';
const defaultValues = {
  mobile: '',
  name: '',
  telephone: '',
  city: '',
  post_code: '',
  state: '',
  street: '',
  isDefault: true,
};
export default function ProfileForm() {
  const toast = useToast();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    control,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<Inputs>({
    mode: 'onTouched',
    defaultValues,
  });

  const onSubmit: SubmitHandler<Inputs> = data => {
    return new Promise<void>(resolve => {
      setTimeout(() => {
        alert(JSON.stringify(data, null, 2));
        resolve();
      }, 3000);
    });
  };
  const onError: SubmitErrorHandler<Inputs> = error => {
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
      <FormControl gridArea="name" isInvalid={!!errors.name}>
        <Input
          sx={{ '&:not(:placeholder-shown) + span': { display: 'none' } }}
          {...register('name', { required: required })}
          placeholder="نام و نام خانوادگی"
          variant="white-filled"
          _placeholder={{ color: 'text' }}
        />
        <Box
          as="span"
          marginInlineStart={1}
          color="red.500"
          role="presentation"
          aria-hidden="true"
          pos="absolute"
          zIndex={2}
          top="10px"
          right="120px"
        >
          *
        </Box>
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl gridArea="mobile" isInvalid={!!errors.mobile}>
        <Input
          type="tel"
          maxLength={11}
          {...register('mobile', {
            required: required,
            pattern: {
              value: mobileRegex(),
              message: 'شماره وارد شده درست نیست',
            },
          })}
          placeholder="شماره موبایل"
          variant="white-filled"
          _placeholder={{ color: 'text' }}
          sx={{ '&:not(:placeholder-shown) + span': { display: 'none' } }}
        />
        <Box
          as="span"
          marginInlineStart={1}
          color="red.500"
          role="presentation"
          aria-hidden="true"
          pos="absolute"
          zIndex={2}
          top="10px"
          right="92px"
        >
          *
        </Box>
        <FormErrorMessage>
          {errors.mobile && errors.mobile.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl gridArea="street" isInvalid={!!errors.street}>
        <Input
          sx={{ '&:not(:placeholder-shown) + span': { display: 'none' } }}
          {...register('street', { required: required })}
          placeholder="آدرس محل سکونت"
          variant="white-filled"
          _placeholder={{ color: 'text' }}
        />
        <Box
          as="span"
          marginInlineStart={1}
          color="red.500"
          role="presentation"
          aria-hidden="true"
          pos="absolute"
          zIndex={2}
          top="10px"
          right="128px"
        >
          *
        </Box>
        <FormErrorMessage>
          {errors.street && errors.street.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl gridArea="city" isInvalid={!!errors.city}>
        <Select
          register={register}
          setValue={setValue}
          control={control}
          inputName="city"
          placeholder="شهرستان"
          right="67px"
        />

        <FormErrorMessage>
          {errors.city && errors.city.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl gridArea="state" isInvalid={!!errors.state}>
        <Select
          register={register}
          setValue={setValue}
          control={control}
          inputName="state"
          placeholder="استان"
          right="47px"
        />

        <FormErrorMessage>
          {errors.state && errors.state.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl gridArea="telephone" isInvalid={!!errors.telephone}>
        <Input
          maxLength={11}
          type="tel"
          {...register('telephone', {
            required: required,
            pattern: {
              value: telephoneRegex(),
              message: 'شماره وارد شده درست نیست',
            },
          })}
          placeholder="شماره تلفن ثابت"
          variant="white-filled"
          _placeholder={{ color: 'text' }}
          sx={{ '&:not(:placeholder-shown) + span': { display: 'none' } }}
        />
        <Box
          as="span"
          marginInlineStart={1}
          color="red.500"
          role="presentation"
          aria-hidden="true"
          pos="absolute"
          zIndex={2}
          top="10px"
          right="112px"
        >
          *
        </Box>
        <FormErrorMessage>
          {errors.telephone && errors.telephone.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl gridArea="post" isInvalid={!!errors.post_code}>
        <Input
          {...register('post_code', {
            required: required,
            pattern: {
              value: postalCodeRegex(),
              message: 'کد پستی نامعتبر است',
            },
          })}
          placeholder="کد پستی"
          variant="white-filled"
          _placeholder={{ color: 'text' }}
          sx={{ '&:not(:placeholder-shown) + span': { display: 'none' } }}
        />
        <Box
          as="span"
          marginInlineStart={1}
          color="red.500"
          role="presentation"
          aria-hidden="true"
          pos="absolute"
          zIndex={2}
          top="10px"
          right="68px"
        >
          *
        </Box>
        <FormErrorMessage>
          {errors.post_code && errors.post_code.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl
        display="flex"
        alignItems="center"
        gridArea="isDefault"
        isInvalid={!!errors.isDefault}
        color="black"
        my={3}
      >
        <FormLabel fontSize="14px" fontWeight="400">
          آدرس به صورت پیش فرض :
        </FormLabel>
        <CheckboxGroup isNative>
          <Checkbox
            {...register('isDefault')}
            colorScheme="secondary"
            borderWidth="0"
          >
            بله
          </Checkbox>
          <Checkbox {...register('isDefault')} colorScheme="secondary" mr={4}>
            خیر
          </Checkbox>
        </CheckboxGroup>
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

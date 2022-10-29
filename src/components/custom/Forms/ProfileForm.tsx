import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  Input,
  Radio,
  RadioGroup,
  useToast,
} from '@chakra-ui/react';
import { emailRegex, mobileRegex } from 'utils/formRegexs';
import { telephoneRegex } from 'utils/formRegexs';
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import { useEffect } from 'react';
import { useRegions } from 'components/hooks/useRegions';

type Inputs = {
  mobile: string;
  first_name: string;
  last_name: string;
  telephone: string;
  gender: string;
  email: string;
  national_code: string;
  password: string;
  password_confirmation: string;
};
const required = 'لطفا این قسمت را خالی نگذارید';
const defaultValues = {
  mobile: '',
  first_name: '',
  last_name: '',
  telephone: '',
  gender: '',
  email: '',
  national_code: '',
  password: '',
  password_confirmation: '',
};
export default function ProfileForm() {
  useRegions();
  const toast = useToast();
  const {
    register,
    handleSubmit,
    watch,
    reset,
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
            'هنگام ذخیره کردن تغیرات مشکلی پیش آمد لطفا ورودی ها را برسی کنید',
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
      <FormControl gridArea="name" isInvalid={!!errors.first_name}>
        <FormLabel>
          نام :
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
        <Input {...register('first_name', { required: required })} />
        <FormErrorMessage>
          {errors.first_name && errors.first_name.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl gridArea="lname" isInvalid={!!errors.last_name}>
        <FormLabel>
          نام خانوادگی :
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
        <Input {...register('last_name', { required: required })} />
        <FormErrorMessage>
          {errors.last_name && errors.last_name.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl gridArea="mobile" isInvalid={!!errors.mobile}>
        <FormLabel>
          شماره موبایل :
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
        />
        <FormErrorMessage>
          {errors.mobile && errors.mobile.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl gridArea="telePhone" isInvalid={!!errors.telephone}>
        <FormLabel>
          شماره تلفن ثابت :
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
        />
        <FormErrorMessage>
          {errors.telephone && errors.telephone.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl gridArea="national" isInvalid={!!errors.national_code}>
        <FormLabel>
          کد ملی :
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
        <Input
          {...register('national_code', {
            required: required,
            pattern: {
              value: /^[0-9]{10}$/g,
              message: 'کد ملی نامعتبر است',
            },
          })}
        />
        <FormErrorMessage>
          {errors.national_code && errors.national_code.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl gridArea="email" isInvalid={!!errors.email}>
        <FormLabel>
          ایمیل :
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
        <Input
          type="email"
          {...register('email', {
            required: required,
            pattern: {
              value: emailRegex(),
              message: 'ایمیل نادرست است',
            },
          })}
        />
        <FormErrorMessage>
          {errors.email && errors.email.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl gridArea="password" isInvalid={!!errors.password}>
        <FormLabel>
          رمز عبور :
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
        <Input
          {...register('password', {
            required: required,
            minLength: { value: 8, message: 'لطفا حداقل هشت حرف وارد کنید' },
          })}
        />
        <FormErrorMessage>
          {errors.password && errors.password.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl
        gridArea="repeat"
        isInvalid={!!errors.password_confirmation}
        pb={6}
      >
        <FormLabel>
          تکرار رمز عبور :
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
        <Input
          type="password"
          {...register('password_confirmation', {
            required: required,
            validate: (val: string) => {
              if (watch('password') != val) {
                return 'رمز عبور و تکرار آن برابر نیستند';
              }
            },
          })}
        />
        <FormErrorMessage>
          {errors.password_confirmation && errors.password_confirmation.message}
        </FormErrorMessage>
      </FormControl>
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
        isLoading={isSubmitting}
        alignSelf="end"
        justifySelf="end"
      >
        اعمال تغیرات
      </Button>
    </Grid>
  );
}



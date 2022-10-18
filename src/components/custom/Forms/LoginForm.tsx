import { Button, Center, Grid, Link } from '@chakra-ui/react';
import { Formik } from 'formik';
import { mobileRegex } from 'utils/mobileRegex';
import * as Yup from 'yup';
import CheckBoxField from '../Fields/checkBoxField';
import TextField from '../Fields/TextField';
import NextLink from '../NextLink';

export default function LoginForm() {
  return (
    <Formik
      initialValues={{
        phone: '',
        password: '',
        security: '',
        rememberMe: true,
      }}
      validationSchema={Yup.object({
        phone: Yup.string()
          .required('لطفا این قسمت را خالی نگذارید')
          .matches(mobileRegex(), 'شماره تلفن نادرست است'),
        password: Yup.string()
          .required('لطفا این قسمت را خالی نگذارید')
          .min(4, 'لطفا حداقل چهار کاراکتر وارد کنید')
          .max(16, 'حداکثر شانزده کاراکتر'),
        security: Yup.number(),
        rememberMe: Yup.boolean(),
      })}
      onSubmit={(values, action) => {
        alert(JSON.stringify(values, null, 2));
        action.resetForm();
      }}
    >
      {formik => (
        <Grid
          as="form"
          gridArea="forms"
          onSubmit={formik.handleSubmit as any}
          gridTemplateColumns="1fr 1fr"
          gridTemplateAreas={`
           "tel tel"
           "pass pass"
           "security code"
           "forget  forget"
           "checkBox checkBox"
           "btn     btn"
          `}
          columnGap={'42px'}
          pl={{ base: 'none', md: '42px' }}
          rowGap={4}
        >
          <TextField
            name="phone"
            placeholder="شماره تلفن همراه"
            type="tel"
            gridArea="tel"
            maxLength={11}
          />
          <TextField
            name="password"
            placeholder="رمز عبور"
            type="password"
            gridArea="pass"
          />
          <TextField
            name="security"
            placeholder="کد امنیتی را وارد کنید"
            type="number"
            gridArea="security"
          />
          <Center bg="white" h="42px" rounded={12} gridArea="code">
            6642
          </Center>
          <NextLink href="/forget-password">
            <Link gridArea="forget" fontSize={13} w="max-content">
              رمز عبور خود را فراموش کرده اید؟
            </Link>
          </NextLink>
          <CheckBoxField name="rememberMe" gridArea="checkBox">
            مرا بخاطر بسپار
          </CheckBoxField>
          <Button
            colorScheme="secondary"
            shadow="0px 0px 8px rgba(151, 115, 255, 0.4)"
            h="42px"
            type="submit"
            gridArea="btn"
            alignSelf="end"
          >
            ورود
          </Button>
        </Grid>
      )}
    </Formik>
  );
}

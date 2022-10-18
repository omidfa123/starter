import { Button, Grid } from '@chakra-ui/react';
import { Formik } from 'formik';
import TextField from '../Fields/TextField';

import * as Yup from 'yup';
import { mobileRegex } from 'utils/mobileRegex';
import { telephoneRegex } from 'utils/telephoneRegex';
import SelectField from '../Fields/SelectField';
import { postalCodeRegex } from 'utils/postalCodeRegex';

const optCounty = [
  { value: 'kerman', label: 'کرمان' },
  { value: 'tehran', label: 'تهران' },
  { value: '3', label: 'جیرفت' },
  { value: '4', label: 'کرج' },
  { value: '5', label: 'مشهد' },
  { value: '6', label: 'شاهرود' },
  { value: '7', label: 'افغانستان' },
  { value: '8', label: 'امریکا' },
];

export default function ProfileForm() {
  return (
    <Formik
      initialValues={{
        mobile: '',
        first_name: '',
        last_name: '',
        telephone: '',
        gender: '',
        national_code: '',
        email: '',
        county: '',
        state: '',
      }}
      validationSchema={Yup.object({
        mobile: Yup.string()
          .required('لطفا این قسمت را خالی نگذارید')
          .matches(mobileRegex(), 'شماره تلفن نادرست است'),
        first_name: Yup.string().required('لطفا این قسمت را خالی نگذارید'),
        last_name: Yup.string().required('لطفا این قسمت را خالی نگذارید'),
        telephone: Yup.string()
          .required('لطفا این قسمت را خالی نگذارید')
          .matches(telephoneRegex(), 'شماره تلفن ثابت نادرست است'),
        gender: Yup.string().required('لطفا این قسمت را خالی نگذارید'),
        state: Yup.string().required('لطفا این قسمت را خالی نگذارید'),
        county: Yup.string().required('لطفا این قسمت را خالی نگذارید'),
        national_code: Yup.string()
          .required('لطفا این قسمت را خالی نگذارید')
          .matches(/^[0-9]{10}$/g, 'کدملی نادرست است'),
        email: Yup.string()
          .required('لطفا این قسمت را خالی نگذارید')
          .email('ایمیل نادرست است'),
        postal_code: Yup.string()
          .required('لطفا این قسمت را خالی نگذارید')
          .matches(postalCodeRegex(), 'کد پستی نادرست است'),
      })}
      onSubmit={(values, action) => {
        alert(JSON.stringify(values, null, 2));
        action.resetForm();
      }}
    >
      {formik => (
        <Grid
          as="form"
          onSubmit={formik.handleSubmit as any}
          gridTemplateColumns="repeat(3 , 2fr) 1fr "
          gridTemplateAreas={`
            "name telePhone gender ."
            "LName national state . "
            "email  county   .     . "
            "mobile postal  btn   btn" 
          `}
          columnGap={10}
          rowGap={4}
          py={8}
          px={3}
        >
          <TextField
            gridArea="name"
            name="first_name"
            isRequired
            label="نام :"
          />
          <TextField
            gridArea="LName"
            name="last_name"
            isRequired
            label="نام خانوادگی :"
          />
          <TextField
            gridArea="telePhone"
            name="telephone"
            type="tel"
            isRequired
            label="شماره تلفن ثابت :"
          />
          <TextField
            gridArea="postal"
            name="postal_code"
            isRequired
            label="کد پستی :"
          />
          <TextField
            gridArea="national"
            name="national_code"
            isRequired
            label="کد ملی :"
          />
          <TextField
            gridArea="email"
            name="email"
            type="email"
            isRequired
            label="ایمیل :"
          />

          <TextField
            gridArea="mobile"
            name="mobile"
            type="tel"
            isRequired
            label="شماره موبایل :"
          />
          <SelectField
            gridArea="gender"
            name="gender"
            isRequired
            label="جنسیت :"
            options={optCounty}
            setValue={formik.setFieldValue}
          />
          <SelectField
            gridArea="state"
            name="state"
            isRequired
            label="استان :"
            options={optCounty}
            setValue={formik.setFieldValue}
          />
          <SelectField
            gridArea="county"
            name="county"
            isRequired
            label="شهرستان :"
            options={optCounty}
            setValue={formik.setFieldValue}
          />
          <Button
            gridArea="btn"
            type="submit"
            w="164px"
            justifySelf="end"
            alignSelf="end"
          >
            اعمال تغیرات
          </Button>
        </Grid>
      )}
    </Formik>
  );
}

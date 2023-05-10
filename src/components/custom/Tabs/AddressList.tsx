import { Grid } from '@chakra-ui/react';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { AddressInputs } from 'types';
import AddressForm from '../Forms/AddressForm';
import AddressTable from '../Tables/AddressTable';

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

export default function AddressList({
  user,
  token,
}: {
  user: any;
  token: string;
}) {
  const [isUpdate, setIsUpdate] = useState(undefined);
  const methods = useForm<AddressInputs>({
    mode: 'onTouched',
    defaultValues,
  });
  return (
    <FormProvider {...methods}>
      <Grid
        h="fit-content"
        gridTemplateColumns="3fr 4fr"
        p="20px 23px 20px 26px"
      >
        <AddressTable token={token} user={user} setIsUpdate={setIsUpdate} />
        <AddressForm
          token={token}
          user={user}
          isUpdate={isUpdate}
          setIsUpdate={setIsUpdate}
        />
      </Grid>
    </FormProvider>
  );
}

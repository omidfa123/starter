import { Grid, Text } from '@chakra-ui/react';
import AddressForm from '../Forms/AddressForm';
import AddressTable from '../Tables/AddressTable';

export default function AddressList() {
  return (
    <Grid h="fit-content" gridTemplateColumns="3fr 4fr" p="20px 23px 20px 26px">
      {/* <Text
        textStyle="medium20"
        color="disableUl"
        alignSelf="center"
        textAlign="center"
      >
        هنوز آدرسی ثبت نشده است
      </Text> */}
      <AddressTable />
      <AddressForm />
    </Grid>
  );
}

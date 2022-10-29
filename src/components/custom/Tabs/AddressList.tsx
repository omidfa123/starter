import { Grid, Text } from '@chakra-ui/react';
import AddressForm from '../Forms/AddressForm';
import AddressTable from '../Tables/AddressTable';

export default function AddressList() {
  return (
    <Grid h="452px" gridTemplateColumns="3fr 4fr" pt={5}>
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

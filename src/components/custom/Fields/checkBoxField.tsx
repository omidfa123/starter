import { FormControl, Checkbox } from '@chakra-ui/react';
import { FastField, useField } from 'formik';

export default function CheckBoxField({ ...props }) {
  const [field, meta] = useField(props as any);

  return (
    <FormControl
      isInvalid={
        (meta.error as boolean | undefined) && (meta.touched as boolean)
      }
      gridArea={props.gridArea}
    >
      <FastField as={Checkbox} {...field} {...props} colorScheme="secondary" />
    </FormControl>
  );
}

import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react';

import { FastField, useField } from 'formik';
import Select from '../Select';

export default function SelectField({ ...props }) {
  const [field, meta] = useField(props as any);
  return (
    <FormControl
      isInvalid={
        (meta.error as boolean | undefined) && (meta.touched as boolean)
      }
      gridArea={props.gridArea}
      isRequired={props.isRequired}
    >
      {props.label && <FormLabel>{props.label}</FormLabel>}
      <FastField as={Select} {...field} {...props} />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
}

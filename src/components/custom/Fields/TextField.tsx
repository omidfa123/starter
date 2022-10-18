import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { FastField, useField } from 'formik';

export default function TextField({ ...props }) {
  const [field, meta] = useField(props as any);
  console.log(props);
  return (
    <FormControl
      isInvalid={
        (meta.error as boolean | undefined) && (meta.touched as boolean)
      }
      gridArea={props.gridArea}
      isRequired={props.isRequired}
    >
      {props.label && <FormLabel>{props.label}</FormLabel>}
      <FastField as={Input} {...field} {...props} />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
}

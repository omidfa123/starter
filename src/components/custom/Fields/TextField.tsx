import { FormControl, FormErrorMessage, Input } from '@chakra-ui/react';
import { Field, useField } from 'formik';

export default function TextField({ ...props }) {
  const [field, meta] = useField(props as any);
  return (
    <FormControl
      isInvalid={
        (meta.error as boolean | undefined) && (meta.touched as boolean)
      }
      gridArea={props.gridArea}
    >
      <Field as={Input} {...field} {...props} />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
}

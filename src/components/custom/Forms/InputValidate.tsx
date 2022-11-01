import { Box, FormControl, FormErrorMessage, Input } from '@chakra-ui/react';
import { UseFormRegister, ValidationRule } from 'react-hook-form';
import { AddressInputs } from 'types';

interface IProps {
  gridArea?: string;
  isolation?: any;
  isInvalid: boolean;
  register: UseFormRegister<AddressInputs>;
  name: any;
  placeholder: string;
  errorMessage: string | undefined;
  right: string;
  type?: string;
  maxLength?: number;
  pattern?: ValidationRule<RegExp> | undefined;
}

const required = 'لطفا این قسمت را خالی نگذارید';

export function InputValidate(props: IProps) {
  return (
    <FormControl
      isolation={props.isolation}
      gridArea={props.gridArea}
      isInvalid={props.isInvalid}
    >
      <Input
        sx={{ '&:not(:placeholder-shown) + span': { display: 'none' } }}
        {...props.register(props.name, {
          required: required,
          pattern: props.pattern,
        })}
        placeholder={props.placeholder}
        variant="white-filled"
        _placeholder={{ color: 'text' }}
        type={props.type}
        maxLength={props.maxLength}
      />
      <Box
        as="span"
        marginInlineStart={1}
        color="red.500"
        pos="absolute"
        zIndex={2}
        top="10px"
        right={props.right}
      >
        *
      </Box>
      <FormErrorMessage>
        {props.isInvalid && props.errorMessage}
      </FormErrorMessage>
    </FormControl>
  );
}

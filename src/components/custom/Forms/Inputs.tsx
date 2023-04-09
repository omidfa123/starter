import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { UseFormRegister, ValidationRule } from 'react-hook-form';
import { AddressInputs, userInfoInputs } from 'types';

interface IPropsInside {
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
interface IPropsLabel {
  gridArea?: string;
  isInvalid: boolean;
  register: UseFormRegister<any>;
  name: any;
  placeholder: string;
  errorMessage: string | undefined;
  type?: string;
  maxLength?: number;
  pattern?: ValidationRule<RegExp> | undefined;
  required: boolean;
}

const required = 'لطفا این قسمت را خالی نگذارید';

export function InputInsideLabel(props: IPropsInside) {
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
export function InputWithLabel(props: IPropsLabel) {
  return (
    <FormControl gridArea={props.gridArea} isInvalid={props.isInvalid}>
      <FormLabel>
        {props.placeholder}
        {props.required && (
          <Box
            as="span"
            marginInlineStart={1}
            color="red.500"
            role="presentation"
            aria-hidden="true"
          >
            *
          </Box>
        )}
      </FormLabel>
      <Input
        {...props.register(props.name, {
          required: props.required ? required : undefined,
          pattern: props.pattern,
        })}
        type={props.type}
        maxLength={props.maxLength}
      />
      <FormErrorMessage>
        {props.isInvalid && props.errorMessage}
      </FormErrorMessage>
    </FormControl>
  );
}

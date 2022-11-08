import {
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  FormErrorMessage,
  useDisclosure,
  useMergeRefs,
} from '@chakra-ui/react';
import { EyeIcon, EyeOffIcon } from 'components/common/Icons';
import * as React from 'react';

export const PasswordField = React.forwardRef<HTMLInputElement, any>(
  (props, ref) => {
    const { isOpen, onToggle } = useDisclosure();
    const inputRef = React.useRef<HTMLInputElement>(null);

    const mergeRef = useMergeRefs(inputRef, ref);
    const onClickReveal = () => {
      onToggle();
      if (inputRef.current) {
        inputRef.current.focus({ preventScroll: true });
      }
    };
    const { ref: validRef, ...rest } = props.register(
      props.name,
      props.pattern
    );
    return (
      <FormControl
        gridArea={props.gridArea}
        isInvalid={props.isInvalid}
        pb={props.pb}
      >
        <FormLabel htmlFor={props.name}>{props.placeholder}</FormLabel>
        <InputGroup dir="ltr">
          <InputLeftElement>
            <IconButton
              variant="link"
              aria-label={isOpen ? 'Mask password' : 'Reveal password'}
              icon={isOpen ? <EyeOffIcon /> : <EyeIcon />}
              onClick={onClickReveal}
            />
          </InputLeftElement>
          <Input
            id={props.name}
            p="0 12px 0 12px"
            dir="rtl"
            ref={e => {
              mergeRef!(e);
              validRef(e);
            }}
            {...rest}
            type={isOpen ? 'text' : 'password'}
            autoComplete="current-password"
          />
        </InputGroup>
        <FormErrorMessage>
          {props.isInvalid && props.errorMessage}
        </FormErrorMessage>
      </FormControl>
    );
  }
);

PasswordField.displayName = 'PasswordField';

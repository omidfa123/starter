import { Box, Center, Flex, useRadio, useRadioGroup } from '@chakra-ui/react';
import { TikIcon } from 'components/common/Icons';
import { forwardRef } from 'react';
import { useController } from 'react-hook-form';

const options = [
  { value: '1', label: 'بله' },
  { value: '0', label: 'خیر' },
];

function CustomRadio({ label, ...props }: any, ref: any) {
  const { state, getInputProps, getCheckboxProps, htmlProps, getLabelProps } =
    useRadio(props);
  return (
    <Box
      as="label"
      {...htmlProps}
      cursor="pointer"
      display="flex"
      gap={2}
      ml={4}
    >
      <input {...getInputProps({ ref })} hidden />
      <Center
        {...getCheckboxProps()}
        bg={state.isChecked ? 'secondary.500' : 'white'}
        border="0.7px solid #15121D"
        rounded={4}
        w={5}
        h={5}
      >
        <TikIcon boxSize="13px" />
      </Center>
      <Box as="span" color="black" fontSize="14px" {...getLabelProps()}>
        {label}
      </Box>
    </Box>
  );
}
const CustomRadioRef = forwardRef(CustomRadio);
function AddressRadioGroup({ control, name }: any, ref: any) {
  const { field } = useController({
    name,
    control,
    rules: { required: 'لطفا این قسمت را خالی نگذارید' },
  });
  const { getRadioProps, getRootProps } = useRadioGroup({
    ...field,
  });

  return (
    <Flex {...getRootProps()}>
      {options.map(opt => (
        <CustomRadioRef
          key={opt.label}
          value={opt.value}
          label={opt.label}
          {...getRadioProps({ value: opt.value })}
        />
      ))}
    </Flex>
  );
}
export const AddressFormRadio = forwardRef(AddressRadioGroup);

import Select from 'react-select';
import { useRegions } from 'components/hooks/useRegions';
import { component, selectStyles } from 'utils/SelectStyles';
import { useController } from 'react-hook-form';
import { FormControl, FormErrorMessage } from '@chakra-ui/react';

const StatePlaceholderStyle = (base: any) => ({
  ...base,
  color: '#15121D',
  '&::after': {
    content: '"*"',
    position: 'absolute',
    right: '52px',
    marginInlineStart: '4px',
    color: '#e53e3e',
    role: 'presentation',
    ariaHidden: 'true',
    fontSize: '16px',
  },
});

export default function SelectState({
  control,
  name,
  id,
  label,
  rules,
  ...props
}: any) {
  const data = useRegions('');

  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { invalid, error },
  } = useController({ name, control, rules });

  return (
    <FormControl
      gridArea="state"
      isInvalid={invalid}
      id={id}
      data-invalid={invalid}
      sx={{
        '&:not([data-invalid= false]) .atramart__control': {
          border: '1.5px solid #E53E3E ',
        },
      }}
    >
      <Select
        styles={{ ...selectStyles, placeholder: StatePlaceholderStyle }}
        classNamePrefix="atramart"
        isSearchable
        isClearable
        options={data.length == 0 ? [] : data[0]}
        placeholder="استان"
        components={component}
        id="react-select-31-live-region"
        instanceId="react-select-31-live-region"
        isLoading={data.length == 0 ? true : false}
        name={name}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        {...props}
      />
      <FormErrorMessage>{error && error.message}</FormErrorMessage>
    </FormControl>
  );
}

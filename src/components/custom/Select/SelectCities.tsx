import Select from 'react-select';
import { component, selectStyles } from 'utils/SelectStyles';
import { useController } from 'react-hook-form';
import { FormControl, FormErrorMessage } from '@chakra-ui/react';

export default function SelectCities({
  control,
  name,
  id,
  label,
  rules,
  ...props
}: any) {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { invalid, error },
  } = useController({ name, control, rules });
 console.log(value);

 return (
   <FormControl
     id={id}
     gridArea={name == 'city_id' ? 'city_id' : 'state'}
     isInvalid={invalid}
     data-invalid={invalid}
     sx={{
       '&:not([data-invalid= false]) .atramart__control': {
         border: '1.5px solid #E53E3E ',
       },
       '&  .atramart__placeholder::after ':
         name == 'city_id' ? { right: '70px' } : { right: '52px' },
     }}
   >
     <Select
       styles={selectStyles}
       classNamePrefix="atramart"
       isSearchable
       isClearable
       options={props.options}
       placeholder={props.placeholder}
       components={component}
       id={props.instanceId}
       instanceId={props.instanceId}
       isLoading={props.isLoading}
       name={name}
       ref={ref}
       onChange={(e: any) => {
         onChange(e);
         name == 'state' && props.setDefaultOpt(e?.label);
       }}
       onBlur={onBlur}
       value={value?.label ? value : ''}
       {...props}
     />
     <FormErrorMessage>{error && error.message}</FormErrorMessage>
   </FormControl>
 );
}

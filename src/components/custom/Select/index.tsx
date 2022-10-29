import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  List,
  ListItem,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Portal,
  useDisclosure,
  useOutsideClick,
} from '@chakra-ui/react';
import { AngleDownIcon } from 'components/common/Icons';
import { useEffect, useRef, useState } from 'react';
import {
  Control,
  UseFormRegister,
  UseFormSetValue,
  useWatch,
} from 'react-hook-form';

const optCounty = [
  { value: 'kerman', label: 'کرمان' },
  { value: 'tehran', label: 'تهران' },
  { value: '3', label: 'جیرفت' },
  { value: '4', label: 'کرج' },
  { value: '5', label: 'مشهد' },
  { value: '6', label: 'شاهرود' },
  { value: '7', label: 'افغانستان' },
  { value: '8', label: 'امریکا' },
];
type Inputs = {
  mobile: string;
  name: string;
  telephone: string;
  post_code: string;
  city: string;
  state: string;
  street: string;
  isDefault: boolean;
};
export default function Select({
  register,
  setValue,
  control,
  inputName,
  placeholder,
  right,
}: {
  register: UseFormRegister<Inputs>;
  setValue: UseFormSetValue<Inputs>;
  control: Control<Inputs>;
  inputName: any;
  placeholder: string;
  right: string;
}) {
  const ref = useRef() as React.MutableRefObject<HTMLInputElement>;
  const { isOpen, onClose, onToggle } = useDisclosure();
  const [options, setOptions] = useState(optCounty);
  const inputValue = useWatch({ control, name: inputName });

  useOutsideClick({
    ref: ref,
    handler: onClose,
  });

  useEffect(() => {
    const searchParams = inputValue;
    const filteredOpt = [...optCounty].filter(opt =>
      opt.label.toLowerCase().includes(inputValue.toLowerCase())
    );
    if (searchParams.length === 0) setOptions(optCounty);
    if (filteredOpt.length === 0)
      setOptions([{ value: 'null', label: 'موردی یافت نشد.' }]);
    if (filteredOpt.length > 0 && searchParams.length > 0)
      setOptions(filteredOpt);
  }, [inputValue]);
  return (
    <Popover closeDelay={0} autoFocus={false} isOpen={isOpen} matchWidth isLazy>
      <PopoverTrigger>
        <InputGroup>
          <InputLeftElement>
            <AngleDownIcon
              boxSize="13px"
              transform={isOpen ? 'rotate(180deg)' : 'initial'}
              onClick={onToggle}
              cursor="pointer"
            />
          </InputLeftElement>
          <Input
            sx={{ '&:not(:placeholder-shown) + span': { display: 'none' } }}
            {...register(inputName, {
              required: 'لطفا این قسمت را خالی نگذارید',
            })}
            placeholder={placeholder}
            paddingInline="0"
            p=" 0 14px 0 14px"
            variant="white-filled"
            _placeholder={{ color: 'text' }}
            onClick={onToggle}
          />
          <Box
            as="span"
            marginInlineStart={1}
            color="red.500"
            role="presentation"
            aria-hidden="true"
            pos="absolute"
            zIndex={2}
            top="10px"
            right={right}
          >
            *
          </Box>
        </InputGroup>
      </PopoverTrigger>
      <Portal>
        <PopoverContent w="100%">
          <PopoverBody>
            <List>
              {options.map((opt: any) => (
                <ListItem
                  key={opt.value}
                  value={opt.value}
                  onClick={() =>
                    setValue(inputName, opt.label, { shouldValidate: true })
                  }
                >
                  {opt.label}
                </ListItem>
              ))}
            </List>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
}

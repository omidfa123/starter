import {
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
import { useRef, useState } from 'react';

export default function Select(props: any) {
  const ref = useRef() as React.MutableRefObject<HTMLInputElement>;
  const { isOpen, onClose, onToggle } = useDisclosure();
  const [options, setOptions] = useState(props.options);

  useOutsideClick({
    ref: ref,
    handler: onClose,
  });

  const handleChange = (e: any) => {
    const searchParams = e.target.value;
    props.onChange(e);
    const filteredOpt = [...props.options].filter(opt =>
      opt.label.toLowerCase().includes(e.target.value.toLowerCase())
    );
    if (searchParams.length === 0) setOptions(props.options);
    if (filteredOpt.length === 0)
      setOptions([{ value: 'null', label: 'موردی یافت نشد.' }]);
    if (filteredOpt.length > 0 && searchParams.length > 0)
      setOptions(filteredOpt);
  };
  return (
    <Popover
      closeDelay={0}
      initialFocusRef={ref}
      isOpen={isOpen}
      matchWidth
      isLazy
    >
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
            ref={ref}
            onClick={onToggle}
            onChange={handleChange}
            onBlur={props.onBlur}
            isRequired={props.isRequired}
            value={props.value}
            name={props.name}
          />
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
                  onClick={() => props.setValue(`${props.name}`, opt.label)}
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

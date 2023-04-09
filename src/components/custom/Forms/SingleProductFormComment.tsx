import {
  useRadio,
  chakra,
  Input,
  Center,
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  InputGroup,
  InputLeftElement,
  Textarea,
  useRadioGroup,
  Text,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AddIcon, MinusIcon, TrashIcon } from 'components/common/Icons';
import { useState } from 'react';

type Inputs = {
  rating: string;
  title: string;
  strengths: string;
  weakness: string;
  comment: string;
};

const defaultValues = {
  rating: '',
  title: '',
  strengths: '',
  weakness: '',
  comment: '',
};

const options = [
  { value: 'خیلی ضعیف', label: '😔' },
  { value: 'ضعیف', label: '👎' },
  { value: 'خوب', label: '👍' },
  { value: 'خیلی خوب', label: '👏' },
  { value: 'عالی', label: '👌' },
];

function CustomRadio(props: any) {
  const { state, getInputProps, getCheckboxProps, htmlProps, getLabelProps } =
    useRadio(props);

  return (
    <chakra.label {...htmlProps} cursor="pointer">
      <Input {...getInputProps({})} hidden />
      <Center
        {...getCheckboxProps()}
        color={state.isChecked ? 'white' : '#bdbdbd'}
        fontWeight="500"
        rounded={8}
        boxSize="46px"
        border="1px solid"
        borderColor={state.isChecked ? '#9773FF' : '#9F9F9F'}
        userSelect="none"
      >
        <Box as="span" {...getLabelProps()} fontSize="22">
          {props.label}
        </Box>
      </Center>
    </chakra.label>
  );
}

export default function SingleProductFormComment() {
  const { getRadioProps, getRootProps } = useRadioGroup({
    defaultValue: 'خیلی ضعیف',
  });
  const [strengths, setStrengths] = useState<string[]>([]);
  const [weakness, setWeakness] = useState<string[]>([]);
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    mode: 'onTouched',
    defaultValues,
  });

  const onSubmit: SubmitHandler<Inputs> = data => {
    alert(JSON.stringify(data, null, 2));
  };
  return (
    <Flex
      flexDir="column"
      w="max-content"
      mx="auto"
      as={'form'}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Text fontWeight="500" color="black" mb="2">
        امتیاز شما :{' '}
        <Box as="span" color="#FF5E5E" ml="2">
          *
        </Box>
        <Box as="span">عالی</Box>
      </Text>
      <Flex {...getRootProps()} gap="4" mb="6">
        {options.map(opt => {
          return (
            <Box key={opt.label}>
              <CustomRadio
                label={opt.label}
                {...getRadioProps({ value: opt.value })}
              />
            </Box>
          );
        })}
      </Flex>
      <Text fontWeight="500" mb="6">
        دیدگاه خود را شرح دهید
      </Text>
      <Flex
        flexDir="column"
        gap={errors.comment || errors.title ? '4' : '8'}
        mb="10"
      >
        <FormControl isInvalid={!!errors.title}>
          <FormLabel color="#9F9F9F" fontSize={14}>
            عنوان نظر
            <Box
              as="span"
              marginInlineStart={1}
              color="red.500"
              role="presentation"
              aria-hidden="true"
            >
              *
            </Box>
          </FormLabel>

          <Input
            {...register('title', {
              required: 'لطفا این قسمت رو خالی نگذارید',
            })}
            variant="outline"
            maxLength={24}
            bgColor="white"
            rounded={8}
            border="1px solid #9F9F9F"
            focusBorderColor="secondary.500"
          />

          <FormErrorMessage>
            {errors.title && errors.title.message}
          </FormErrorMessage>
        </FormControl>
        <Box>
          <FormControl
            isInvalid={!!errors.strengths}
            mb={strengths.length > 0 ? '2' : '0'}
          >
            <FormLabel color="#9F9F9F" fontSize={14}>
              نکات قوت
            </FormLabel>
            <InputGroup>
              <InputLeftElement
                onClick={() => {
                  const value = getValues('strengths');
                  if (value) {
                    setStrengths(prev => [...prev, value]);
                    reset({ strengths: '' });
                  }
                }}
              >
                <AddIcon
                  color="#9F9F9F"
                  _hover={{ color: 'text' }}
                  cursor="pointer"
                />
              </InputLeftElement>
              <Input
                {...register('strengths')}
                variant="outline"
                maxLength={24}
                bgColor="white"
                rounded={8}
                border="1px solid #9F9F9F"
                focusBorderColor="secondary.500"
                onKeyDown={e => {
                  if (e.key === 'Enter') {
                    const value = getValues('strengths');
                    e.preventDefault();
                    if (value) {
                      setStrengths(prev => [...prev, value]);
                      reset({ strengths: '' });
                    }
                  }
                }}
              />
            </InputGroup>
          </FormControl>
          <List spacing={1.5}>
            {strengths.map(strength => (
              <ListItem fontSize={14} fontWeight="500" key={strength}>
                <ListIcon as={AddIcon} color="secondary.500" fontSize={12} />
                {strength}
                <ListIcon
                  as={TrashIcon}
                  mr="auto"
                  fontSize={15}
                  _hover={{ color: 'red.500' }}
                  cursor="pointer"
                  onClick={() =>
                    setStrengths(prev => prev.filter(str => str !== strength))
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
        <Box>
          <FormControl
            isInvalid={!!errors.weakness}
            mb={weakness.length > 0 ? '2' : '0'}
          >
            <FormLabel color="#9F9F9F" fontSize={14}>
              نقاط ضعف
            </FormLabel>
            <InputGroup>
              <InputLeftElement
                onClick={() => {
                  const value = getValues('weakness');
                  if (value) {
                    setWeakness(prev => [...prev, value]);
                    reset({ weakness: '' });
                  }
                }}
              >
                <AddIcon
                  color="#9F9F9F"
                  _hover={{ color: 'text' }}
                  cursor="pointer"
                />
              </InputLeftElement>
              <Input
                {...register('weakness')}
                variant="outline"
                maxLength={24}
                bgColor="white"
                rounded={8}
                border="1px solid #9F9F9F"
                focusBorderColor="secondary.500"
                onKeyDown={e => {
                  if (e.key === 'Enter') {
                    const value = getValues('weakness');
                    e.preventDefault();
                    if (value) {
                      setWeakness(prev => [...prev, value]);
                      reset({ weakness: '' });
                    }
                  }
                }}
              />
            </InputGroup>
          </FormControl>
          <List spacing={1.5}>
            {weakness.map(weakness => (
              <ListItem fontSize={14} fontWeight="500" key={weakness}>
                <ListIcon as={MinusIcon} color="primary.500" fontSize={12} />
                {weakness}
                <ListIcon
                  as={TrashIcon}
                  mr="auto"
                  fontSize={15}
                  _hover={{ color: 'red.500' }}
                  cursor="pointer"
                  onClick={() =>
                    setWeakness(prev => prev.filter(weak => weak !== weakness))
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
        <FormControl isInvalid={!!errors.comment}>
          <FormLabel color="#9F9F9F" fontSize={14}>
            متن نظر
            <Box
              as="span"
              marginInlineStart={1}
              color="red.500"
              role="presentation"
              aria-hidden="true"
            >
              *
            </Box>
          </FormLabel>

          <Textarea
            placeholder="نظرتو به ما بگو ..."
            _placeholder={{ color: '#B8B8B8', fontSize: '13' }}
            {...register('comment', {
              required: 'لطفا این قسمت رو خالی نگذارید',
            })}
            h="128px"
          />
          <FormErrorMessage>
            {errors.comment && errors.comment.message}
          </FormErrorMessage>
        </FormControl>
      </Flex>
      <Button
        // onClick={onClose}
        borderWidth="1.5px"
        w="290px"
        rounded={8}
        type="submit"
        mb="8"
      >
        ثبت دیدگاه
      </Button>
    </Flex>
  );
}

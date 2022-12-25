import {
  useRadio,
  chakra,
  Input,
  Center,
  Box,
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  AccordionButton,
  useRadioGroup,
  Flex,
  Divider,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  FormControl,
  FormLabel,
  Switch,
} from '@chakra-ui/react';

const options = [
  { value: '20', label: '۲۰' },
  { value: '40', label: '۴۰' },
  { value: '75', label: '۷۵' },
  { value: '90', label: '۹۰' },
  { value: '100', label: '۱۰۰' },
];
function CustomRadio(props: any) {
  const { state, getInputProps, getCheckboxProps, htmlProps, getLabelProps } =
    useRadio(props);
  return (
    <chakra.label {...htmlProps} cursor="pointer">
      <Input {...getInputProps({})} hidden />
      <Center
        {...getCheckboxProps()}
        bg={state.isChecked ? 'secondary.500' : '#fff'}
        color={state.isChecked ? 'white' : '#ADADAD'}
        rounded={8}
        userSelect="none"
        p="1px 23px"
        border={state.isChecked ? '1px solid #9773FF' : '1px solid #ADADAD'}
      >
        <Box as="span" {...getLabelProps()}>
          {props.label}
        </Box>
      </Center>
    </chakra.label>
  );
}

export default function ProductsAccordion({ setIsLoading }: any) {
  const { getRadioProps, getRootProps } = useRadioGroup({
    defaultValue: '20',
  });
  return (
    <Flex
      gridArea="filters"
      flexDir="column"
      align="center"
      bgColor="white"
      outline="1.5px solid #eee"
      pos="relative"
      rounded="24"
      gap={4}
      pb={4}
      h="max-content"
      _before={{
        content: "'فیلتر ها'",
        color: 'white',
        fontSize: ' 14px',
        fontWeight: '500',
        bgColor: 'secondary.500',
        textAlign: 'center',
        roundedBottom: '24',
        w: '50%',
        py: '1',
      }}
    >
      <Accordion allowToggle variant="filter" w="100%">
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <AccordionButton justifyContent="space-between" px="4" py="0">
                <Center as="p" gap="2" fontWeight="500">
                  نمایش تعداد:
                  <Box fontWeight="400" as="span">
                    ۲۰
                  </Box>
                </Center>
                <AccordionIcon />
              </AccordionButton>
              <Divider
                borderColor="#D9D9D9"
                w="87%"
                mx="auto"
                opacity={isExpanded ? '0' : '1'}
                mt="4"
                mb={isExpanded ? '0' : '4'}
              />
              <AccordionPanel py={4} mb="4">
                <Flex
                  {...getRootProps()}
                  flexWrap="wrap"
                  gap=" 16px 14px"
                  px="12px"
                >
                  {options.map(opt => {
                    return (
                      <Box key={opt.value} _last={{ marginLeft: 'auto' }}>
                        <CustomRadio
                          label={opt.label}
                          {...getRadioProps({ value: opt.value })}
                        />
                      </Box>
                    );
                  })}
                </Flex>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>

        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <AccordionButton justifyContent="space-between" px="4" py="0">
                <Box as="p" gap="2" fontWeight="500">
                  محدوده قیمت
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <Divider
                borderColor="#D9D9D9"
                w="87%"
                mx="auto"
                opacity={isExpanded ? '0' : '1'}
                mt="4"
              />
              <AccordionPanel px="4" pb="18px">
                <Center
                  as="p"
                  gap="2"
                  fontWeight="500"
                  justifyContent="space-between"
                >
                  از
                  <Box fontWeight="400" as="span">
                    <Box as="span" ml={1} color="secondary.500">
                      ۰
                    </Box>
                    تومان
                  </Box>
                </Center>
                <Divider borderColor="#D9D9D9" my="2" />
                <Center
                  as="p"
                  gap="2"
                  fontWeight="500"
                  justifyContent="space-between"
                >
                  تا
                  <Box fontWeight="400" as="span">
                    <Box as="span" ml={1} color="secondary.500">
                      ۵٬۲۵۰٬۰۰۰
                    </Box>
                    تومان
                  </Box>
                </Center>
                <Divider borderColor="#D9D9D9" mt="2" mb="22" />
                <RangeSlider
                  aria-label={['min', 'max']}
                  defaultValue={[0, 5250000]}
                  colorScheme="secondary"
                  size="lg"
                  min={0}
                  max={5250000}
                >
                  <RangeSliderTrack bgColor="#B9A0FF">
                    <RangeSliderFilledTrack />
                  </RangeSliderTrack>
                  <RangeSliderThumb
                    index={0}
                    shadow="inset 0 0 0 1.5px #7F52FF"
                    border="none"
                  />
                  <RangeSliderThumb
                    index={1}
                    shadow="inset 0 0 0 1.5px #7F52FF"
                    border="none"
                  />
                </RangeSlider>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
      <FormControl
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        px="4"
      >
        <FormLabel htmlFor="discount" mb="0">
          کالا های تخفیف دار
        </FormLabel>
        <Switch id="discount" colorScheme="secondary" />
      </FormControl>
      <Divider borderColor="#D9D9D9" w="87%" />
      <FormControl
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        px="4"
      >
        <FormLabel htmlFor="isAvailable" mb="0">
          فقط کالا های موجود
        </FormLabel>
        <Switch
          id="isAvailable"
          colorScheme="secondary"
          onChange={() => setIsLoading((prev: any) => !prev)}
        />
      </FormControl>
    </Flex>
  );
}

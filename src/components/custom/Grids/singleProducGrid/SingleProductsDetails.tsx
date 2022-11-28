import {
  Box,
  Center,
  Divider,
  Flex,
  Text,
  useRadioGroup,
  chakra,
  useRadio,
  Input,
  Button,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import {
  DiamondGryIcon,
  StarIcon,
  TikIcon,
  CashOnDeliveryIcon,
  ExpressDeliveryIcon,
  OriginalProductIcon,
  ReturnIcon,
  SupportIcon,
} from 'components/common/Icons';

const options = [
  { value: '#15121D', label: '#15121D' },
  { value: '#FF5E5E', label: '#FF5E5E' },
  { value: '#FFA826', label: '#FFA826' },
  { value: '#98AFFF', label: '#98AFFF' },
];

function CustomRadio(props: any) {
  const { state, getInputProps, getCheckboxProps, htmlProps, getLabelProps } =
    useRadio(props);

  return (
    <chakra.label {...htmlProps} cursor="pointer">
      <Input {...getInputProps({})} hidden />
      <Center
        {...getCheckboxProps()}
        bg={props.bgColor}
        w="30px"
        h="30px"
        rounded="full"
        border={
          state.isChecked ? '2px solid #9773FF ' : '2px solid transparent'
        }
      >
        <Center justifyContent="start" as="span" {...getLabelProps()}>
          {state.isChecked && <TikIcon boxSize={4} />}
        </Center>
      </Center>
    </chakra.label>
  );
}

export default function SingleProductsDetails() {
  const { getRadioProps, getRootProps } = useRadioGroup({
    defaultValue: '#15121D',
    onChange: console.log,
  });
  return (
    <>
      <Flex mr="6" flexDir="column" pt="6" gridArea="details">
        <Text as={'h1'} fontWeight="500" w="max-content">
          مانیتور مخصوص بازی سامسونگ مدل LS49AG950N-M سایز 49 اینچ
          <Center
            gap="2"
            color="description"
            textStyle="medium11"
            my="4"
            w="100%"
          >
            <Text minW="max-content">
              Samsung LS49AG950N-M 49 Inch Gaming Monitor
            </Text>
            <Divider w="100%" />
          </Center>
        </Text>
        <Center gap="2" alignSelf="start" mb="48px">
          <Center fontSize={12} gap="2">
            <StarIcon boxSize={4} />
            ۴.۲
          </Center>
          <Divider orientation="vertical" h="60%" />
          <Text fontSize={10} color="secondary.500">
            ۹ دیدگاه
          </Text>
          <Divider orientation="vertical" h="60%" />
          <Text fontSize={10} color="secondary.500">
            ۵۵ دیدگاه
          </Text>
        </Center>
        <Flex justify="space-between">
          <Box>
            <Text fontWeight={500} mb="4">
              رنگ : مشکی
            </Text>
            <Flex {...getRootProps()} gap="4">
              {options.map(opt => {
                return (
                  <Box key={opt.label}>
                    <CustomRadio
                      bgColor={opt.label}
                      {...getRadioProps({ value: opt.value })}
                    />
                  </Box>
                );
              })}
            </Flex>
          </Box>
          <Center
            border="1.5px solid #eee"
            rounded="16"
            flexDir="column"
            px={2}
            py="4"
            gap={4}
          >
            <Flex align="center" justify="space-between" w="full">
              <Box fontSize={14} color="description">
                قیمت :
              </Box>
              <Box>
                <Box as="span" ml="1" fontSize={20}>
                  ۱۵٬۲۵۰٬۰۰۰
                </Box>
                <Box as="span" textStyle="medium10">
                  تومان
                </Box>
              </Box>
            </Flex>
            <Flex gap="10px">
              <Button
                variant="solid"
                colorScheme="secondary"
                rounded="8"
                fontSize={'13'}
                fontWeight="medium"
                h="8"
                w="99px"
                shadow=" 0px 0px 8px rgba(151, 115, 255, 0.32)"
              >
                خرید اقساطی
              </Button>
              <Button
                variant="solid"
                rounded="8"
                fontSize={'13'}
                fontWeight="medium"
                h="8"
                w="112px"
                shadow="0px 0px 8px rgba(255, 168, 38, 0.32)"
              >
                افزودن به سبد
              </Button>
            </Flex>
          </Center>
        </Flex>
        <Flex flexDir="column" gap="11px">
          <Text fontWeight="500">ویژگی ها</Text>
          <List spacing={2}>
            <ListItem gap={0} color="description" fontSize="13">
              <ListIcon as={DiamondGryIcon} />
              محدوده زمان پاسخگویی :
              <Box as="span" color="text" mr="2" fontWeight="500">
                1 تا 3 میلی ثانیه
              </Box>
            </ListItem>
            <ListItem gap={0} color="description" fontSize="13">
              <ListIcon as={DiamondGryIcon} />
              نوع پنل :
              <Box as="span" color="text" mr="2" fontWeight="500">
                VA
              </Box>
            </ListItem>
            <ListItem gap={0} color="description" fontSize="13">
              <ListIcon as={DiamondGryIcon} />
              نوع پس زمینه :
              <Box as="span" color="text" mr="2" fontWeight="500">
                LED
              </Box>
            </ListItem>
            <ListItem gap={0} color="description" fontSize="13">
              <ListIcon as={DiamondGryIcon} />
              نوع مانیتور :
              <Box as="span" color="text" mr="2" fontWeight="500">
                اداری ، خمیده ، طراحی و ادیت ، عکاسی ، کاربر عمومی ، گیمینگ
              </Box>
            </ListItem>
          </List>
        </Flex>
      </Flex>
      <List
        gridArea="options"
        py="2"
        border="1px solid #eee"
        rounded="16"
        display="flex"
        gap="8"
        alignItems="center"
        justifyContent={'center'}
        mb="34px"
      >
        <ListItem fontSize="11">
          <ListIcon as={ExpressDeliveryIcon} boxSize="12" />
          تحویل سریع
        </ListItem>
        <ListItem fontSize="11">
          <ListIcon as={SupportIcon} boxSize="12" />
          24 ساعته ، 7 روز هفته
        </ListItem>
        <ListItem fontSize="11">
          <ListIcon as={CashOnDeliveryIcon} boxSize="12" />
          امکان پرداخت در محل
        </ListItem>
        <ListItem fontSize="11">
          <ListIcon as={ReturnIcon} boxSize="12" />
          هفت روز ضمانت برگشت کالا
        </ListItem>
        <ListItem fontSize="11">
          <ListIcon as={OriginalProductIcon} boxSize="12" />
          اصل بودن کالا
        </ListItem>
      </List>
    </>
  );
}

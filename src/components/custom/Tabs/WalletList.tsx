import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  HStack,
  Text,
  useRadio,
  useRadioGroup,
  VStack,
  chakra,
  Stack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react';
import {
  AddIcon,
  CircleAddIcon,
  MinusIcon,
  WalletIcon,
} from 'components/common/Icons';
import WalletTables from '../Tables/WalletTables';

export default function WalletList() {
  function CustomRadio(props: any) {
    const { state, getInputProps, getCheckboxProps, htmlProps, getLabelProps } =
      useRadio(props);
    return (
      <chakra.label {...htmlProps} cursor="pointer">
        <input {...getInputProps({})} hidden />
        <Center
          {...getCheckboxProps()}
          bg={state.isChecked ? 'secondary.500' : 'transparent'}
          color={state.isChecked ? 'white' : 'secondary.500'}
          borderWidth="1px"
          borderColor="secondary.500"
          fontSize="20px"
          rounded={8}
          w="86px"
          h={9}
        >
          <Box as="span" {...getLabelProps()}>
            {props.value}
          </Box>
        </Center>
      </chakra.label>
    );
  }

  const options = [
    '۱۰٬۰۰۰',
    '۲۰٬۰۰۰',
    '۳۰٬۰۰۰',
    '۵۰٬۰۰۰',
    '۱۰۰٬۰۰۰',
    '۱۵۰٬۰۰۰',
    '۲۰۰٬۰۰۰',
    '۳۰۰٬۰۰۰',
    '۴۰۰٬۰۰۰',
    '۵۰۰٬۰۰۰',
  ];
  const { value, getRadioProps, getRootProps } = useRadioGroup({
    defaultValue: '۱۰٬۰۰۰',
    onChange: console.log,
  });
  const group = getRootProps();
  return (
    <Grid h="max-content" gridTemplateColumns="3fr 4fr" pt={5}>
      <VStack spacing="56px" alignSelf="center" ml={2}>
        <Center
          gap="86px"
          bgColor="#FFBB56"
          rounded={16}
          w="max-content"
          p="15px 25px 16px 25px "
          boxShadow="21px 0px 0 23px #FFA826 , -21px 0px 0 23px #FFA826 , 0px 0px 0 32px #FFBB56, 0px 34px 0 2px #FFDFB0, 0px -34px 0 2px #FFDFB0"
        >
          <Box bgColor="#FFDFB0" rounded={8} p="6px">
            <WalletIcon boxSize={8} />
          </Box>
          <Text textStyle="medium12">۰ تومان</Text>
        </Center>
        <HStack spacing={3}>
          <Button
            leftIcon={<AddIcon fontSize="10px" />}
            colorScheme="secondary"
            fontSize="13px"
            borderWidth="1px"
            rounded={8}
            h="32px"
            w="129px"
          >
            واریز به کیف
          </Button>
          <Button
            leftIcon={<MinusIcon fontSize="10px" />}
            fontSize="13px"
            rounded={8}
            h="32px"
            w="129px"
            borderWidth="1px"
            bgColor="comparison"
            _hover={{ bgColor: '#5C80FF' }}
            _active={{ bgColor: '#2E5DFF' }}
          >
            برداشت از کیف
          </Button>
        </HStack>
      </VStack>
      <Stack bgColor="#F7F4FF" spacing={8} rounded={32} px={4} py={6}>
        <Stack {...getRootProps()} spacing={4}>
          <Text
            textStyle="medium14"
            _after={{
              content: "'( تومان )'",
              color: '#FF5E5E',
              fontSize: '12px',
              mr: '4px',
            }}
          >
            گزینه مورد نظر را انتخاب کنید
          </Text>
          <Wrap spacing={4}>
            {options.map(value => {
              return (
                <WrapItem key={value}>
                  <CustomRadio value={value} {...getRadioProps({ value })} />
                </WrapItem>
              );
            })}
          </Wrap>
        </Stack>
        <FormControl>
          <FormLabel
            textStyle="medium14"
            _after={{
              content: "'( تومان )'",
              color: '#FF5E5E',
              fontSize: '12px',
              mr: '4px',
            }}
            mb={4}
          >
            اگه دوست داری مقدار دقیق رو وارد کن
          </FormLabel>
          <Input variant="white-filled" minH="48px" />
        </FormControl>
        <Stack spacing="13px">
          <Text textStyle="medium14">تاریخچه تراکنش ها</Text>

          <Tabs
            isFitted
            isLazy
            lazyBehavior="keepMounted"
            variant="solid-rounded"
            bgColor="#fff"
            p="20px 8px 20px 16px"
            rounded={32}
          >
            <TabList
              sx={{
                '& button': {
                  fontSize: '14px',
                  fontWeight: '500',
                  rounded: '8px',
                  color: 'text',
                  h: '32px',
                  mb: '20px',
                },
              }}
              gap={3}
              mr={3}
            >
              <Tab
                bgColor="#F7F4FF"
                _selected={{ bgColor: 'secondary.500', color: 'white' }}
              >
                پرداخت ها
              </Tab>
              <Tab
                bgColor="#F7F4FF"
                _selected={{ bgColor: 'secondary.500', color: 'white' }}
              >
                واریز ها
              </Tab>
            </TabList>

            <TabPanels bg="white" roundedBottom={32}>
              <TabPanel p="0">
                <WalletTables />
              </TabPanel>
              <TabPanel p="0">
                <WalletTables />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Stack>
      </Stack>
    </Grid>
  );
}

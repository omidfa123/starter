import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  List,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import { AngleDownIcon, StarFilledIcon } from 'components/common/Icons';
import Image from 'next/future/image';

export default function SingleProductTab() {
  return (
    <Tabs
      isLazy
      lazyBehavior="keepMounted"
      variant="line"
      rounded={16}
      gridArea="tab"
      p="4"
      colorScheme="secondary"
      border="1.5px solid #eee"
      mb="8"
    >
      <TabList fontWeight="500" color="description">
        <Tab>بررسی تخصصی</Tab>
        <Tab>مشخصات</Tab>
        <Tab>امتیاز و دیدگاه کاربران</Tab>
        <Tab>پرسش ها</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Text fontWeight="500" mb="4">
            مانیتور گیمینگ تحسین‌برانگیز
          </Text>
          <Text fontSize={'13px'} lineHeight="20px" mb={4}>
            افرادی که گیمرهای ماهری باشند خوب می‌دانند که تا چه اندازه داشتن یک
            دستگاه حرفه‌ای برای ایجاد حس بسیار خوب حین بازی مؤثر است. یکی از
            دستگاه‌هایی که برای ایجاد تجربه واقعی بازی تأثیر زیادی می‌گذارد، یک
            صفحه نمایش خوب است. به ویژه اگر صفحه نمایش حرفه‌ای و فوق‌العاده
            باشد. مانیتور مخصوص بازی سامسونگ مدل LS49AG950N-M یک دستگاه فوق عریض
            و فوق‌العاده برای بازی است که تجربه به شدت متفاوتی را با آن کسب
            خواهید
          </Text>
          <Image
            src="/images/monitor_3.png"
            alt="monitor"
            width={928}
            height={346}
          />
          <Text fontWeight="500" mb="4" mt="8">
            فراتر از تصاویر را ببینید
          </Text>
          <Text fontSize={'13px'} lineHeight="20px" mb="4">
            افرادی که گیمرهای ماهری باشند خوب می‌دانند که تا چه اندازه داشتن یک
            دستگاه حرفه‌ای برای ایجاد حس بسیار خوب حین بازی مؤثر است. یکی از
            دستگاه‌هایی که برای ایجاد تجربه واقعی بازی تأثیر زیادی می‌گذارد، یک
            صفحه نمایش خوب است. به ویژه اگر صفحه نمایش حرفه‌ای و فوق‌العاده
            باشد. مانیتور مخصوص بازی سامسونگ مدل LS49AG950N-M یک دستگاه فوق عریض
            و فوق‌العاده برای بازی است که تجربه به شدت متفاوتی را با آن کسب
            خواهید
          </Text>
          <Image
            src="/images/monitor_4.png"
            alt="monitor"
            width={928}
            height={346}
          />
          <Text fontWeight="500" mb="4" mt="8">
            کیفیت بصری طلسم کننده
          </Text>
          <Text fontSize={'13px'} lineHeight="20px" mb="4">
            افرادی که گیمرهای ماهری باشند خوب می‌دانند که تا چه اندازه داشتن یک
            دستگاه حرفه‌ای برای ایجاد حس بسیار خوب حین بازی مؤثر است. یکی از
            دستگاه‌هایی که برای ایجاد تجربه واقعی بازی تأثیر زیادی می‌گذارد، یک
            صفحه نمایش خوب است. به ویژه اگر صفحه نمایش حرفه‌ای و فوق‌العاده
            باشد. مانیتور مخصوص بازی سامسونگ مدل LS49AG950N-M یک دستگاه فوق عریض
            و فوق‌العاده برای بازی است که تجربه به شدت متفاوتی را با آن کسب
            خواهید
          </Text>
          <Image
            src="/images/monitor_5.png"
            alt="monitor"
            width={928}
            height={346}
          />
        </TabPanel>
        <TabPanel pos="relative">
          <List spacing={30} w="max-content" pb="9">
            <ListItem color="description">
              توضیحات بلندگو :
              <Box
                as="span"
                color="text"
                bgColor="#f5f5f5"
                rounded={8}
                py="1.5"
                pr="2"
                pl="70px"
              >
                بلندگو ندارد
              </Box>
            </ListItem>
            <ListItem color="description">
              وزن :
              <Box
                as="span"
                color="text"
                bgColor="#f5f5f5"
                rounded={8}
                py="1.5"
                pr="2"
                pl="70px"
              >
                6570 گرم
              </Box>
            </ListItem>
            <ListItem color="description">
              نوع صفحه نمایش :
              <Box
                as="span"
                color="text"
                bgColor="#f5f5f5"
                rounded={8}
                py="1.5"
                pr="2"
                pl="70px"
              >
                مات
              </Box>
            </ListItem>
            <ListItem color="description">
              نوع مانیتور :
              <Box
                as="span"
                color="text"
                bgColor="#f5f5f5"
                rounded={8}
                py="1.5"
                pr="2"
                pl="70px"
              >
                اداری ، خمیده ، طراحی و ادیت ، عکاسی ، کاربری عمومی ، گیمینگ
              </Box>
            </ListItem>
            <ListItem color="description">
              نوع پس زمینه :
              <Box
                as="span"
                color="text"
                bgColor="#f5f5f5"
                rounded={8}
                py="1.5"
                pr="2"
                pl="70px"
              >
                LED
              </Box>
            </ListItem>
          </List>
          <Button
            pos="absolute"
            left={0}
            bottom="0"
            rightIcon={<AngleDownIcon boxSize="2" />}
            colorScheme="secondary"
            fontSize="13px"
            rounded="8"
            shadow="2px 3px 0px #15121D"
            h="8"
          >
            نمایش بیشتر
          </Button>
        </TabPanel>
        <TabPanel p="0">
          <Flex px="6" pt="9">
            <Flex flexDir="column" p="4" rounded="24" border="1.5px solid #eee">
              <Flex gap="2" fontSize="32px" align={'center'}>
                <StarFilledIcon boxSize={4} />
                ۴.۵
              </Flex>
              <Flex gap="2" fontSize="11" color="description">
                <StarFilledIcon boxSize={3} />
                <StarFilledIcon boxSize={3} />
                <StarFilledIcon boxSize={3} />
                <StarFilledIcon boxSize={3} />
                <StarFilledIcon boxSize={3} />
                از مجموع امتیازات
              </Flex>
              <List>
                <ListItem>
                  کیفیت تصویر
                  <Flex>
                    <Divider />
                    ۴.۷
                  </Flex>
                </ListItem>
              </List>
            </Flex>
          </Flex>{' '}
        </TabPanel>
        <TabPanel>four</TabPanel>
      </TabPanels>
    </Tabs>
  );
}

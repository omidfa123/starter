import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import NextLink from 'components/custom/NextLink';
import type { NextPage } from 'next';

const Profile: NextPage = () => {
  return (
    <Box as="main" layerStyle="container">
      <Breadcrumb
        as="section"
        color="disableText"
        pt={2.5}
        pb="62px"
        fontSize={13}
      >
        <BreadcrumbItem>
          <BreadcrumbLink href="/" as={NextLink}>
            فروشگاه اینترنتی Atramart
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="/profile" as={NextLink}>
            حساب کاربری
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage color="#FF5E5E">
          <BreadcrumbLink href="#">ویرایش اطلاعات</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Tabs isFitted variant="solid-rounded">
        <TabList sx={{ '& button': { fontSize: '14px', fontWeight: '500' } }}>
          <Tab>پروفایل کاربری</Tab>
          <Tab>لیست سفارشات</Tab>
          <Tab>خرید های اقساطی</Tab>
          <Tab>لیست آدرس ها </Tab>
          <Tab>نظرات داده شده</Tab>
          <Tab>علاقه مندی ها </Tab>
          <Tab>تاریخچه کیف پول</Tab>
        </TabList>

        <TabPanels
          bg="white"
          boxShadow="0px 0px 16px rgba(0, 0, 0, 0.08)"
          h="452px"
          roundedBottom={32}
        >
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Profile;

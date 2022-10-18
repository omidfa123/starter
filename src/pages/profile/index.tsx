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
import Select from 'components/custom/Select';
import type { NextPage } from 'next';
import ProfileForm from '../../components/custom/Forms/ProfileForm';

const Profile: NextPage = () => {
  return (
    <Box as="main" layerStyle="container" mb="124px">
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
          roundedBottom={32}
        >
          <TabPanel>
            <ProfileForm />
          </TabPanel>
          <TabPanel></TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Profile;

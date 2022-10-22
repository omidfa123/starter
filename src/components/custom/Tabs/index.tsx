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
import ProfileForm from '../Forms/ProfileForm';

interface IActiveTab {
  label: string;
  index: number;
  slug: string;
}

export default function ProfileTabs({
  activeTab,
  routes,
}: {
  activeTab: IActiveTab;
  routes: IActiveTab[];
}) {
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
          <BreadcrumbLink href="/profile/change-information" as={NextLink}>
            حساب کاربری
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage color="#FF5E5E">
          <BreadcrumbLink href="#">{activeTab.label}</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Tabs
        isFitted
        isLazy
        lazyBehavior="keepMounted"
        variant="solid-rounded"
        defaultIndex={activeTab.index}
      >
        <TabList sx={{ '& button': { fontSize: '14px', fontWeight: '500' } }}>
          {routes.map(tab => (
            <NextLink key={tab.index} href={`/profile/${tab.slug}`} replace>
              <Tab>{tab.label}</Tab>
            </NextLink>
          ))}
        </TabList>

        <TabPanels
          bg="white"
          boxShadow="0px 0px 16px rgba(0, 0, 0, 0.08)"
          roundedBottom={32}
        >
          <TabPanel>
            <ProfileForm />
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
}

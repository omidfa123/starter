import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import SingleProductTabCheck from './SingleProductTabCheck';
import SingleProductTabDetails from './SingleProductTabDetails';
import SingleProductTabComments from './SingleProductTabComments';
import SingleProductTabQuestions from 'components/custom/Tabs/SingleProductTab/SingleProductTabQuestions ';


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
          <SingleProductTabCheck />
        </TabPanel>
        <TabPanel pos="relative" p="48px 0 0 0">
          <SingleProductTabDetails />
        </TabPanel>
        <TabPanel p="0" pos="relative">
          <SingleProductTabComments />
        </TabPanel>
        <TabPanel p="0" pos="relative">
          <SingleProductTabQuestions />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

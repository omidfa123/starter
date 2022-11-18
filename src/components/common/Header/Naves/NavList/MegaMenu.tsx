import {
  Flex,
  Grid,
  GridItem,
  List,
  ListIcon,
  ListItem,
  Menu,
  MenuItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Portal,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import { AngleDownIcon, LampIcon, PhoneIcon } from 'components/common/Icons';
import { Dispatch, SetStateAction, useState } from 'react';

export default function MegaMenu({
  setAnimate,
}: {
  setAnimate: Dispatch<
    SetStateAction<{
      pos: string;
      width: string;
    }>
  >;
}) {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <Popover
      isLazy
      lazyBehavior="keepMounted"
      offset={[-195, 20]}
      trigger="hover"
      openDelay={0}
      isOpen
    >
      <PopoverTrigger>
        <ListItem
          cursor="pointer"
          onMouseOverCapture={() => setAnimate({ pos: '0px', width: '34px' })}
          onMouseLeave={() => setAnimate({ width: '0px', pos: '0px' })}
        >
          محصولات ما
          <ListIcon as={AngleDownIcon} boxSize={2.5} />
        </ListItem>
      </PopoverTrigger>
      <Portal>
        <PopoverContent
          rounded="32"
          shadow="0px 10px 16px rgba(0, 0, 0, 0.12)"
          border="none"
          minW={'1024px'}
          h="486px"
          onMouseOverCapture={() => setAnimate({ pos: '0px', width: '34px' })}
          onMouseLeave={() => setAnimate({ width: '0px', pos: '0px' })}
        >
          <Tabs
            orientation="vertical"
            isLazy
            lazyBehavior="keepMounted"
            variant="menu-line"
            flex="1"
            _after={{
              content: `url("data:image/svg+xml,%3Csvg width='183' height='221' viewBox='0 0 183 221' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg filter='url(%23filter0_di_0_1)'%3E%3Cpath d='M12.0547 42.8913C12.0547 35.4091 14.6481 27.8488 21.3804 24.584C32.7718 19.06 54.6912 15.7693 87.6447 41.2389C137.803 80.0058 98.4859 86.8308 136.63 124.497C137.942 125.793 139.259 127.249 140.326 128.753C168.887 168.984 147.831 189.535 136.838 196.776C133.315 199.097 129.096 199.874 124.878 199.874H44.0547C26.3816 199.874 12.0547 185.547 12.0547 167.874V42.8913Z' fill='%239773FF'/%3E%3C/g%3E%3Cg filter='url(%23filter1_di_0_1)'%3E%3Cpath d='M12.0547 65.3124C12.0547 57.8302 14.6606 50.1962 21.543 47.2612C31.7631 42.903 50.3183 41.2612 77.5902 62.3395C120.962 95.8613 87.1684 101.836 119.8 134.266C121.108 135.566 122.415 137.006 123.478 138.514C147.333 172.36 130.594 190.065 120.941 196.716C117.467 199.11 113.239 199.874 109.021 199.874H44.0547C26.3816 199.874 12.0547 185.547 12.0547 167.874V65.3124Z' fill='%23FFA826'/%3E%3C/g%3E%3Cg filter='url(%23filter2_di_0_1)'%3E%3Cpath d='M12.4622 90.8054C12.4622 83.3232 15.0959 75.5747 22.175 73.1523C30.9522 70.1487 45.7413 70.0874 66.7977 86.3617C102.61 114.041 74.9672 119.067 101.464 145.667C102.766 146.974 104.058 148.39 105.113 149.904C123.791 176.705 111.663 191.209 103.628 197.14C100.234 199.645 95.9831 200.392 91.7649 200.392H44.4622C26.7891 200.392 12.4622 186.065 12.4622 168.392V90.8054Z' fill='%23FF5E5E'/%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='filter0_di_0_1' x='0.0546875' y='0.709717' width='182.62' height='219.164' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3E%3CfeOffset dx='8'/%3E%3CfeGaussianBlur stdDeviation='10'/%3E%3CfeComposite in2='hardAlpha' operator='out'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0'/%3E%3CfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_0_1'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_0_1' result='shape'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3E%3CfeOffset/%3E%3CfeGaussianBlur stdDeviation='9.5'/%3E%3CfeComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0'/%3E%3CfeBlend mode='normal' in2='shape' result='effect2_innerShadow_0_1'/%3E%3C/filter%3E%3Cfilter id='filter1_di_0_1' x='0.0546875' y='24.541' width='163.649' height='195.333' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3E%3CfeOffset dx='8'/%3E%3CfeGaussianBlur stdDeviation='10'/%3E%3CfeComposite in2='hardAlpha' operator='out'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0'/%3E%3CfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_0_1'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_0_1' result='shape'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3E%3CfeOffset/%3E%3CfeGaussianBlur stdDeviation='9.5'/%3E%3CfeComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0'/%3E%3CfeBlend mode='normal' in2='shape' result='effect2_innerShadow_0_1'/%3E%3C/filter%3E%3Cfilter id='filter2_di_0_1' x='0.462158' y='51.605' width='142.518' height='168.787' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3E%3CfeOffset dx='8'/%3E%3CfeGaussianBlur stdDeviation='10'/%3E%3CfeComposite in2='hardAlpha' operator='out'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0'/%3E%3CfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_0_1'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_0_1' result='shape'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3E%3CfeOffset/%3E%3CfeGaussianBlur stdDeviation='9.5'/%3E%3CfeComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0'/%3E%3CfeBlend mode='normal' in2='shape' result='effect2_innerShadow_0_1'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E%0A")`,
              position: 'absolute',
              left: '-3',
              bottom: '-12',
            }}
            pos="relative"
            index={tabIndex}
            onChange={index => setTabIndex(index)}
            pt="26px"
          >
            <TabList>
              <Tab onMouseOver={() => setTabIndex(0)}>
                <PhoneIcon boxSize="6" /> کالای دیجیتال
              </Tab>
              <Tab onMouseOver={() => setTabIndex(1)}>
                <LampIcon boxSize="6" /> لوازم خانگی
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <List
                  sx={{
                    '& li': {
                      cursor: 'pointer',
                      userSelect: 'none',
                      '&:hover': { color: 'secondary.500' },
                    },
                  }}
                  spacing={2}
                  w="max-content"
                  h="486px"
                  display="flex"
                  flexDir="column"
                  flexWrap="wrap"
                >
                  <Flex
                    _before={{
                      content: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='18' fill='none'%3E%3Cpath fill='%239773FF' d='M2.275 8.01C5.072 6.596 7.187 3.7 7.888.21c.428 3.49 2.315 6.385 5.001 7.8.523.277 1.834.7 1.834.7s-1.344.423-1.889.7c-2.797 1.416-4.911 4.31-5.61 7.8-.428-3.493-2.317-6.387-5.003-7.803-.523-.274-1.834-.7-1.834-.7s1.344-.422 1.888-.696Z'/%3E%3C/svg%3E")`,
                      ml: '1',
                    }}
                    _after={{
                      content: `url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='9' height='8' fill='none'%3E%3Cpath fill='%239773FF' d='M6.028.502a.5.5 0 0 1-.146.353L3.324 3.412a.833.833 0 0 0 0 1.179l2.554 2.554a.5.5 0 0 1-.707.707L2.617 5.3a1.835 1.835 0 0 1 0-2.593L5.175.148a.5.5 0 0 1 .853.354Z'/%3E%3C/svg%3E")`,
                      mr: '2',
                    }}
                    color="secondary.500"
                    textStyle="medium13"
                  >
                    موبایل
                  </Flex>
                  {Array.from('12345678901234444444444444').map((_, index) => (
                    <ListItem
                      key={index}
                      textStyle="regular13"
                      color="description"
                      pr="1"
                    >
                      اپل
                    </ListItem>
                  ))}
                </List>
              </TabPanel>
              <TabPanel>two!!</TabPanel>
            </TabPanels>
          </Tabs>
        </PopoverContent>
      </Portal>
    </Popover>
  );
}

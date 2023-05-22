import { Box, Drawer, DrawerContent, DrawerOverlay, Flex, Icon, IconButton, List, ListIcon, ListItem, Text, useDisclosure } from '@chakra-ui/react';
import { AngleDownIcon, BlogIcon, CloseIcon, EnvelopFlatIcon, EnvelopIcon, HandShackIcon, InfoSquareIcon, InstagramIcon, LinkedinIcon, MenuIcon, MoneyIcon, PhoneIcon, TelFlatIcon, TelIcon, WhatsappIcon } from 'components/common/Icons';
import SearchMobile from './SearchMobile';

const list = [
  {bgColor: "#FFC700" , text: 'خرید اقساطی' , icon: HandShackIcon},
  {bgColor: "#F7C9FF" , text: 'فروش سازمانی' , icon: MoneyIcon},
  {bgColor: "#70FFF6" , text: 'مجله آترامارت' , icon: BlogIcon},
  {bgColor: "#9EFFA8" , text: 'درباره آترامارت' , icon: InfoSquareIcon},
  {bgColor: "#BDC0FF" , text: '۰۹۱۵۱۸۰۹۸۹۷ - ۰۹۳۳۱۸۰۰۹۸۹۷' , icon: TelFlatIcon},
  {bgColor: "#9EE2FF" , text: 'Example@yahoo.com' , icon: EnvelopFlatIcon}
]
const socials  = [
  {bgGradient:"linear-gradient(180deg, #0D6EFF 0%, #82B4FF 100%)" ,  icon: LinkedinIcon},
  {bgGradient:"linear-gradient(180deg, #65C01D 0%, #33880B 100%)" ,  icon: WhatsappIcon},
  {bgGradient:"linear-gradient(180deg, #9563FF 0%, #FC79FF 100%)" ,  icon: InstagramIcon},

]

function HeaderMobileApp() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const disclosure = useDisclosure()
  return (
    <>
      <Box
        as="header"
        pt="6"
        px="9"
        display={['flex', 'none']}
        gap="20px"
        zIndex={isOpen ? 0 : 2}
        pos="relative"
      >
        <SearchMobile
          isOpen={disclosure.isOpen}
          onClose={disclosure.onClose}
          onOpen={disclosure.onOpen}
        />
        <IconButton
          variant="ghost"
          aria-label="باز کردن منو"
          bgColor="#f5f5f5"
          icon={
            disclosure.isOpen ? (
              <CloseIcon boxSize={4} color="text" />
            ) : (
              <MenuIcon boxSize={6} />
            )
          }
          onClick={disclosure.isOpen ? disclosure.onClose : onOpen}
          h="12"
          minW="12"
          rounded={12}
        />
      </Box>
      <Drawer isOpen={isOpen} onClose={onClose} size="full">
        <DrawerOverlay zIndex={1} />
        <DrawerContent mb="135px">
          <Flex
            justifyContent="space-between"
            alignItems="center"
            px="9"
            pb="17.3px"
            pt="32px"
            boxShadow=" 0px 4px 12px rgba(0, 0, 0, 0.08)"
            roundedBottom={32}
            mb="10"
          >
            <Box textStyle="medium20">
              <MenuIcon boxSize={6} ml="3" />
              موارد بیشتر
            </Box>
            <IconButton
              variant="ghost"
              aria-label="باز کردن منو"
              bgColor="#f5f5f5"
              icon={
                <AngleDownIcon
                  transform={'rotate(90deg)'}
                  color="text"
                  boxSize={5}
                />
              }
              onClick={onClose}
              h="43px"
              minW="43px"
              rounded={12}
            />
          </Flex>
          <Box overflow="auto">
            <List px="9" spacing="6" mb="12">
              {list.map(li => (
                <ListItem
                  key={li.bgColor}
                  bgColor={li.bgColor}
                  rounded="12"
                  boxShadow={'2px 3px 0px #15121d'}
                  border="1.5px solid #15121d"
                  h="10"
                  pr="10px"
                >
                  <ListIcon
                    as={li.icon}
                    boxSize="5"
                    filter="drop-shadow(0px 0px 4px rgba(21, 18, 29, 0.25))"
                  />
                  <Text fontSize="13px" fontWeight="700">
                    {li.text}
                  </Text>
                  <ListIcon
                    as={AngleDownIcon}
                    mr="auto"
                    transform={'rotate(90deg)'}
                  />
                </ListItem>
              ))}
            </List>

            <List
              display={'flex'}
              gap="6"
              px="9"
              justifyContent="center"
              mb="135px"
            >
              {socials.map((social, index) => (
                <ListItem
                  key={index}
                  rounded="20"
                  bgGradient={social.bgGradient}
                  border="1.5px solid #15121d"
                  boxShadow={'2px 3px 0px #15121d'}
                  boxSize="93px"
                >
                  <ListIcon
                    as={social.icon}
                    color="white"
                    boxSize={12}
                    mx="auto"
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default HeaderMobileApp;

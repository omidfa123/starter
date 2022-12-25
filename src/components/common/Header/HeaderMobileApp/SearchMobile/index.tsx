import {
  Box,
  Center,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Input,
  InputGroup,
  InputLeftElement,
  position,
  useDisclosure,
  Text,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import { SearchIcon } from 'components/common/Icons';
import { useRef } from 'react';

function SearchMobile({
  isOpen,
  onOpen,
  onClose,
}: {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  return (
    <>
      <InputGroup aria-expanded={isOpen}>
        <InputLeftElement top="1">
          <SearchIcon boxSize={4} />
        </InputLeftElement>
        <Input
          variant="filled"
          bgColor="#F5F5F5"
          sx={{ '&:not(:placeholder-shown) + span': { display: 'none' } }}
          focusBorderColor="secondary.500"
          placeholder="جستجو در"
          h="12"
          _placeholder={{ color: 'text' }}
          fontSize="14"
          fontWeight={'medium'}
          p="0 12px"
          rounded="12"
          onClick={onOpen}
        />
        <Box
          as="span"
          position="absolute"
          top="53%"
          right="78px"
          zIndex="2"
          fontSize="14px"
          fontWeight="500"
          color="primary.500"
          transform="translateY(-50%) "
          pointerEvents="none"
        >
          آترامارت
        </Box>
      </InputGroup>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="top"
        isFullHeight
        trapFocus={false}
      >
        <DrawerOverlay zIndex={1} />
        <DrawerContent pt="116px" px="9">
          <Center
            justifyContent="space-between"
            bgColor="primary.500"
            rounded="8"
            color="white"
            p="6px 12px 6px 8px"
            pos="relative"
            border="1.5px solid #15121d"
            mb="8"
            _after={{
              content: "''",
              pos: 'absolute',
              w: '100%',
              h: '100%',
              bgColor: 'text',
              rounded: '8',
              right: '0',
              zIndex: '-1',
              transform: 'rotate(-2.5deg)',
            }}
          >
            دسته بندی ها
          </Center>
          <List spacing={4} fontWeight={500} fontSize="15" mb="8">
            <ListItem gap={0}>
              <ListIcon as={SearchIcon} color="disableUl" boxSize={5} />
              کارت گرافیک
            </ListItem>
            <ListItem gap={0}>
              <ListIcon as={SearchIcon} color="disableUl" boxSize={5} />
              کارت گرافیک گیمینگ
            </ListItem>
            <ListItem gap={0}>
              <ListIcon as={SearchIcon} color="disableUl" boxSize={5} />
              کارت گرافیک خفن
            </ListItem>
            <ListItem gap={0}>
              <ListIcon as={SearchIcon} color="disableUl" boxSize={5} />
              کارت گرافیک خفن
            </ListItem>
          </List>
          <Center
            justifyContent="space-between"
            bgColor="primary.500"
            rounded="8"
            color="white"
            p="6px 12px 6px 8px"
            pos="relative"
            border="1.5px solid #15121d"
            mb="8"
            _after={{
              content: "''",
              pos: 'absolute',
              w: '100%',
              h: '100%',
              bgColor: 'text',
              rounded: '8',
              right: '0',
              zIndex: '-1',
              transform: 'rotate(-2.5deg)',
            }}
          >
            برند ها
          </Center>
          <List gap={3} display="flex" flexWrap={"wrap"} fontWeight={500} fontSize="15" mb="8">
            <ListItem bgColor="#f5f5f5" w="84px" h="44px" display="flex" justifyContent="center" rounded="8">
            Asus
            </ListItem>
            <ListItem bgColor="#f5f5f5" w="84px" h="44px" display="flex" justifyContent="center" rounded="8">
            Asus
            </ListItem>         <ListItem bgColor="#f5f5f5" w="84px" h="44px" display="flex" justifyContent="center" rounded="8">
            Asus
            </ListItem>         <ListItem bgColor="#f5f5f5" w="84px" h="44px" display="flex" justifyContent="center" rounded="8">
            Asus
            </ListItem>
            <ListItem bgColor="#f5f5f5" w="84px" h="44px" display="flex" justifyContent="center" rounded="8">
            Asus
            </ListItem>
            <ListItem bgColor="#f5f5f5" w="84px" h="44px" display="flex" justifyContent="center" rounded="8">
            Asus
            </ListItem>
          </List>
          <Center
            justifyContent="space-between"
            bgColor="primary.500"
            rounded="8"
            color="white"
            p="6px 12px 6px 8px"
            pos="relative"
            border="1.5px solid #15121d"
            mb="8"
            _after={{
              content: "''",
              pos: 'absolute',
              w: '100%',
              h: '100%',
              bgColor: 'text',
              rounded: '8',
              right: '0',
              zIndex: '-1',
              transform: 'rotate(-2.5deg)',
            }}
          >
            محصولات
          </Center>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default SearchMobile;

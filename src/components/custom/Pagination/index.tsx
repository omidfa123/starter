import { List, ListIcon, ListItem } from '@chakra-ui/react';
import { AngleDownIcon } from 'components/common/Icons';

export default function Pagination() {
  return (
    <List
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap={3}
      sx={{ '& li': { cursor: 'pointer' } }}
    >
      <ListItem>
        <ListIcon as={AngleDownIcon} transform="rotate(-90deg)" />
      </ListItem>
      <ListItem
        border="1px solid #000"
        rounded={13}
        color="text"
        w="46px"
        h="46px"
        alignItems="center"
        justifyContent="center"
        fontSize={24}
      >
        ۴
      </ListItem>
      <ListItem
        border="1px solid #000"
        rounded={13}
        color="text"
        w="46px"
        h="46px"
        alignItems="center"
        justifyContent="center"
        fontSize={24}
      >
        ۳
      </ListItem>
      <ListItem
        border="1px solid #000"
        rounded={13}
        color="text"
        w="46px"
        h="46px"
        alignItems="center"
        justifyContent="center"
        fontSize={24}
      >
        ۲
      </ListItem>
      <ListItem
        border="1px solid"
        borderColor="secondary.500"
        bgColor="secondary.500"
        boxShadow=" 0px 0px 8px rgba(151, 115, 255, 0.48)"
        rounded={13}
        color="white"
        w="46px"
        h="46px"
        alignItems="center"
        justifyContent="center"
        fontSize={24}
      >
        ۱
      </ListItem>
      <ListItem justifyContent="end">
        <ListIcon
          as={AngleDownIcon}
          transform="rotate(90deg)"
          mr={2}
          color="description"
        />
      </ListItem>
    </List>
  );
}

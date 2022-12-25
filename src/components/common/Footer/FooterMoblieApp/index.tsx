import { Box,  List, ListIcon, ListItem,  Text } from "@chakra-ui/react"
import { AppIcon, BackupIcon, HomeIcon, ShoppingBagIcon, UserFlatIcon } from "components/common/Icons"




function FooterMobileApp() {
  return (
    <Box as="footer" px="9" zIndex={4}>
     <List zIndex={2}  bgColor="secondary.500" rounded={20}  display="flex" alignItems="center" justifyContent="space-evenly" border="2px solid #15121D" boxShadow="3.5px 4.5px 0px #15121D" mb="32px" py="10.5px" >
     <ListItem  flexDir={'column'} py="17">
      <ListIcon as={HomeIcon} boxSize="7" />
      <Text display="none" textStyle="medium12">g</Text>
     </ListItem>   
     <ListItem  flexDir={'column'} py="17">
      <ListIcon as={AppIcon} boxSize="7" />
      <Text display="none" textStyle="medium12">دسته بندی</Text>
     </ListItem>
     <ListItem  flexDir={'column'}  boxShadow="1.5px 2.5px 0px #15121D" p="16.94" bgColor="primary.500" border="1.5px solid #15121d" rounded="full">
      <ListIcon as={ShoppingBagIcon} boxSize="7" mx="auto"/>
      <Text display="none" textStyle="medium12">g</Text>
     </ListItem>
     <ListItem  flexDir={'column'} py="17"> 
      <ListIcon as={BackupIcon} boxSize="7" />
      <Text display="none" textStyle="medium12">g</Text>
     </ListItem>
     <ListItem  flexDir={'column'} py="17">
      <ListIcon as={UserFlatIcon} boxSize="7" />
      <Text display="none" textStyle="medium12">g</Text>
     </ListItem>

     </List>
     </Box>

  )
}

export default FooterMobileApp
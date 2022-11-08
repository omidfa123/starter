import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  HStack,
  List,
  ListItem,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { TikIcon } from 'components/common/Icons';
import { useUser } from 'components/hooks/useUser';
import { axiosInstance } from 'libs/axios/axiosInstance';
import { queryKeys } from 'libs/react-query/constants';
import { Dispatch, SetStateAction, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import DeleteAlert from '../Alerts/DeleteAlert';

const patchAddress = async ({
  address,
  token,
}: {
  address: any;
  token: string;
}) => {
  const { data } = await axiosInstance.patch(
    `/user/address/${address.id} `,
    address,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return data;
};

export default function AddressTable({
  user,
  token,
  setIsUpdate,
}: {
  user: any;
  token: string;
  setIsUpdate: Dispatch<SetStateAction<undefined>>;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data } = useUser(token, user.id);
  console.log(data);
  const queryClient = useQueryClient();
  const { mutate, isLoading, isError, isSuccess } = useMutation({
    mutationFn: patchAddress,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: [queryKeys.userInfo] }),
  });
  const { reset } = useFormContext();
  const [selectedId, setSelectedId] = useState(0);
  return (
    <>
      <List
        maxH="prose"
        spacing={3}
        overflowY="auto"
        maxHeight="400px"
        ml={5}
        dir="ltr"
        pr={4}
        sx={{
          '&::-webkit-scrollbar': {
            width: '4px',
            background: '#eee',
            borderRadius: '7px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'secondary.500',
            borderRadius: '7px',
          },
          ' &::-webkit-scrollbar-track-piece:end': {
            background: '#eee',
            borderRadius: '7px',
            marginBottom: '26px',
          },
          ' &::-webkit-scrollbar-track-piece:start': {
            background: '#eee',
            borderRadius: '7px',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: '#fff',
          },
        }}
      >
        {data?.user?.addresses.length > 0 ? (
          data?.user?.addresses.map((address: any) => (
            <ListItem
              key={address.id}
              rounded={24}
              border={'1.5px solid'}
              borderColor={address.is_default ? 'secondary.500' : 'divider'}
              p="13px 16px 18px 16px"
              flexDir="column"
              alignItems="start"
              dir="rtl"
            >
              <Box as="span" textStyle="medium16">
                {address.name}
              </Box>
              <Text fontSize={12} color="disableUl">
                {address.street}
              </Text>
              <Divider borderColor="disableUl" />
              <HStack justifyContent="space-between" w="full" alignItems="end">
                <List spacing={2} mb={2}>
                  <ListItem fontSize="12px" color="disableUl">
                    کد پستی :
                    <Box as="span" color="text">
                      {address.post_code}
                    </Box>
                  </ListItem>
                  <ListItem fontSize="12px" color="disableUl">
                    شماره موبایل :
                    <Box as="span" color="text">
                      {address.mobile}
                    </Box>
                  </ListItem>
                  <ListItem fontSize="12px" color="disableUl">
                    شماره ثابت :
                    <Box as="span" color="text">
                      {address.telephone}
                    </Box>
                  </ListItem>
                </List>
                <Flex flexWrap="wrap" gap="8px" w="138px">
                  <Button
                    leftIcon={
                      address.is_default ? (
                        <TikIcon boxSize="10px" />
                      ) : undefined
                    }
                    colorScheme={'secondary'}
                    variant={address.is_default ? 'solid' : 'outline'}
                    fontSize="12px"
                    fontWeight="400"
                    border="1px solid #15121d"
                    boxShadow={
                      address.is_default ? '1.5px 2.5px 0px #15121D' : 'none'
                    }
                    h={6}
                    w="137px"
                    rounded={6}
                    onClick={() => {
                      mutate({ address, token });
                      setSelectedId(address.id);
                    }}
                    isLoading={
                      isLoading && address.id === selectedId ? true : false
                    }
                  >
                    {address.is_default ? 'آدرس پیش فرض' : 'انتخاب کنید'}
                  </Button>
                  <Button
                    fontSize={12}
                    fontWeight="400"
                    boxShadow="1.5px 2.5px 0px #15121D"
                    rounded={6}
                    h={6}
                    w="70px"
                    border="1px solid #15121d"
                    bgColor="comparison"
                    _hover={{ bgColor: '#5C80FF' }}
                    _active={{ bgColor: '#2E5DFF' }}
                    onClick={() => {
                      reset({
                        ...address,
                        is_default: address.is_default ? '1' : '0',
                      });
                      setIsUpdate(address.id);
                    }}
                  >
                    ویرایش
                  </Button>
                  <Button
                    w="60px"
                    h={6}
                    pt="2px"
                    fontSize={12}
                    fontWeight="400"
                    rounded={6}
                    bgColor="#FF5E5E"
                    border="1px solid #15121D"
                    boxShadow="1.5px 2.5px 0px #15121D"
                    _hover={{ bgColor: '#FF0000' }}
                    _active={{ bgColor: '#CC0000' }}
                    onClick={() => {
                      setSelectedId(address.id);
                      onOpen();
                    }}
                  >
                    حذف
                  </Button>
                </Flex>
              </HStack>
            </ListItem>
          ))
        ) : (
          <Center
            as="p"
            textStyle="medium20"
            color="disableUl"
            textAlign="center"
            h="full"
          >
            هنوز آدرسی ثبت نشده است
          </Center>
        )}
      </List>

      <DeleteAlert
        isOpen={isOpen}
        onClose={onClose}
        token={token}
        id={selectedId}
      />
    </>
  );
}

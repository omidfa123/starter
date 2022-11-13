import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Text,
  useToast,
} from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { WarningIcon } from 'components/common/Icons';
import { axiosInstance } from 'libs/axios/axiosInstance';
import { queryKeys } from 'libs/react-query/constants';
import { useEffect, useRef } from 'react';

const deleteAddress = async ({ id, token }: { id: number; token: string }) => {
  const { data } = await axiosInstance.delete(`/user/address/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  console.log(data);
  return data;
};

export default function DeleteAlert({
  isOpen,
  onClose,
  token,
  id,
}: {
  isOpen: boolean;
  onClose: () => void;
  token: string;
  id: number;
}) {
  const ref = useRef(null);
  const toast = useToast();
  const queryClient = useQueryClient();
  const { data, mutate, isLoading, isSuccess, isError } = useMutation({
    mutationFn: deleteAddress,
    onSuccess: data =>
      queryClient.invalidateQueries({ queryKey: [queryKeys.userInfo] }),
  });
  useEffect(() => {
    if (isSuccess && data?.status === 'success') {
      toast({
        title: 'تغیرات با موفقیت ثبت شد',
        description: 'تمام تغیرات شما با موفقیت در سرور های ما ذخیره شد',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      onClose();
    }
    if (isError || data?.status === 'error') {
      toast({
        title: 'خطایی رخ داد',
        description: 'لطفا بعد از چند دقیقه دوباره تست کنید !!',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  }, [data?.status, isError, isSuccess, onClose, toast]);
  return (
    <AlertDialog
      leastDestructiveRef={ref}
      isOpen={isOpen}
      onClose={onClose}
      isCentered
    >
      <AlertDialogOverlay />
      <AlertDialogContent rounded={32} w="395px">
        <AlertDialogHeader p="20px 0 4px 0 ">
          <WarningIcon boxSize={10} display="block" mx="auto" />
        </AlertDialogHeader>
        <AlertDialogBody p="0 0 24px 0">
          <Text textAlign="center" textStyle="medium20">
            آیا از تصمیم خود اطمینان دارید؟
          </Text>
        </AlertDialogBody>
        <AlertDialogFooter justifyContent={'center'} gap={6} p="0 0 20px 0">
          <Button
            fontSize="15px"
            rounded={12}
            bgColor="#48E961"
            color="text"
            border=" 1.5px solid #15121D"
            boxShadow=" -2px 3px 0px #15121D"
            w="116px"
            h="40px"
            _hover={{
              bgColor: '#41d257',
            }}
            _active={{
              bgColor: '#3aba4e',
            }}
            onClick={() => {
              mutate({ id, token });
            }}
            isLoading={isLoading}
          >
            بله ، حتما
          </Button>
          <Button
            ref={ref}
            fontSize="15px"
            rounded={12}
            bgColor="#FF5E5E"
            border=" 1.5px solid #15121D"
            boxShadow=" -2px 3px 0px #15121D"
            w="116px"
            h="40px"
            _hover={{
              bgColor: '#e65555',
            }}
            _active={{
              bgColor: '#cc4b4b',
            }}
            onClick={onClose}
          >
            بزار فکر کنم
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

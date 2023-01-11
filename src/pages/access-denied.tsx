import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Text,
} from '@chakra-ui/react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';

const getAccess = async (username: string, password: string) => {
  const { data } = await axios.post('/api/getAccess', {
    password,
    username,
  });
  return data;
};

export default function AccessDenied() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [message, setMessage] = useState<{
    variant: string;
    message: string;
  }>();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    getAccess(
      e.target.elements.username.value,
      e.target.elements.password.value
    ).then(data => {
      setIsLoading(false);
      setMessage({
        variant: data.result === 'success' ? 'success' : 'error',
        message: data.message,
      });
      if (data.result === 'success') {
        router.push('/');
      }
    });
  };
  return (
    <Box w="full" minH="100vh" display="grid" placeItems="center">
      <Flex flexDir="column" gap="6" as="form" onSubmit={handleSubmit}>
        {isLoading || message ? (
          <Alert
            status={message ? (message.variant as any) : 'loading'}
            rounded="12"
          >
            <AlertIcon />
            <AlertTitle>
              {message ? message.message : 'لطفا صبر کنید'}
            </AlertTitle>
          </Alert>
        ) : null}

        <Heading sx={{ '& > span': { color: 'primary.500' } }} mb="2">
          دسترسی <span>محدود</span> شده است
        </Heading>
        <Input
          variant="outline"
          placeholder="نام کاربری"
          name="username"
          sx={{ '&:not(:placeholder-shown)': { direction: 'ltr' } }}
          focusBorderColor="primary.500"
        />
        <Input
          variant="outline"
          placeholder="رمز عبور"
          name="password"
          type="password"
          sx={{ '&:not(:placeholder-shown)': { direction: 'ltr' } }}
          focusBorderColor="primary.500"
        />
        <Button type="submit" isLoading={isLoading}>
          ورود
        </Button>
      </Flex>
    </Box>
  );
}

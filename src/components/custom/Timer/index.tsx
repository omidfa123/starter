import { Box, Center, Spinner, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export default function Timer({
  expiryTimeStamp,
  onExpire,
  isLoading,
}: {
  expiryTimeStamp: Date;
  onExpire: () => void;
  isLoading: boolean;
}) {
  const [reset, setReset] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const interval = window.setInterval(() => {
      const now = new Date();
      const difference = expiryTimeStamp.getTime() - now.getTime();
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);
      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);
      if (m <= 0 && s <= 0) {
        setIsFinished(true);
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [expiryTimeStamp, reset]);
  return (
    <Center sx={{ fontFeatureSettings: 'ss03' }}>
      {isLoading ? (
        <Spinner />
      ) : isFinished ? (
        <Box
          as="span"
          onClick={() => {
            setReset(true);
            setIsFinished(false);
            onExpire();
          }}
          color="description"
          cursor="pointer"
          borderBottom="1px dashed transparent"
          transition="all .1s cubic-bezier(0, 0, 0.2, 1)"
          _hover={{ borderColor: 'text', color: 'text' }}
        >
          ارسال دوباره کد تایید
        </Box>
      ) : (
        <>
          <Box minW="47px" color="description">{`۰${minutes.toLocaleString(
            'fa-IR'
          )}:${seconds > 10 ? '' : '۰'}${seconds.toLocaleString(
            'fa-IR'
          )}`}</Box>
          <Text color="description">مانده تا دریافت مجدد کد</Text>
        </>
      )}
    </Center>
  );
}

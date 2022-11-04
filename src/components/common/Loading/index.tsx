import { Spinner, Text } from '@chakra-ui/react';
import { useIsFetching, useIsMutating } from 'react-query';
export default function Loading() {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();
  return (
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="secondary.200"
      color="secondary.500"
      role="status"
      pos="fixed"
      zIndex="99999"
      top="50%"
      left="50%"
      transform="translate(-50% , -50%"
      display={isFetching || isMutating ? 'inherit' : 'none'}
    >
      <Text display="none">درحال بارگذاری...</Text>
    </Spinner>
  );
}

import { Box, chakra, shouldForwardProp } from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';

export const ChakraBox = chakra(motion.div, {
  shouldForwardProp: prop => isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default function NavUnderLine({
  pos,
  width,
}: {
  pos: string;
  width: string;
}) {
  return (
    <ChakraBox
      pos="absolute"
      display="flex"
      gap="2px"
      bottom="0"
      animate={{ x: pos, width }}
      initial={{ width: '0px' }}
      transition={{ type: 'spring', stiffness: '200 ', damping: '20' }}
    >
      <Box
        w="6px"
        h="3px"
        bgColor="secondary.500"
        rounded="10px"
        shadow="0px 0px 4px rgba(151, 115, 255, 0.68)"
      />
      <Box
        w="28px"
        h="3px"
        bgColor="secondary.500"
        rounded="10px"
        shadow="0px 0px 4px rgba(151, 115, 255, 0.68)"
      />
    </ChakraBox>
  );
}

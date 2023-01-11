import { Box } from '@chakra-ui/react';
import Image from "next/image";

export default function TopBanners() {
  return (
    <Box px="44px" mb="10">
      <Image src="/images/baner__1.png" alt="f" width={574} height={203} />
      <Image src="/images/baner__2.png" alt="f" width={574} height={203} />
    </Box>
  );
}

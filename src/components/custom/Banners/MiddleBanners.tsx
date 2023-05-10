import { Flex, Grid } from '@chakra-ui/react';
import Image from "next/image";

export default function MiddleBanners() {
  return (
    <Flex gridColumn="span 2" flexWrap="wrap" gap="37px 22px" mb="56px" px="9">
      <Image src={'/images/banner__3.png'} alt="" width={381} height={236} />
      <Image
        src={'/images/banner__4.png'}
        alt=""
        width={483}
        height={236}
        style={{ flex: 1 }}
      />
      <Image src={'/images/banner__5.png'} alt="" width={281} height={236} />
      <Image src={'/images/banner__8.png'} alt="" width={280} height={236} />
      <Image
        src={'/images/banner__7.png'}
        alt=""
        width={483}
        height={236}
        style={{ flex: 1 }}
      />
      <Image src={'/images/banner__6.png'} alt="" width={381} height={236} />
    </Flex>
  );
}

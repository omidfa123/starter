import NextLink from 'components/custom/NextLink';
import Image, { StaticImageData } from 'next/image';

export function Banner(props: StaticImageData) {
  console.log(props);

  return (
    <NextLink href="/" passHref={false}>
      <Image src={props} alt="some alt" style={{ height: '100%' }} />
    </NextLink>
  );
}

<<<<<<< HEAD
import NextLink from "components/custom/NextLink";
import Image, { StaticImageData } from "next/image";

export function Banner(props: StaticImageData) {
  return (
    <NextLink href="/" passHref={false}>
      <Image src={props} alt="some alt" style={{ height: "100%" }} />
    </NextLink>
  );
}
=======
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
>>>>>>> d7d871d22490353884ccd4210328c3c84f27241a

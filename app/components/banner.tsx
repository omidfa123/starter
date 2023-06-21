import Image from "next/image";
import Link from "next/link";

interface image {
  title: string;
  link: string;

  name: string;
  path: string;
}
interface BannerProps {
  grid: string;
  images: image[];
  type: string;
}

interface gridDetails {
  w: number[];
  h: number;
}

const gridDetails: Record<string, gridDetails> = {
  "2": { w: [582], h: 236 },
  "3-rtl": { w: [382, 484, 282], h: 238 },
  "3-ltr": { w: [282, 484, 382], h: 236 },
  "3": { w: [380], h: 232 },
};

const Banner = ({ grid, images }: BannerProps) => {
  return (
    <section className="grid-container mb-24">
      <div className="flex justify-between ">
        {images.map((pic, index) => (
          <Link href={pic.link || "/"} key={index}>
            <Image
              src={pic.path}
              alt={pic.title}
              width={
                grid.length <= 1
                  ? gridDetails[grid].w[0]
                  : gridDetails[grid].w[index]
              }
              height={gridDetails[grid].h}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Banner;

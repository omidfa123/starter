import Image from "next/image";
import Link from "next/link";

interface Ibaner {
  title: string;
  link: string;
  name: string;
  directory: string;
  path: string;
}

interface Iprops {
  type: string;
  title: string;
  has_banner: 1;
  auto_slide: 1;
  color: string;
  banner: Ibaner[];
  products: [];
}

export default function SpecialOffer({ banner }: Iprops) {
  return (
    <div className="grid-container mb-14">
      <div className="flex gap-[44px]">
        <div className="flex flex-col gap-2.5">
          {banner.map((item, index) => (
            <Link href={item.link} key={index}>
              <Image src={item.path} alt={item.name} width={538} height={204} />
            </Link>
          ))}
        </div>
        <div className="flex-1 rounded-3xl bg-white px-4 py-6 shadow-[0px_0px_8px_rgba(0,0,0,0.03)]">
          <div className="flex items-start justify-between">
            <div>
              <div className="mb-2 flex gap-1 text-xs font-medium text-primary">
                <div className="flex items-center gap-0.5">
                  <div className="h-[3px] w-1.5 rounded-full bg-primary shadow-[0px_0px_4px_rgba(255,168,38,0.4)] " />
                  <div className="h-[3px] w-[18px] rounded-full bg-primary shadow-[0px_0px_4px_rgba(255,168,38,0.4)] " />
                </div>
                <span> خرید کن ولی ارزون تر !</span>
              </div>
              <h3 className="text-2xl font-bold text-black">
                تخفیف های ویژه آترا
              </h3>
            </div>
            <Link
              href="/"
              className="flex w-max items-center gap-2 rounded-lg border border-primary px-2 py-1 text-[13px] font-medium text-primary"
            >
              <span>مشاهده محصولات</span>
              <span className="atra-icon-arrow-left-1 text-[8px]"></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

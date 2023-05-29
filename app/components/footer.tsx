import Link from "next/link";
import footerPic1 from "../../public/images/e.png";
import footerPic2 from "../../public/images/e2.png";
import footerPic3 from "../../public/images/e3.png";
import logo from "../../public/images/atramart_logo.png";

import Image from "next/image";
const footerList = [
  {
    heading: "دسته بندی",
    href: [
      "/our-products",
      "/assembly",
      "/assembly/ready",
      "/gaming",
      "/second-hand",
    ],
    lists: [
      "محصولات ما",
      "کیس های اسمبل شده",
      "اسمبل آنلاین",
      "محصولات گیمینگ",
      "دسته دوم",
    ],
  },
  {
    heading: "خدمات فروشگاه آترا",
    href: ["/credit", "/organizational", "/blog", "/about-us"],
    lists: ["خرید اقساطی", "فروش سازمانی", "مجله آترا", "درباره ما"],
  },
  {
    heading: "خدمات مربوط کاربران",
    href: ["/login", "/shopping-cart", "/rules", "/privacy", "/warranty"],
    lists: [
      "حساب کابری",
      "سبد خرید",
      "شرایط و قوانین",
      "حفظ حریم خصوصی",
      "گارانتی محصولات",
    ],
  },
];

const enamadPics = [
  {
    src: footerPic3,
    alt: "اینماد",
    href: "/",
  },
  {
    src: footerPic2,
    alt: "اینماد",
    href: "/",
  },
  {
    src: footerPic1,
    alt: "اینماد",
    href: "/",
  },
];
// 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
export default function Footer() {
  return (
    <footer>
      <div className="grid-container ">
        <div className="flex justify-between gap-[220px] border-y border-y-text-200 py-10">
          <div className="grid flex-1 grid-cols-fluid ">
            {footerList.map((item, index) => (
              <ul key={index} className="space-y-4">
                <li className="text-xl font-medium text-text">
                  {item.heading}
                </li>
                {item.lists.map((list, index) => (
                  <li
                    key={index}
                    className=" font-medium text-text-300 hover:text-primary"
                  >
                    <Link href={item.href[index]}>{list}</Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className="flex gap-4 ">
            {enamadPics.map((pic, index) => (
              <div
                key={index}
                className="flex w-1/3 place-items-center rounded-2xl border-[3px] border-white bg-[#f5f5f5] px-4"
              >
                <Link href={pic.href}>
                  <Image src={pic.src} alt={pic.alt} />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between pb-16 pt-10">
          <div className="basis-1/2 ">
            <a href="#logo" className="mb-6 block ">
              <Image alt="atramart logo" src={logo} />
            </a>
            <p>
              ما در فروشگاه اینترنتی آترامارک سعی بر این داریم تا بتوانیم تمام
              محصولات سرگرمی و الکترونیکی کاربران مان را به بهترین نحو و در
              بهترین قیمت ، فراهم کنیم تا بتوانیم تمام نیاز های کاربرانمان را در
              سریع ترین حالت ممکن رفع کنیم وما در فروشگاه اینترنتی آترامارک سعی
              بر این داریم تا بتوانیم تمام محصولات سرگرمی و الکترونیکی کاربران
              مان را به بهترین نحو و در بهترین قیمت.....
            </p>
          </div>
          <div className="self-center">
            <h6 className="mb-4  text-xl font-medium text-text">
              راه های ارتباطی
            </h6>
            <div className="flex  gap-8">
              <a
                href="tel:02177602250"
                className="flex items-center justify-center  gap-2 text-sm"
              >
                <span className="atra-icon-call flex h-8 w-8 items-center justify-center  rounded-full border border-text text-lg"></span>
                <span className="ss02">021-77602250</span>
              </a>
              <a
                href="mailto:your-email@example.com"
                className="flex items-center justify-center gap-2 text-sm "
              >
                <span className="atra-icon-envelop flex h-8 w-8 items-center justify-center  rounded-full border border-text text-lg"></span>
                <span>ehsanamani7878@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" grid-container bg-primary">
        <div className="flex items-center justify-between  py-2 ">
          <p className="font-medium">
            تمامی حقوق مادی و معنوی این وبسایت برای آترامارت محفوظ می باشد
          </p>
          <div className="flex h-6 gap-6 ">
            <Link href="/">
              <span className="sr-only">اینستا</span>
              <span className="atra-icon-instagram text-2xl"></span>
            </Link>
            <Link href="/">
              <span className="sr-only">اینستا</span>
              <span className="atra-icon-whatsapp text-2xl"></span>
            </Link>
            <Link href="/">
              <span className="sr-only">اینستا</span>
              <span className="atra-icon-linkedin text-2xl"></span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

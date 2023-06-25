import Link from "next/link";
import LinkWithQuery from "./ui/link-with-query";
import { classNames } from "../utils";

const sortOptions = [
  { name: "مرتبط‌ترین", id: "_0" },
  { name: "پربازدیدترین", id: "_1" },
  { name: "جدیدترین", id: "_2" },
  { name: "پرفروش‌ترین", id: "_3" },
  { name: "بیشترین‌تخفیف", id: "_4" },
  { name: "ارزان‌ترین", id: "_5" },
];

export default function SortBy() {
  return (
    <nav className="mb-4  flex items-center gap-6">
      <span className="flex h-[69px] w-[69px] items-center justify-center rounded-3xl bg-secondary px-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="39"
          height="25"
          fill="none"
        >
          <path
            fill="#fff"
            d="M37.26.824H1.635c-.315 0-.617.18-.84.502-.223.322-.348.758-.348 1.212 0 .455.125.891.348 1.213.223.321.525.502.84.502H37.26c.315 0 .617-.18.84-.502.222-.322.347-.758.347-1.212 0-.455-.125-.891-.348-1.213-.222-.321-.524-.502-.84-.502ZM31.321 11.11H7.571c-.315 0-.617.18-.84.502-.222.321-.347.757-.347 1.212 0 .454.125.89.348 1.212.222.321.524.502.84.502h23.75c.314 0 .616-.18.839-.502.223-.322.348-.758.348-1.212 0-.455-.125-.891-.348-1.213-.223-.321-.525-.502-.84-.502ZM25.384 21.395H13.509c-.315 0-.617.18-.84.502-.223.321-.348.757-.348 1.212 0 .454.125.89.348 1.212.223.321.525.502.84.502h11.875c.315 0 .617-.18.84-.502.222-.322.347-.758.347-1.212 0-.455-.125-.89-.348-1.212-.222-.322-.524-.502-.84-.502Z"
          />
        </svg>
      </span>
      <div className="flex items-center  rounded-3xl  bg-white px-4 py-2.5">
        <span className="pl-4 font-medium">مرتب سازی :</span>
        <span className="flex items-center text-[#BDBDBD]">
          {sortOptions.map((option) => (
            <LinkWithQuery
              key={option.id}
              className={
                "rounded-2xl px-5 py-3 text-[#BDBDBD] data-[sort='true']:bg-secondary data-[sort='true']:text-white"
              }
              text={option.name}
              searchParams={{ sort: option.id }}
            />
          ))}
        </span>
      </div>
    </nav>
  );
}

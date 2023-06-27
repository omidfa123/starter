"use client";
import Image from "next/image";
import pc from "../../public/images/pc.png";
import Link from "next/link";
import InfiniteScroll from "react-infinite-scroller";
import { useState, useRef, useEffect } from "react";
import { BASE_URL } from "../lib/constants/baseURL";
import { useSearchParams } from "next/navigation";

interface IProduct {
  product: {
    id: number;
    name: string;
    link: string;
    en_name: string;
  };
}

const InfiniteScrollComponent = ({
  initialItems,
}: {
  initialItems: IProduct[];
}) => {
  console.log(initialItems);
  const fetching = useRef(false);
  const [pages, setPages] = useState([initialItems]);
  let url = `${BASE_URL}/search?type=product_category&`;
  useSearchParams()?.forEach((value, key) => {
    url += `${key}=${value}&`;
    // console.log(url);
  });

  const items = pages.flatMap((page) => page);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = async (page: number) => {
    if (!fetching.current) {
      try {
        fetching.current = true;
        // console.log(`${url}page=${page}`);

        const response = await fetch(`${url}page=${page}`);
        const data = await response.json();
        console.log(data);
        console.log(page);
        if (data.response.products.length === 0) {
          setHasMore(false);
          return;
        }
        setPages((prev) => [...prev, data.response.products]);
      } finally {
        fetching.current = false;
      }
    }
  };
  useEffect(() => {
    setPages([initialItems]);
  }, [initialItems]);

  return (
    <div className="mb-32 flex-1">
      <InfiniteScroll
        hasMore={hasMore}
        pageStart={1}
        loadMore={loadMore}
        loader={
          <span key={0} className="loader">
            Loading ...
          </span>
        }
        element="main"
        className="grid grid-cols-fluid gap-y-8"
      >
        {items?.map((item) => (
          <Link
            href={item.product.link}
            key={item.product.id}
            className="group max-w-[238px] rounded-[32px] border-2 border-transparent  bg-white px-4 pt-4 transition-colors ease-in-out hover:border-primary"
          >
            <div className="relative mb-4 rounded-3xl   bg-text-500 pb-9 pt-3.5">
              <Image src={pc} alt="pc" className="mx-auto" />
              <div className="absolute bottom-2 right-2 flex flex-col items-center justify-center gap-2 ">
                <span className="atra-icon-comparison flex  h-[22px] w-[22px] items-center justify-center rounded-full border border-text text-xs transition-colors hover:border-blue-150 hover:bg-blue-150 hover:text-white "></span>
                <span className="atra-icon-hart flex  h-[22px] w-[22px] items-center justify-center rounded-full border border-text text-[15px] transition-colors hover:border-red-150  hover:bg-red-150 hover:text-white"></span>
              </div>
            </div>
            <p className="mb-9 text-[15px] font-medium">{item.product.name}</p>
            <div className="mb-[22px] flex items-center justify-between">
              <div className="flex items-center gap-1">
                <span className="text-xs">۳.۸</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="none"
                >
                  <path
                    fill="#FFC700"
                    d="M7.045.887 8.57 5.583h4.938L9.514 8.486l1.526 4.696-3.995-2.902-3.995 2.902 1.526-4.696L.58 5.583h4.938L7.045.887Z"
                  />
                </svg>
              </div>
              <div className=" flex items-center gap-1">
                <span className="text-2xl">۲٬۳۰۰٬۰۰۰</span>
                <span className="font-medium">تومان</span>
              </div>
            </div>
            <button className="mx-auto  -mb-0.5  flex  h-8 w-[87px] items-center justify-center rounded-t-[32px] bg-primary group-hover:animate-[grow_.3s_ease-in-out_forwards] group-hover:bg-[#1b6rd]  ">
              <span className="atra-icon-arrow-up text-lg group-hover:invisible group-hover:absolute"></span>
              <span className="invisible  absolute text-xs font-medium group-hover:visible">
                افزودن به سبد خرید
              </span>
            </button>
          </Link>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default InfiniteScrollComponent;

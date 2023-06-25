"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { classNames } from "../../utils";

interface Props {
  href?: string;
  text: string;
  searchParams?: { [key: string]: string };
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export default function LinkWithQuery({
  href,
  text,
  searchParams,
  className = "",
  children,
  onClick,
}: Props) {
  const getParam = useSearchParams();

  const q = getParam?.get("q") || "";
  const sort = getParam?.get("sort") || "";
  const product_limit = getParam?.get("product_limit") || "";
  const params: { [key: string]: string } = {
    q,
    type: "product",
    ...searchParams,
  };
  if (product_limit && !searchParams?.product_limit) {
    params.product_limit = product_limit;
  }
  if (sort && !searchParams?.sort) {
    params.sort = sort;
  }

  return (
    <Link
      href={{ pathname: "/search", query: params }}
      className={className}
      data-sort={sort === searchParams?.sort ? true : false}
      data-limit={product_limit === searchParams?.product_limit ? true : false}
      onClick={onClick}
    >
      {children}
      {text}
    </Link>
  );
}

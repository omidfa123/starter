"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { classNames } from "../../utils";

interface Props {
  href?: string;
  text: string;
  searchParams?: {
    [key: string]: string | number | { [key: string]: string | number };
  };
  className?: string;
  children?: React.ReactNode;
  isDefault?: boolean;
  onClick?: () => void;
}

export default function LinkWithQuery({
  href,
  text,
  searchParams,
  className = "",
  children,
  onClick,
  isDefault,
}: Props) {
  const getParam = useSearchParams();

  const q = getParam?.get("q") || "";
  const sort = getParam?.get("sort") || "";
  const product_limit = getParam?.get("product_limit") || "";
  const attributes = getParam?.get("attributes") || "";

  const params: { [key: string]: string } = {
    q,
    type: "product_category",
    ...searchParams,
  };
  if (product_limit && !searchParams?.product_limit) {
    params.product_limit = product_limit;
  }
  if (sort && !searchParams?.sort) {
    params.sort = sort;
  }
  if (attributes && !searchParams?.attributes) {
    params.attributes = attributes;
  }

  return (
    <Link
      href={{ pathname: "/search", query: params }}
      className={className}
      data-sort={
        sort === searchParams?.sort
          ? true
          : isDefault && !sort
          ? true
          : undefined
      }
      data-limit={
        product_limit === searchParams?.product_limit
          ? true
          : isDefault && !product_limit
          ? true
          : undefined
      }
      onClick={onClick}
    >
      {children}
      {text}
    </Link>
  );
}

"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Breadcrumbs() {
  const searchParam = useSearchParams()?.get("q");
  return (
    <nav className="mb-6">
      <ol className="flex text-xs text-text-150">
        <li>
          <Link href="/" className="">
            فروشگاه آترامارت
          </Link>
        </li>
        <li>
          <span className="mx-2">/</span>
        </li>
        <li>
          <a href="#" className="text-[#FF5E5E]">
            {`جستجو برای ${searchParam}`}
          </a>
        </li>
      </ol>
    </nav>
  );
}

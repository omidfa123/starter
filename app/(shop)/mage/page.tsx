"use client";
import { createElement } from "react";
import graphic from "../../../public/images/graphicCart.png";
import Image from "next/image";
export default function MagePage() {
  return (
    <div>
      <p>picture</p>
      <Image src={graphic} alt="sd" className="hover:animate-bounce" />
    </div>
  );
}

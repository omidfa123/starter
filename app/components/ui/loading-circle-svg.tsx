import React from "react";

export default function LoadingCircleSvg() {
  return (
    <svg
      width="32"
      height="32"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
    >
      <path
        className="animate-[circle1_1.2s_linear_infinite_normal_forwards]"
        d="M0,3C0,1.343146,1.343146,0,3,0C4.656854,0,6,1.343146,6,3C6,4.656854,4.656854,6,3,6C1.343146,6,0,4.656854,0,3Z"
        transform="matrix(1 0 0 1 17 9)"
        opacity="0.9"
        fill="#81858b"
        stroke="none"
        strokeWidth="1"
      ></path>
      <rect
        className="animate-[circle2_1.2s_linear_infinite_normal_forwards]"
        width="6"
        height="6"
        rx="3"
        ry="3"
        transform="matrix(1 0 0 1 9 9)"
        opacity="0.6"
        fill="#81858b"
        stroke="none"
        strokeWidth="1"
      ></rect>
      <rect
        className="animate-[circle3_1.2s_linear_infinite_normal_forwards]"
        width="6"
        height="6"
        rx="3"
        ry="3"
        transform="matrix(1 0 0 1 0.94007500000000 9)"
        opacity="0.3"
        fill="#81858b"
        stroke="none"
        strokeWidth="1"
      ></rect>
    </svg>
  );
}

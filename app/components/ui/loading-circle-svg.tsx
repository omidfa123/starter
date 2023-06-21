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

{
  /* <svg
                aria-labelledby="li97cgj-aria"
                role="img"
                viewBox="0 0 320 530"
                className="m-auto h-full w-full"
              >
                <title id="li97cgj-aria">Loading...</title>
                <rect
                  role="presentation"
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  clip-path="url(#li97cgj-diff)"
                  style={{ fill: "url(#li97cgj-animated-diff)" }}
                ></rect>
                <defs>
                  <clipPath id="li97cgj-diff">
                    <rect
                      x="16"
                      y="16"
                      rx="8"
                      ry="8"
                      width="288"
                      height="272"
                    ></rect>
                    <rect
                      x="16"
                      y="308"
                      rx="2"
                      ry="2"
                      width="288"
                      height="20"
                    ></rect>
                    <rect
                      x="164"
                      y="344"
                      rx="2"
                      ry="2"
                      width="140"
                      height="20"
                    ></rect>
                    <rect
                      x="16"
                      y="400"
                      rx="2"
                      ry="2"
                      width="98"
                      height="20"
                    ></rect>
                    <rect
                      x="16"
                      y="454"
                      rx="2"
                      ry="2"
                      width="136"
                      height="20"
                    ></rect>
                  </clipPath>
                  <linearGradient id="li97cgj-animated-diff">
                    <stop offset="0%" stopColor="#f3f3f3" stopOpacity="1">
                      <animate
                        attributeName="offset"
                        values="-2; -2; 1"
                        keyTimes="0; 0.25; 1"
                        dur="2s"
                        repeatCount="indefinite"
                      ></animate>
                    </stop>
                    <stop offset="50%" stopColor="#ecebeb" stopOpacity="1">
                      <animate
                        attributeName="offset"
                        values="-1; -1; 2"
                        keyTimes="0; 0.25; 1"
                        dur="2s"
                        repeatCount="indefinite"
                      ></animate>
                    </stop>
                    <stop offset="100%" stopColor="#f3f3f3" stopOpacity="1">
                      <animate
                        attributeName="offset"
                        values="0; 0; 3"
                        keyTimes="0; 0.25; 1"
                        dur="2s"
                        repeatCount="indefinite"
                      ></animate>
                    </stop>
                  </linearGradient>
                </defs>
              </svg> */
}

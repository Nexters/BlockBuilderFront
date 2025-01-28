import type { SVGProps } from 'react';
const SvgNews = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <mask
      id="news_svg__a"
      width={24}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path fill="#D9D9D9" d="M0 0h24v24H0z" />
    </mask>
    <g mask="url(#news_svg__a)">
      <path
        fill="currentColor"
        d="M5 19h9v-4q0-.424.287-.713A.97.97 0 0 1 15 14h4V5H5zm0 2q-.824 0-1.412-.587A1.93 1.93 0 0 1 3 19V5q0-.824.587-1.412A1.93 1.93 0 0 1 5 3h14q.824 0 1.413.587Q21 4.176 21 5v9.175a1.98 1.98 0 0 1-.575 1.4l-4.85 4.85a1.975 1.975 0 0 1-1.4.575zm6-7H8a.97.97 0 0 1-.713-.287A.97.97 0 0 1 7 13q0-.424.287-.713A.97.97 0 0 1 8 12h3q.424 0 .713.287.287.288.287.713 0 .424-.287.713A.97.97 0 0 1 11 14m5-4H8a.97.97 0 0 1-.713-.287A.97.97 0 0 1 7 9q0-.424.287-.713A.97.97 0 0 1 8 8h8q.424 0 .712.287Q17 8.576 17 9q0 .424-.288.713A.97.97 0 0 1 16 10"
        className={props.className}
      />
    </g>
  </svg>
);
export default SvgNews;

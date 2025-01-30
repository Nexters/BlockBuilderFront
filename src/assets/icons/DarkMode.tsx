import type { SVGProps } from 'react';
const SvgDarkMode = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" {...props}>
    <mask
      id="dark_mode_svg__a"
      width={20}
      height={20}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path fill="#D9D9D9" d="M0 0h20v20H0z" />
    </mask>
    <g mask="url(#dark_mode_svg__a)">
      <path
        fill="currentColor"
        d="M10.063 18a8.032 8.032 0 0 1-5.719-2.344A8.03 8.03 0 0 1 2 9.937q0-2.583 1.469-4.666a7.97 7.97 0 0 1 3.864-2.959.79.79 0 0 1 .782.084q.364.249.343.666a8.6 8.6 0 0 0 .563 3.323 8.2 8.2 0 0 0 1.833 2.823A7.8 7.8 0 0 0 13.667 11a8.6 8.6 0 0 0 3.312.52q.459-.02.709.292.248.313.104.73a8.03 8.03 0 0 1-3 3.958 8 8 0 0 1-4.73 1.5"
        className={props.className}
      />
    </g>
  </svg>
);
export default SvgDarkMode;

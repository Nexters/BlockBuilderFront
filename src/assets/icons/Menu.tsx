import type { SVGProps } from 'react';
const SvgMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} fill="none" {...props}>
    <mask
      id="menu_svg__a"
      width={25}
      height={25}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path fill="#D9D9D9" d="M.619.559h24v24h-24z" />
    </mask>
    <g mask="url(#menu_svg__a)">
      <path
        fill={props.fill ?? '#1D1D1D'}
        d="M4.62 18.56a.97.97 0 0 1-.713-.288.97.97 0 0 1-.288-.713q0-.424.288-.712a.97.97 0 0 1 .712-.288h16q.425 0 .713.288.287.287.287.712 0 .424-.287.713a.97.97 0 0 1-.713.287zm0-5a.97.97 0 0 1-.713-.288.97.97 0 0 1-.288-.713q0-.424.288-.712a.97.97 0 0 1 .712-.288h16q.425 0 .713.288.287.287.287.712 0 .424-.287.713a.97.97 0 0 1-.713.287zm0-5a.97.97 0 0 1-.713-.288.97.97 0 0 1-.288-.713q0-.424.288-.712a.97.97 0 0 1 .712-.288h16q.425 0 .713.288.287.287.287.712 0 .424-.287.713a.97.97 0 0 1-.713.287z"
      />
    </g>
  </svg>
);
export default SvgMenu;

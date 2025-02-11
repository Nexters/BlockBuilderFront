import type { SVGProps } from 'react';
const SvgBag = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width ?? 18} height={props.height ?? 18} {...props}>
    <mask
      id="bag_svg__a"
      width={18}
      height={18}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path fill="#D9D9D9" d="M0 0h18v18H0z" />
    </mask>
    <g mask="url(#bag_svg__a)">
      <path
        fill="currentColor"
        d="M6.544 15.3a3.7 3.7 0 0 1-2.719-1.125A3.7 3.7 0 0 1 2.7 11.463a3.9 3.9 0 0 1 .825-2.407l2.437-3.093-.964-2.322A.66.66 0 0 1 5.05 3q.194-.3.582-.3h6.743q.384 0 .576.3.194.3.048.641l-.98 2.322 2.456 3.093q.396.5.61 1.123.215.621.215 1.277 0 1.594-1.121 2.719T11.456 15.3zm2.451-3.375q-.651 0-1.11-.464a1.53 1.53 0 0 1-.46-1.116q0-.651.464-1.11t1.116-.46 1.11.464.46 1.116q0 .651-.464 1.11t-1.116.46M7.2 5.4h3.6l.563-1.35H6.637zm-.656 8.55h4.912q1.032 0 1.763-.731a2.4 2.4 0 0 0 .731-1.76 2.4 2.4 0 0 0-.14-.828 2.6 2.6 0 0 0-.404-.731l-2.475-3.15H7.07L4.594 9.9q-.263.338-.403.731-.141.394-.141.827a2.4 2.4 0 0 0 .731 1.76 2.4 2.4 0 0 0 1.763.732"
        className={props.className}
      />
    </g>
  </svg>
);
export default SvgBag;

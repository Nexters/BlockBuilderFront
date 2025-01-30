import type { SVGProps } from 'react';
const SvgPoll = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <mask
      id="poll_svg__a"
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
    <g mask="url(#poll_svg__a)">
      <path
        fill="currentColor"
        d="M5 22q-.824 0-1.412-.587A1.93 1.93 0 0 1 3 20v-3.8q0-.35.125-.7a1.8 1.8 0 0 1 .375-.625l1.55-1.75a.93.93 0 0 1 .713-.338.96.96 0 0 1 .737.288q.274.274.3.675a.91.91 0 0 1-.25.7L5.175 16h13.65L17.5 14.5a.91.91 0 0 1-.25-.7q.026-.4.3-.675a.96.96 0 0 1 .738-.287q.437.012.712.337l1.5 1.7q.25.275.375.625t.125.7V20q0 .824-.587 1.413A1.93 1.93 0 0 1 19 22zm5.625-7.625L7.1 10.85a1.88 1.88 0 0 1-.562-1.413q.012-.837.587-1.412l4.9-4.9q.575-.574 1.425-.6.85-.025 1.425.55L18.4 6.6q.574.575.6 1.4a1.82 1.82 0 0 1-.55 1.4l-5 5q-.575.574-1.412.563a1.97 1.97 0 0 1-1.413-.588M17 8.025 13.475 4.5l-4.95 4.95 3.525 3.525z"
        className={props.className}
      />
    </g>
  </svg>
);
export default SvgPoll;

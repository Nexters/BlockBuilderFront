import type { SVGProps } from 'react';
const SvgChat = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <mask
      id="chat_svg__a"
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
    <g mask="url(#chat_svg__a)">
      <path
        fill="currentColor"
        d="M21 20.6a.9.9 0 0 1-.375-.075 1 1 0 0 1-.325-.225L18 18H8q-.824 0-1.412-.587A1.93 1.93 0 0 1 6 16v-1h11q.824 0 1.413-.588Q19 13.826 19 13V6h1q.824 0 1.413.588Q22 7.175 22 8v11.575q0 .45-.3.738a.98.98 0 0 1-.7.287M4 12.175 5.175 11H15V4H4zM3 15.6a.98.98 0 0 1-.7-.287.98.98 0 0 1-.3-.738V4q0-.824.587-1.412A1.93 1.93 0 0 1 4 2h11q.824 0 1.413.587Q17 3.176 17 4v7q0 .825-.587 1.412A1.93 1.93 0 0 1 15 13H6l-2.3 2.3q-.15.15-.325.225A.9.9 0 0 1 3 15.6"
        className={props.className}
      />
    </g>
  </svg>
);
export default SvgChat;

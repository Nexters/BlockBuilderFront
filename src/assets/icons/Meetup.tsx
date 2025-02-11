import type { SVGProps } from 'react';
const SvgMeetup = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width ?? 18} height={props.height ?? 18} {...props}>
    <mask
      id="meetup_svg__a"
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
    <g mask="url(#meetup_svg__a)">
      <path
        fill="currentColor"
        d="M4.5 16.5q-.618 0-1.06-.44A1.45 1.45 0 0 1 3 15V3q0-.62.44-1.06.442-.44 1.06-.44h9q.619 0 1.06.44Q15 2.383 15 3v12q0 .619-.44 1.06-.442.44-1.06.44h-2.25L10.5 15h-3l-.75 1.5zm0-1.5h1.313l.75-1.5h4.875l.75 1.5H13.5V3h-9zM6 11.25h6v-.412q0-.976-.937-1.407A4.9 4.9 0 0 0 9 9q-1.125 0-2.062.431Q6 9.863 6 10.838zm3-3q.619 0 1.06-.44.44-.44.44-1.06 0-.619-.44-1.06A1.44 1.44 0 0 0 9 5.25q-.619 0-1.06.44-.44.442-.44 1.06t.44 1.06q.442.44 1.06.44"
        className={props.className}
      />
    </g>
  </svg>
);
export default SvgMeetup;

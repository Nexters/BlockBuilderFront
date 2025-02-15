import { SVGProps } from 'react';

const SvgCheckCircle = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 18 19" xmlns="http://www.w3.org/2000/svg" width={18} height={19} fill="none" {...props}>
    <mask
      id="check_circle_svg__a"
      width={18}
      height={19}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path fill="#D9D9D9" d="M0 .552h18v18H0z" />
    </mask>
    <g mask="url(#check_circle_svg__a)">
      <path
        fill="currentColor"
        d="M7.95 10.902 6.338 9.289a.71.71 0 0 0-.526-.206.71.71 0 0 0-.525.206.71.71 0 0 0-.206.525q0 .32.206.525l2.138 2.138a.72.72 0 0 0 .525.225.72.72 0 0 0 .525-.225l4.238-4.238a.71.71 0 0 0 .206-.525.71.71 0 0 0-.207-.525.7.7 0 0 0-.524-.206.71.71 0 0 0-.526.206zM9 17.052a7.3 7.3 0 0 1-2.925-.59 7.6 7.6 0 0 1-2.381-1.604 7.6 7.6 0 0 1-1.603-2.381A7.3 7.3 0 0 1 1.5 9.552q0-1.557.59-2.925a7.6 7.6 0 0 1 1.604-2.381 7.6 7.6 0 0 1 2.381-1.604A7.3 7.3 0 0 1 9 2.052q1.555 0 2.925.59a7.6 7.6 0 0 1 2.381 1.604 7.6 7.6 0 0 1 1.603 2.38q.591 1.37.591 2.926a7.3 7.3 0 0 1-.59 2.925 7.6 7.6 0 0 1-1.604 2.381 7.6 7.6 0 0 1-2.381 1.603 7.3 7.3 0 0 1-2.925.59m0-1.5q2.513 0 4.256-1.744T15 9.552t-1.744-4.256Q11.513 3.552 9 3.552T4.744 5.296Q3 7.039 3 9.552t1.744 4.256T9 15.552"
        className={className}
      />
    </g>
  </svg>
);
export default SvgCheckCircle;

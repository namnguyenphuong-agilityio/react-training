import { SVGProps } from 'react';

const MinusIcon = ({ width = '20', height = '20' }: SVGProps<SVGSVGElement>) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 20 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M17.8125 10C17.8125 10.2486 17.7137 10.4871 17.5379 10.6629C17.3621 10.8387 17.1236 10.9375 16.875 10.9375H3.125C2.87636 10.9375 2.6379 10.8387 2.46209 10.6629C2.28627 10.4871 2.1875 10.2486 2.1875 10C2.1875 9.75136 2.28627 9.5129 2.46209 9.33709C2.6379 9.16127 2.87636 9.0625 3.125 9.0625H16.875C17.1236 9.0625 17.3621 9.16127 17.5379 9.33709C17.7137 9.5129 17.8125 9.75136 17.8125 10Z'
      fill='black'
    />
  </svg>
);
export default MinusIcon;
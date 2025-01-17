import { SVGProps } from 'react';

const StarIcon = ({ width = '16', height = '15', className }: SVGProps<SVGSVGElement>) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox='0 0 16 15'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M7.73375 0.279785L9.92481 4.99779L15.089 5.62367L11.279 9.16544L12.2795 14.2703L7.73375 11.7412L3.18796 14.2703L4.18853 9.16544L0.378517 5.62367L5.54268 4.99779L7.73375 0.279785Z'
      fill='#FFC633'
    />
  </svg>
);

export default StarIcon;

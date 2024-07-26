import { SVGProps } from 'react';

const HalfStarIcon = ({ width = '8', height = '15', className }: SVGProps<SVGSVGElement>) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox='0 0 8 15'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M3.45422 14.2703L8.00001 11.7412V0.279785L5.80894 4.99779L0.644775 5.62367L4.45478 9.16544L3.45422 14.2703Z'
      fill='#FFC633'
    />
  </svg>
);
export default HalfStarIcon;

import { SVGProps } from 'react';

const FacebookIcon = ({ width = '28', height = '28' }: SVGProps<SVGSVGElement>) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 28 29'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='14' cy='14.5837' r='14' fill='black' />
    <path
      d='M12.7087 20.8875V15.334H10.8398V13.1697H12.7087V11.5736C12.7087 9.72126 13.84 8.71265 15.4924 8.71265C16.2839 8.71265 16.9642 8.77158 17.1624 8.79792V10.7337L16.0164 10.7342C15.1178 10.7342 14.9438 11.1612 14.9438 11.7879V13.1697H17.087L16.8079 15.334H14.9438V20.8875H12.7087Z'
      fill='white'
    />
  </svg>
);
export default FacebookIcon;
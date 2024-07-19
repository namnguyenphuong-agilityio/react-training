import { SVGProps } from 'react';

const ApplePayIcon = ({ width = '40', height = '26' }: SVGProps<SVGSVGElement>) => {
  const svgWidth = Number(width) + 8.68 * 2;
  const svgHeight = Number(height) + 4.85 * 2;
  const strokeWidth = 0.1921;
  return (
    <svg
      width={svgWidth}
      height={svgHeight}
      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g filter='url(#filter0_dd_35_1255)'>
        <rect x='8.72876' y='5' width={width} height={height} rx='4.6104' fill='white' />
        <rect
          x='8.63271'
          y='4.90395'
          width={Number(width) + strokeWidth}
          height={Number(height) + strokeWidth}
          rx='4.70645'
          stroke='#D6DCE5'
          stroke-width={strokeWidth}
        />
        <path
          d='M21.6526 14.4989C21.9192 14.1654 22.1001 13.7177 22.0523 13.2603C21.6621 13.2797 21.1859 13.5177 20.9102 13.8514C20.6627 14.1371 20.4436 14.6036 20.5007 15.0419C20.9387 15.0799 21.3764 14.8229 21.6526 14.4989Z'
          fill='#000008'
        />
        <path
          d='M22.0474 15.1275C21.4112 15.0896 20.8703 15.4885 20.5665 15.4885C20.2626 15.4885 19.7974 15.1466 19.2942 15.1558C18.6393 15.1654 18.0316 15.5357 17.6993 16.1246C17.0157 17.3028 17.5189 19.0504 18.1836 20.0099C18.5064 20.4847 18.8954 21.0074 19.4081 20.9886C19.8924 20.9696 20.0822 20.675 20.671 20.675C21.2593 20.675 21.4303 20.9886 21.943 20.9791C22.4746 20.9696 22.807 20.5041 23.1298 20.0289C23.5001 19.4878 23.6517 18.9653 23.6613 18.9366C23.6517 18.9271 22.636 18.5374 22.6266 17.3691C22.617 16.3908 23.4241 15.9255 23.462 15.8966C23.0063 15.2226 22.2942 15.1466 22.0474 15.1275Z'
          fill='#000008'
        />
        <path
          d='M27.5865 13.8035C28.9692 13.8035 29.932 14.7566 29.932 16.1443C29.932 17.5369 28.9494 18.4949 27.5519 18.4949H26.021V20.9294H24.9149V13.8035L27.5865 13.8035ZM26.021 17.5665H27.2901C28.2531 17.5665 28.8012 17.048 28.8012 16.1492C28.8012 15.2505 28.2531 14.7369 27.2951 14.7369H26.021V17.5665Z'
          fill='#000008'
        />
        <path
          d='M30.221 19.4529C30.221 18.5442 30.9173 17.9862 32.1519 17.9171L33.574 17.8332V17.4332C33.574 16.8554 33.1839 16.5097 32.5322 16.5097C31.9148 16.5097 31.5296 16.806 31.4358 17.2702H30.4284C30.4877 16.3319 31.2876 15.6406 32.5716 15.6406C33.8308 15.6406 34.6357 16.3072 34.6357 17.3492V20.9294H33.6135V20.0751H33.5889C33.2877 20.6529 32.6309 21.0183 31.9494 21.0183C30.9321 21.0183 30.221 20.3862 30.221 19.4529ZM33.574 18.9838V18.5739L32.295 18.6529C31.658 18.6974 31.2975 18.9789 31.2975 19.4233C31.2975 19.8776 31.6728 20.1739 32.2457 20.1739C32.9913 20.1739 33.574 19.6603 33.574 18.9838Z'
          fill='#000008'
        />
        <path
          d='M35.6008 22.8406V21.9763C35.6797 21.9961 35.8574 21.9961 35.9464 21.9961C36.4402 21.9961 36.7069 21.7887 36.8698 21.2554C36.8698 21.2455 36.9637 20.9393 36.9637 20.9344L35.0872 15.7344H36.2426L37.5563 19.9616H37.576L38.8897 15.7344H40.0156L38.0697 21.201C37.6255 22.4603 37.1119 22.8652 36.0354 22.8652C35.9464 22.8652 35.6797 22.8553 35.6008 22.8406Z'
          fill='#000008'
        />
      </g>
      <defs>
        <filter
          id='filter0_dd_35_1255'
          x='0.852621'
          y='0.965861'
          width='55.7091'
          height='41.4937'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'
        >
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='0.3842' />
          <feGaussianBlur stdDeviation='1.921' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0'
          />
          <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_35_1255' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='3.842' />
          <feGaussianBlur stdDeviation='3.842' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0'
          />
          <feBlend
            mode='normal'
            in2='effect1_dropShadow_35_1255'
            result='effect2_dropShadow_35_1255'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect2_dropShadow_35_1255'
            result='shape'
          />
        </filter>
      </defs>
    </svg>
  );
};

export default ApplePayIcon;

import { SVGProps } from 'react';

const PayPalIcon = ({ width = '40', height = '26' }: SVGProps<SVGSVGElement>) => {
  const svgWidth = Number(width) + 8.43 * 2;
  const svgHeight = Number(height) + 5 * 2;
  const strokeWidth = 0.1921;
  return (
    <svg
      width={svgWidth}
      height={svgHeight}
      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g filter='url(#filter0_dd_35_1253)'>
        <rect x='8.48584' y='5' width={width} height={height} rx='4.6104' fill='white' />
        <rect
          x='8.38979'
          y='4.90395'
          width={Number(width) + strokeWidth}
          height={Number(height) + strokeWidth}
          rx='4.70645'
          stroke='#D6DCE5'
          stroke-width={strokeWidth}
        />
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M17.2267 14.1256H14.923C14.7654 14.1256 14.6313 14.2402 14.6067 14.3957L13.675 20.3023C13.6565 20.4189 13.7468 20.5239 13.865 20.5239H14.9648C15.1224 20.5239 15.2565 20.4094 15.2811 20.2535L15.5324 18.6604C15.5566 18.5044 15.691 18.39 15.8484 18.39H16.5776C18.0951 18.39 18.9709 17.6557 19.1997 16.2008C19.3027 15.5642 19.2041 15.064 18.9059 14.7137C18.5785 14.3291 17.9977 14.1256 17.2267 14.1256ZM17.4925 16.2829C17.3665 17.1094 16.7349 17.1094 16.1242 17.1094H15.7766L16.0205 15.5658C16.035 15.4726 16.1158 15.4038 16.2101 15.4038H16.3695C16.7855 15.4038 17.1779 15.4038 17.3807 15.6409C17.5015 15.7824 17.5386 15.9925 17.4925 16.2829ZM24.1129 16.2564H23.0098C22.9158 16.2564 22.8345 16.3251 22.82 16.4185L22.7713 16.727L22.6941 16.6152C22.4553 16.2686 21.9228 16.1528 21.3912 16.1528C20.1721 16.1528 19.131 17.0759 18.9282 18.371C18.8228 19.0169 18.9726 19.6346 19.3391 20.0654C19.6753 20.4614 20.1563 20.6265 20.7286 20.6265C21.7108 20.6265 22.2556 19.9949 22.2556 19.9949L22.2063 20.3015C22.1878 20.4187 22.278 20.5238 22.3956 20.5238H23.3893C23.5474 20.5238 23.6807 20.4092 23.7056 20.2534L24.3019 16.478C24.3207 16.3619 24.2308 16.2564 24.1129 16.2564ZM22.5752 18.4033C22.4687 19.0334 21.9685 19.4564 21.3306 19.4564C21.0103 19.4564 20.7541 19.3537 20.5898 19.159C20.4268 18.9658 20.3648 18.6905 20.4167 18.3841C20.5161 17.7592 21.0248 17.3225 21.653 17.3225C21.9661 17.3225 22.2208 17.4265 22.3886 17.6229C22.5566 17.8213 22.6233 18.0981 22.5752 18.4033ZM28.8796 16.2562H29.9883C30.1435 16.2562 30.2341 16.4303 30.1459 16.5577L26.4588 21.8792C26.3991 21.9654 26.3007 22.0166 26.1957 22.0166H25.0884C24.9325 22.0166 24.8415 21.8411 24.9318 21.7135L26.0798 20.0931L24.8588 16.5101C24.8166 16.3856 24.9085 16.2562 25.041 16.2562H26.1303C26.2719 16.2562 26.3967 16.3491 26.4376 16.4846L27.0856 18.6486L28.6146 16.3967C28.6745 16.3088 28.7739 16.2562 28.8796 16.2562Z'
          fill='#253B80'
        />
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M40.8995 20.3018L41.8449 14.2872C41.8594 14.1938 41.9403 14.1251 42.0343 14.1248H43.0987C43.2162 14.1248 43.3064 14.2301 43.2879 14.3467L42.3556 20.253C42.3312 20.4089 42.1972 20.5234 42.0393 20.5234H41.0887C40.9712 20.5234 40.8809 20.4184 40.8995 20.3018ZM33.6589 14.1251H31.3549C31.1976 14.1251 31.0635 14.2396 31.0389 14.3952L30.1072 20.3018C30.0886 20.4184 30.1789 20.5234 30.2966 20.5234H31.4788C31.5887 20.5234 31.6827 20.4433 31.6998 20.3342L31.9642 18.6599C31.9885 18.5039 32.1229 18.3895 32.2802 18.3895H33.0091C34.5269 18.3895 35.4025 17.6552 35.6315 16.2002C35.7348 15.5637 35.6355 15.0635 35.3375 14.7131C35.0103 14.3286 34.4299 14.1251 33.6589 14.1251ZM33.9247 16.2824C33.7991 17.1089 33.1674 17.1089 32.5564 17.1089H32.2091L32.4533 15.5652C32.4678 15.472 32.548 15.4033 32.6426 15.4033H32.8019C33.2176 15.4033 33.6105 15.4033 33.8131 15.6404C33.9341 15.7819 33.9709 15.992 33.9247 16.2824ZM40.5445 16.2559H39.4421C39.3474 16.2559 39.2669 16.3246 39.2527 16.418L39.204 16.7264L39.1265 16.6147C38.8877 16.268 38.3555 16.1522 37.8239 16.1522C36.6048 16.1522 35.564 17.0754 35.3612 18.3705C35.2561 19.0164 35.4053 19.6341 35.7718 20.0649C36.1086 20.4609 36.589 20.626 37.1613 20.626C38.1435 20.626 38.6881 19.9944 38.6881 19.9944L38.639 20.301C38.6205 20.4182 38.7107 20.5233 38.8291 20.5233H39.8223C39.9796 20.5233 40.1137 20.4087 40.1383 20.2528L40.7349 16.4775C40.7531 16.3614 40.6628 16.2559 40.5445 16.2559ZM39.0069 18.4027C38.9011 19.0329 38.4002 19.4559 37.7622 19.4559C37.4425 19.4559 37.1859 19.3532 37.0215 19.1585C36.8584 18.9652 36.7971 18.69 36.8484 18.3836C36.9483 17.7587 37.4564 17.322 38.0846 17.322C38.3979 17.322 38.6524 17.4259 38.8203 17.6223C38.989 17.8207 39.0557 18.0976 39.0069 18.4027Z'
          fill='#179BD7'
        />
      </g>
      <defs>
        <filter
          id='filter0_dd_35_1253'
          x='0.609701'
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
          <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_35_1253' />
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
            in2='effect1_dropShadow_35_1253'
            result='effect2_dropShadow_35_1253'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect2_dropShadow_35_1253'
            result='shape'
          />
        </filter>
      </defs>
    </svg>
  );
};

export default PayPalIcon;

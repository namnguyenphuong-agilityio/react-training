import { SVGProps } from 'react';

const MasterCardIcon = ({ width = '40', height = '26' }: SVGProps<SVGSVGElement>) => {
  const svgWidth = Number(width) + 8.2*2;
  const svgHeight = Number(height) + 5*2;
  const strokeWidth = 0.1921;
  return(
  <svg
    width={svgWidth}
    height={svgHeight}
    viewBox={`0 0 ${svgWidth} ${svgHeight}`}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g filter='url(#filter0_dd_35_1054)'>
      <rect x='8.24292' y='5' width={width} height={height} rx='4.6104' fill='white' />
      <rect
        x='8.14687'
        y='4.90395'
        width={Number(width) + strokeWidth}
        height={Number(height) + strokeWidth}
        rx='4.70645'
        stroke='#D6DCE5'
        stroke-width={strokeWidth}
      />
      <path d='M31.0915 12.5845H25.2085V23.1565H31.0915V12.5845Z' fill='#FF5F00' />
      <path
        d='M25.5821 17.8705C25.5811 16.8523 25.8118 15.8473 26.2568 14.9315C26.7017 14.0157 27.3491 13.2131 28.15 12.5845C27.1582 11.8048 25.967 11.32 24.7126 11.1854C23.4582 11.0507 22.1913 11.2717 21.0566 11.8231C19.9219 12.3745 18.9652 13.234 18.2959 14.3034C17.6265 15.3728 17.2716 16.6089 17.2716 17.8705C17.2716 19.1321 17.6265 20.3682 18.2959 21.4376C18.9652 22.507 19.9219 23.3665 21.0566 23.9178C22.1913 24.4692 23.4582 24.6902 24.7126 24.5556C25.967 24.4209 27.1582 23.9361 28.15 23.1565C27.3491 22.5279 26.7017 21.7253 26.2568 20.8095C25.8119 19.8937 25.5811 18.8886 25.5821 17.8705Z'
        fill='#EB001B'
      />
      <path
        d='M39.0281 17.8705C39.0282 19.132 38.6733 20.3682 38.004 21.4375C37.3347 22.5069 36.378 23.3664 35.2434 23.9178C34.1087 24.4692 32.8417 24.6902 31.5874 24.5556C30.333 24.4209 29.1419 23.9361 28.15 23.1565C28.9503 22.5272 29.5972 21.7245 30.042 20.8089C30.4869 19.8932 30.718 18.8885 30.718 17.8705C30.718 16.8525 30.4869 15.8478 30.042 14.9321C29.5972 14.0164 28.9503 13.2137 28.15 12.5845C29.1419 11.8048 30.333 11.32 31.5874 11.1854C32.8417 11.0507 34.1087 11.2717 35.2434 11.8231C36.378 12.3745 37.3347 13.234 38.004 14.3034C38.6733 15.3728 39.0282 16.6089 39.0281 17.8705Z'
        fill='#F79E1B'
      />
      <path
        d='M38.3867 22.0367V21.8203H38.4739V21.7762H38.2517V21.8203H38.339V22.0367H38.3867ZM38.8182 22.0367V21.7758H38.7501L38.6717 21.9553L38.5933 21.7758H38.5251V22.0367H38.5733V21.8399L38.6467 22.0096H38.6966L38.7701 21.8395V22.0367H38.8182Z'
        fill='#F79E1B'
      />
    </g>
    <defs>
      <filter
        id='filter0_dd_35_1054'
        x='0.366781'
        y='0.966105'
        width='55.7091'
        height='41.4935'
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
        <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_35_1054' />
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
          in2='effect1_dropShadow_35_1054'
          result='effect2_dropShadow_35_1054'
        />
        <feBlend mode='normal' in='SourceGraphic' in2='effect2_dropShadow_35_1054' result='shape' />
      </filter>
    </defs>
  </svg>
  );
};

export default MasterCardIcon;

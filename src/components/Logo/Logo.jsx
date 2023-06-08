import React, { useState } from 'react';
import { LogoName, LogoWrap } from './Logo.styed';

const Logo = () => {
  const [isHover, setHover] = useState(false);

  const onMouseEnterHandler = () => {
    setHover(true);
  };
  const onMouseLeaveHandler = () => {
    setHover(false);
  };

  const colorOfEyes = isHover ? '#D26F49' : '#1f1a24';
  const colorOfTitle = !isHover ? '#B8D0A6' : '#D26F49';
  const colorOfHead = !isHover ? '#B8D0A6' : '#1f1a24';
  const colorOfStroke = isHover ? '#D26F49' : '#1f1a24';
  return (
    <LogoWrap
      to={'/'}
      onMouseLeave={onMouseLeaveHandler}
      onMouseEnter={onMouseEnterHandler}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="5rem"
        height="5rem"
        fill="none"
        viewBox="0 0 48 48"
      >
        <g>
          <path
            fill={colorOfStroke}
            fillOpacity="0.01"
            d="M0 0H48V48H0z"
          ></path>
          <rect
            style={{ transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)' }}
            width="30"
            height="24"
            x="9"
            y="18"
            fill={colorOfHead}
            stroke={colorOfStroke}
            strokeWidth="2.112"
            rx="2"
          ></rect>
          <circle
            style={{ transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)' }}
            cx="17"
            cy="26"
            r="2"
            fill={colorOfEyes}
          ></circle>
          <circle
            style={{ transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)' }}
            cx="31"
            cy="26"
            r="2"
            fill={colorOfEyes}
          ></circle>
          <path
            fill="#1f1a24"
            d="M20 32a2 2 0 100 4v-4zm8 4a2 2 0 100-4v4zm-8 0h8v-4h-8v4z"
          ></path>
          <path
            style={{ transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)' }}
            stroke={colorOfStroke}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.112"
            d="M24 10v8M4 26v8M44 26v8"
          ></path>
          <circle
            style={{ transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)' }}
            cx="24"
            cy="8"
            r="2"
            stroke={colorOfStroke}
            strokeWidth="2.112"
          ></circle>
        </g>
      </svg>
      <LogoName>
        Logic{' '}
        <span
          style={{
            transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
            color: colorOfTitle,
          }}
        >
          Warriors
        </span>
      </LogoName>
    </LogoWrap>
  );
};

export default Logo;

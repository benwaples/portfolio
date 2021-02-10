/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  CoolCircleMedium,
  CoolCircleLarge,
  ZigZagCircle,
} from './coolCircle/CoolCircle';
import './pageNotFound.scss';

export default function PageNotFound(): JSX.Element {
  const largeBlueCircle = {
    top: '10%',
    left: '-5%',
    rotate: 220,
  };

  const mediumLavenderCircle = {
    top: '60%',
    left: '60%',
    lineColorThin: '#ecbcfd',
    background: 'white',
    rotate: 140,
  };

  return (
    <div id="page-not-found">
      <h1>Page Not Found</h1>
      <h3>
        Head back <a href="./">home</a>
      </h3>
      <ZigZagCircle top="20%" right="-4%" />
      <CoolCircleLarge {...largeBlueCircle} />
      <CoolCircleMedium {...mediumLavenderCircle} />
    </div>
  );
}

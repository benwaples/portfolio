/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  CoolCircleMedium,
  CoolCircleLarge,
  ZigZagCircle,
  largeBlueCircle,
  mediumLavenderCircle,
} from './coolCircle/CoolCircle';
import './pageNotFound.scss';

export default function PageNotFound(): JSX.Element {
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

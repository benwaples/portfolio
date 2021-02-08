/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  CoolCircleSmall,
  CoolCircleMedium,
  CoolCircleLarge,
} from './coolCircle/CoolCircle';
import './pageNotFound.scss';

export default function PageNotFound(): JSX.Element {
  const smallGreenCircle = {
    top: '20%',
    left: '-1%',
    lineColorThick: 'green',
  };

  const largeBlueCircle = {
    top: '10%',
    left: '90%',
    rotate: 220,
  };

  const mediumLavenderCircle = {
    top: '60%',
    left: '60%',
    lineColorThin: '#ecbcfd',
    lineColorThick: 'white',
    rotate: 140,
  };

  return (
    <div id="page-not-found">
      <h1>Page Not Found</h1>
      <h3>
        Head back <a href="./">home</a>
      </h3>
      <CoolCircleSmall {...smallGreenCircle} />
      <CoolCircleLarge {...largeBlueCircle} />
      <CoolCircleMedium {...mediumLavenderCircle} />
    </div>
  );
}

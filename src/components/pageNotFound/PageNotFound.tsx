/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { CoolCircleSmall, CoolCircleLarge } from './coolCircle/CoolCircle';
import './pageNotFound.scss';

export default function PageNotFound(): JSX.Element {
  const smallGreenCircle = {
    top: '20%',
    left: '-1%',
    lineColorThin: 'white',
    lineColorThick: 'green',
  };

  const largeBlueCircle = {
    top: '10%',
    left: '90%',
    lineColorThin: 'white',
    // lineColorThick: 'green',
    rotate: 80,
  };

  return (
    <div id="page-not-found">
      <h1>Page Not Found</h1>
      <h3>
        Head back <a href="./">home</a>
      </h3>
      <CoolCircleSmall {...smallGreenCircle} />
      <CoolCircleLarge {...largeBlueCircle} />
    </div>
  );
}

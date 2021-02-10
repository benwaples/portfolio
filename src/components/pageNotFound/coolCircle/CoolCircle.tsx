/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import React from 'react';
import './coolCircle.scss';
import {
  ZigZagProps,
  zigZagStyles,
  CircleProps,
  circleStyles,
} from './zigZagMagicString';

function RotatedLine({ background }: Pick<CircleProps, 'background'>) {
  return (
    <div
      className="rotated-line"
      style={{
        background: background || '#33658a',
      }}
    />
  );
}

export function CoolCircleSmall(styling: Partial<CircleProps>): JSX.Element {
  return (
    <div id="circle-container" style={circleStyles(styling)}>
      <RotatedLine background={styling.background} />
      <RotatedLine background={styling.background} />
      <RotatedLine background={styling.background} />
    </div>
  );
}

export function CoolCircleMedium(props: CircleProps): JSX.Element {
  return <CoolCircleSmall {...{ ...props, size: '100px' }} />;
}

export function CoolCircleLarge(props: CircleProps): JSX.Element {
  return <CoolCircleSmall {...{ ...props, size: '200px' }} />;
}

export function ZigZagCircle(style: ZigZagProps): JSX.Element {
  return <div className="zigzag" style={zigZagStyles(style)} />;
}

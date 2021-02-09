/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import React from 'react';
import './coolCircle.scss';
import zigZagColor from './zigZagMagicString';

interface CircleProps {
  lineColorThick?: string;
  lineColorThin?: string;
  top: string;
  left?: string;
  right?: string;
  size?: string;
  rotate?: number;
}

function RotatedLine({ lineColorThick }: Pick<CircleProps, 'lineColorThick'>) {
  return (
    <div
      className="rotated-line"
      style={{
        background: lineColorThick || '#33658a',
      }}
    />
  );
}

export function CoolCircleSmall({
  lineColorThick,
  lineColorThin,
  top,
  left,
  size = '50px',
  rotate = 160,
}: Partial<CircleProps>): JSX.Element {
  return (
    <div
      id="circle-container"
      style={{
        background: lineColorThin || 'transparent',
        position: 'fixed',
        top,
        left,
        width: size || '50px',
        height: size || '50px',
        transform: `rotate(${rotate}deg)`,
      }}
    >
      <RotatedLine {...{ lineColorThick }} />
      <RotatedLine {...{ lineColorThick }} />
      <RotatedLine {...{ lineColorThick }} />
    </div>
  );
}

export function CoolCircleMedium(props: CircleProps): JSX.Element {
  return <CoolCircleSmall {...{ ...props, size: '100px' }} />;
}

export function CoolCircleLarge(props: CircleProps): JSX.Element {
  return <CoolCircleSmall {...{ ...props, size: '200px' }} />;
}

interface ZigZagProps {
  top: string;
  left?: string;
  right?: string;
  color?: string;
}

export function ZigZagCircle({
  top,
  left = 'auto',
  right = 'auto',
  color = 'teal',
}: ZigZagProps): JSX.Element {
  console.log(zigZagColor(color));
  return (
    <div
      className="zigzag"
      style={{
        top,
        left,
        right,
        background: `linear-gradient(135deg, ${color} 25%, transparent 25%) -15px 0,
          linear-gradient(-135deg, ${color} 25%, transparent 25%) -15px 0,
          linear-gradient(45deg, ${color} 25%, transparent 25%),
          linear-gradient(-45deg, ${color} 25%, transparent 25%)`,
        backgroundSize: '30px 30px',
      }}
    />
  );
}

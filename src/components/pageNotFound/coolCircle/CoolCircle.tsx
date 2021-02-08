/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import React from 'react';
import './coolCircle.scss';

interface CircleProps {
  lineColorThick?: string;
  lineColorThin?: string;
  top: string;
  left: string;
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
        position: 'absolute',
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

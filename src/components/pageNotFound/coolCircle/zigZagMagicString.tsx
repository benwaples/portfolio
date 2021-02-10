import { CSSProperties } from 'react';

interface Styles {
  top: string;
  left: string;
  right: string;
  width: string;
  height: string;
  transform: string;
  background: string;
  backgroundSize: string;
  position: string;
}

export interface CircleProps {
  background?: string;
  lineColorThin?: string;
  top: string;
  left?: string;
  right?: string;
  size?: string;
  rotate?: number;
}

export interface ZigZagProps {
  top: string;
  left?: string;
  right?: string;
  color?: string;
  size?: number;
}

export function zigZagStyles({
  top,
  left = 'auto',
  right = 'auto',
  color = 'teal',
  size = 30,
}: ZigZagProps): Pick<
  Styles,
  'top' | 'left' | 'right' | 'background' | 'backgroundSize'
> {
  return {
    top,
    left,
    right,
    background: `linear-gradient(135deg, ${color} 25%, transparent 25%) -${
      size / 2
    }px 0,
linear-gradient(-135deg, ${color} 25%, transparent 25%) -${size / 2}px 0,
linear-gradient(45deg, ${color} 25%, transparent 25%),
linear-gradient(-45deg, ${color} 25%, transparent 25%)`,
    backgroundSize: `${size}px ${size}px`,
  };
}

export function circleStyles({
  lineColorThin,
  top = '10%',
  left = 'auto',
  size,
  rotate,
}: Partial<CircleProps>): CSSProperties {
  return {
    background: lineColorThin || 'transparent',
    position: 'fixed',
    top,
    left,
    width: size || '50px',
    height: size || '50px',
    transform: `rotate(${rotate}deg)`,
  };
}

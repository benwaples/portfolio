interface Styles {
  top: string;
  left: string;
  right: string;
  background: string;
  backgroundSize: string;
}

export interface ZigZagProps {
  top: string;
  left?: string;
  right?: string;
  color?: string;
  size?: number;
}

function zigZagStyles({
  top,
  left = 'auto',
  right = 'auto',
  color = 'teal',
  size = 30,
}: ZigZagProps): Styles {
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

export default zigZagStyles;

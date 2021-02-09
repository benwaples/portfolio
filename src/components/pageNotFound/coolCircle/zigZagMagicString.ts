function zigZagColor(color: string): string {
  return `linear-gradient(135deg, ${color} 25%, transparent 25%) -15px 0,
linear-gradient(-135deg, ${color} 25%, transparent 25%) -15px 0,
linear-gradient(45deg, ${color} 25%, transparent 25%),
linear-gradient(-45deg, ${color} 25%, transparent 25%)`;
}

export default zigZagColor;

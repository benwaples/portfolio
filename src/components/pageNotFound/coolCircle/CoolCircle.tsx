import React from 'react';
import './coolCircle.scss';

export default function CoolCircle(): JSX.Element {
  return (
    <div id="circle-container">
      <div id="top" className="rotated-line" />
      <div id="middle" className="rotated-line" />
      <div id="bottom" className="rotated-line" />
    </div>
  );
}

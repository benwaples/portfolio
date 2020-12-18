import React from 'react';
import { FillerType } from '../../../types';

export default function PictureLeft({
  title,
  imageSrc,
  description,
  caption,
}: FillerType): JSX.Element {
  return (
    <div className="pictureLeft">
      <figure>
        <img src={imageSrc} alt={title} />
        <figcaption>{caption}</figcaption>
      </figure>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

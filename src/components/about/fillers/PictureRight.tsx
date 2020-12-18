import React from 'react';
import { FillerType } from '../../../types';

export default function PictureRight({
  title,
  imageSrc,
  description,
  caption,
}: FillerType): JSX.Element {
  return (
    <div className="pictureRight">
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <figure>
        <img src={imageSrc} alt={title} />
        <figcaption>{caption}</figcaption>
      </figure>
    </div>
  );
}

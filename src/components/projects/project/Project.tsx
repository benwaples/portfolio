import React from 'react';
import { ProjectType } from '../../../types';

export default function Project({
  title,
  imgSrc,
  description,
  githubLink,
}: ProjectType): JSX.Element {
  return (
    <div className="project-gif-landscape">
      <h3>{title}</h3>
      <img src={imgSrc} alt={title} />
      <p>{description}</p>
      <a href={githubLink}>See the code</a>
    </div>
  );
}

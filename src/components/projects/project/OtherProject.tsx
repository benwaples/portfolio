import React from 'react';
import { OtherProjectType } from '../../../types';

export default function OtherProject({
  imgSrc,
  githubLink,
  deployedLink,
}: OtherProjectType): JSX.Element {
  return (
    <section className="thumbnail">
      <a href={deployedLink} target="_blank" rel="noreferrer">
        <img src={imgSrc} alt="plantr" />
      </a>
      <a href={githubLink} target="_blank" rel="noreferrer">
        See the code
      </a>
    </section>
  );
}

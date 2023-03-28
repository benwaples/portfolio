import React from 'react';
import { ProjectType } from '../../../types';

export default function Project({
  title,
  imgSrc,
  videoSrc,
  description,
  githubLink,
  mediaCaption,
  tempHide,
}: ProjectType): JSX.Element | null {
  if (tempHide) return null;
  function getMediaElement() {
    if (videoSrc) {
      return (
        <video loop muted autoPlay playsInline>
          <source src={videoSrc} type="video/mp4" />
        </video>
      );
    }
    return <img src={imgSrc} alt={title} />;
  }
  return (
    <div className="project-gif-landscape">
      <h3>{title}</h3>
      {getMediaElement()}
      {mediaCaption ? (
        <p dangerouslySetInnerHTML={{ __html: mediaCaption }} />
      ) : null}
      <p>{description}</p>
      <a href={githubLink}>See the code</a>
    </div>
  );
}

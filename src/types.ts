export type FillerType = {
  title: string;
  imageSrc: string;
  caption: string;
  description: string;
};

export type ProjectType = {
  title: string;
  imgSrc?: string;
  videoSrc?: string;
  description: string;
  githubLink: string;
  mediaCaption?: string;
  tempHide?: boolean;
};

export type OtherProjectType = {
  imgSrc: string;
  githubLink: string;
  deployedLink: string;
};

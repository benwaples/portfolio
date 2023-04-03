/* eslint-disable react/require-default-props */
import React from 'react';
import cn from 'classnames';

type layoutOptions = 'ltr' | 'rtl' | 'stacked' | 'overlay';

export interface ICarouselItemProps {
  image: string;
  title: string;
  description: string;
  layout?: layoutOptions;
  textBackground?: string;
  textColor?: string;
}

function CarouselItem(props: ICarouselItemProps): JSX.Element {
  const { image, title, description, layout, textBackground, textColor } =
    props;

  const isOverlay = layout === 'overlay';

  return (
    <div
      className={cn('about-me-item', layout)}
      style={isOverlay ? { backgroundImage: `url(${image})` } : {}}
    >
      {!isOverlay ? <img src={image} alt={title} /> : null}
      <div
        className="text-container"
        style={{ backgroundColor: textBackground, color: textColor }}
      >
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default CarouselItem;

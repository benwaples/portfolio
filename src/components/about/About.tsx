import React from 'react';
import Slider, { Settings } from 'react-slick';
import './About.scss';
import CarouselItem, { ICarouselItemProps } from './CarouselItem';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import useScreenQuery from '../../utils/use-screen-query';

export default function About(): JSX.Element {
  const { isMobile } = useScreenQuery();

  const carouselData: ICarouselItemProps[] = [
    {
      image: './assets/western.jpeg',
      title: 'Western Washington University',
      description:
        'I studied Business Administration with a concentration in Marketing and a minor in Economics.I also rowed all 4 years I was at WWU!',
      layout: isMobile ? 'stacked' : 'ltr',
      textBackground: 'lightblue',
      textColor: 'blue',
    },
    {
      image: './assets/stAndrews.jpeg',
      title: 'St. Andrews University - Scotland',
      description:
        ' The Quad at St.Andrews where I studied Corporate Social Responsibility and Finance for 4 months',
      layout: isMobile ? 'stacked' : 'stacked',
      textBackground: 'skyblue',
      textColor: 'darkblue',
    },
    {
      image: './assets/rowing.jpeg',
      title: 'Rowing at Western Washington University',
      description:
        ' My teammates and I waiting for the next drill on Lake Whatcom in Bellingham, WA.',
      layout: isMobile ? 'stacked' : 'ltr',
      textBackground: 'lightgray',
      textColor: 'black',
    },
    {
      image: './assets/denver_food.jpg',
      title: 'Street tacos and loaded tots from Denver!',
      description:
        'I love finding new places too eat and random items on the menu... especially if it includes tatter tots :) ',
      layout: isMobile ? 'stacked' : 'overlay',
    },
    {
      image: './assets/plums.jpg',
      title: 'Plums and apples fresh off the tree',
      description:
        'This picture exists because I am a hobbyist photographer and I really love fresh plums.   ',
      layout: isMobile ? 'stacked' : 'rtl',
    },
  ];

  const sliderConfig: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div id="me">
        <div>
          <h4>Background</h4>
          <p>
            Hi! I&#39;m Ben, a full-stack software developer from Portland, OR.
            My background in marketing and sales has driven my passion in
            building online tools to help better serve clients. I thrive in team
            environments and on solo projects. I am committed to continuously
            learning new technologies and work flows in order to build cutting
            edge products. See the photos below to learn more about me!
          </p>
        </div>
        <img src="./assets/square.jpg" alt="ben" />
      </div>
      <div className="carousel-wrapper">
        <Slider {...sliderConfig}>
          {carouselData.map((item) => (
            <CarouselItem key={item.title} {...item} />
          ))}
        </Slider>
      </div>
    </>
  );
}

import React, { useState,useEffect } from 'react';
import './MyCarousel.css';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import ProfileService from '../ProfileService'
import {Petinfo} from '../Interface'
/*import Dog3 from './img/dog3.jpg';*/

export const MyCarousel = (prop:any) => {
  const PetUrl= prop.PetURl;
  return (
      <img src={PetUrl} alt={'No picture'}/>
  );
}

export default MyCarousel;
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
    const[obj,setObj] = useState<Petinfo>();
    const getObj = () =>
    fetch('http://localhost:3000/petinfo/two')
    
    .then((res) => res.json())

    useEffect(() => {
    getObj().then((obj) => setObj(obj))
    }, [])
    const PetPicUrl= obj?.PetPicUrl;

    return (
      <img src={PetPicUrl}/>
    );
  }
  
  export default MyCarousel;
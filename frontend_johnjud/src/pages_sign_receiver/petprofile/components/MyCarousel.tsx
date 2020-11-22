import React, { useState,useEffect } from 'react';
import './MyCarousel.css';

  export const MyCarousel = (prop:any) => {
    const PetUrl= prop.PetURl;
    return (
      <img src={PetUrl} alt={'No picture'}/>
    );
  }


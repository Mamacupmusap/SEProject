import React, { useState } from 'react';
import './MyCarousel.css';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import Dog from './img/Yoda.png';
import Dog2 from './img/Yoda.png';
/*import Dog3 from './img/dog3.jpg';*/

const items = [
    {
      src: Dog,
      altText: '',
      caption: ''
    },
    {
      src: Dog2,
      altText: '',
      caption: ''
    },
    {
      src: Dog,
      altText: '',
      caption: ''
    }
  ];
  
  export const MyCarousel = (prop:any) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex:any) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
  
    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });
  
    return (
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
  
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    );
  }
  
  export default MyCarousel;
'use client'
import { HotBidData } from '@/app/data/data';
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import HotBidCard from '../HotBids/HotBidCard';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1324, min: 764 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

const CategoryCard=()=> {

  return (
   <Carousel additionalTransfrom={0} arrows={true} autoPlay={true} autoPlaySpeed={2000} centerMode={false} infinite responsive={responsive} itemClass='item' >
    {HotBidData.map((data)=>{
        return <div key={data.id}>
          <HotBidCard data={data} />
        </div>
    })}
   </Carousel>
  )
}

export default CategoryCard

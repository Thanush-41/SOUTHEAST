"use client";
import React from 'react';
import { CiCircleChevLeft,CiCircleChevRight } from "react-icons/ci";
import Image from 'next/image';
export default function Scrooler({data}) {    
  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <div className='relative flex items-center'>
        <div
          id='slider'
          className='w-full h-[240px] overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
        >
          {data.map((item,index) => (
            <img
              key={index}
              className='w-[220px] h-[240px] inline-block mx-[10px] rounded-lg cursor-pointer hover:scale-105 ease-in-out duration-300'
              src={item.img}
              alt='/'
            />
          ))}
        </div>
        <CiCircleChevRight className='w-[62px] h-[62px] bg-white rounded-full opacity-50 cursor-pointer hover:scale-105 ease-in-out duration-300 scrollbar-hide' onClick={slideRight} />
      </div>
    </>
  );
}


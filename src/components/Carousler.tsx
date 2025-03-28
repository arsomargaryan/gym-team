'use client'
import { data } from "@/constant/data";
import { Carousel } from 'antd';
import Card from "./Card";
import { useState, useEffect } from "react";
import { tek } from "@/constant/font";


export default function Carousler() {
    const [slidesToShow, setSlidesToShow] = useState(3);
    const [dotPosition, setDotPosition] = useState<'top' | 'bottom' | 'left' | 'right'>('bottom');
    const [selected, setSelected] = useState(0)

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth <= 640) {
          setSlidesToShow(3);
          setDotPosition('left')
        } else if(window.innerWidth <= 950){
            setSlidesToShow(2);
            setDotPosition('bottom')
        }
        else {
          setSlidesToShow(3);
          setDotPosition('bottom')
        }
      };
  
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
  return (
    <div className="m-3 sm:m-10 md:m-30 xl:m-40 2xl:m-50 ">
            <div className={` text-3xl sm:text-4xl md:text-5xl xl:text-6xl mb-7 mt-10 sm:mt-0 sm:mb-4 ${tek.className}`}>WHY CHOOSE US</div>

            <Carousel
        dots={{ className: "custom-dots" }}
        arrows={true}
        slidesToShow={slidesToShow}
        infinite={true}
        dotPosition={dotPosition}
        draggable
        className="w-full"
      >
        {data.map((el, index) => (
          <div key={index} className={`flex justify-center items-center mx-3  ${selected === index?"text-black":"text-white"}`}>
            <Card card={el} index={index} selected={selected} setSelected={setSelected}/>
          </div>
        ))}
      </Carousel>
            
    </div>
    
  )
}


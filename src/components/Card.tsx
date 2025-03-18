import type { Card } from "@/constant/data"
import Image from "next/image";
import Button from "./Button";
import { Dispatch, SetStateAction } from "react";

interface Props{
    card: Card
    index:number
    selected:number
    setSelected:Dispatch<SetStateAction<number>>
}
export default function Card({card,index,selected,setSelected}:Props) {

 console.log(selected,index)
  return (
    <div 
    className={` h-64  rounded-2xl p-3 flex justify-center items-start flex-col gap-3 relative mx-0 my-1 sm:my-0 sm:mx-1 cursor-pointer ${selected === index?"bg-[#d6fd52]":"bg-[#252525]"}`}
    onClick={()=>setSelected(index)}
    >
        <div className=" object-cover w-15 h-15 flex justify-center items-center">
            <Image src={card.src} alt={card.name} width={40} height={40} />
        </div>
        <div>{card.name}</div>
        <div className=" text-xs text-gray-400 mb-2">{card.about}</div>
        <Button text="LEARN MORE" isIcon style=" text-sm"/>
        <div className={`rounded-[50%] h-8 w-8  flex justify-center items-center absolute bottom-5 right-5  ${selected === index?"bg-black":"bg-[#d6fd52]"}`} >
        <i className={`fa-solid fa-bolt   ${selected === index?"text-white":"text-black"}`}></i>
        </div>
    </div>
  )
}

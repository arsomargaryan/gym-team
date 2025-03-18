import Image from "next/image";
export default function AboutGym() {
  return (
    <div className=" m-3 mt-15 sm:m-10 sm:mt-20 md:m-30 xl:m-30 2xl:m-55 object-contain">
                <div className="text-3xl">ABOUT OUR GYM</div>
                <div className=" object-contain">
                  
                </div>
                <Image src="/aboutphoto.webp" alt="about gym" width={1500} height={500} className=" rounded-2xl" />
            
            </div>
   
  )
}

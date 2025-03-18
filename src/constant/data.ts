import { StaticImageData } from "next/image"
import photo1 from "../../public/photo1.png"
import photo2 from "../../public/photo2.png"
import photo3 from "../../public/photo3.png"
import photo4 from "../../public/photo4.png"
import photo5 from "../../public/photo5.png"


export interface Card{
    src:string | StaticImageData; 
    name:string
    about:string
}

export const data:Card[] = [
    {
      src:photo1,
      name: "MUSCLES BUILDING",
      about:"“I hated every minute of training, but I said, ‘Don’t quit. Suffer now and live the rest of your life as a champion.” – Muhammad Ali" 
    },
    {
        src:photo2,
        name: "MUSCLES BUILDING",
        about:"“I hated every minute of training, but I said, ‘Don’t quit. Suffer now and live the rest of your life as a champion.” – Muhammad Ali"  
      },
      {
        src:photo3,
        name: "MUSCLES BUILDING",
      about:"“I hated every minute of training, but I said, ‘Don’t quit. Suffer now and live the rest of your life as a champion.” – Muhammad Ali"  
      },
      {
        src:photo4,
        name: "MUSCLES BUILDING",
        about:"“I hated every minute of training, but I said, ‘Don’t quit. Suffer now and live the rest of your life as a champion.” – Muhammad Ali"  
      },
      {
        src:photo5,
        name: "MUSCLES BUILDING",
        about:"“I hated every minute of training, but I said, ‘Don’t quit. Suffer now and live the rest of your life as a champion.” – Muhammad Ali"  
      },
      {
        src:photo3,
        name: "MUSCLES BUILDING",
      about:"“I hated every minute of training, but I said, ‘Don’t quit. Suffer now and live the rest of your life as a champion.” – Muhammad Ali"  
      },
      {
        src:photo1,
        name: "MUSCLES BUILDING",
      about:"“I hated every minute of training, but I said, ‘Don’t quit. Suffer now and live the rest of your life as a champion.” – Muhammad Ali"  
      },
      {
        src:photo5,
        name: "MUSCLES BUILDING",
      about:"“I hated every minute of training, but I said, ‘Don’t quit. Suffer now and live the rest of your life as a champion.” – Muhammad Ali" 
      },
      {
        src:photo2,
        name: "MUSCLES BUILDING",
      about:"“I hated every minute of training, but I said, ‘Don’t quit. Suffer now and live the rest of your life as a champion.” – Muhammad Ali"  
      }
]
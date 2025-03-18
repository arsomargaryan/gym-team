
export default function Header() {
  
  return (
    <nav className="flex  justify-between px-3 sm:justify-around items-center text-white lg:px-30 sm:px-10 py-5 relative z-10">
        <div className="text-2xl">GYMTEAM</div>
        <div className=" hidden sm:flex justify-between items-center gap-7 text-gray-400 ">
            <div className="text-sm">Home</div>
            <div className="text-sm">Shop</div>
            <div className="text-sm">Blog</div>
            <div className="text-sm">Contact</div>
        </div>
        <div className="flex justify-between items-center gap-4 text-gray-400 ">
            <i className="fa-solid fa-magnifying-glass"></i>
            <i className="fa-solid fa-envelope relative">
                 <div className=" bg-red-700 rounded-[50%] h-4 w-4 text-xs text-white absolute flex justify-center items-center -top-1.5 -right-2.5">1</div>
             </i>
            <i className="fa-solid fa-bars"></i>
        </div>
    </nav>
  )
}

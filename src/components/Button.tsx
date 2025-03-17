interface Props{
    text:string
    style:string
    isIcon?:boolean
}

export default function Button({text, style,isIcon}:Props) {
  return (
    <div className={style}>{text}{isIcon && <i className=" ml-2 fa-solid fa-location-arrow"></i>}</div>
  )
}

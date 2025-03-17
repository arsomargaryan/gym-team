import Button from "./Button";

export default function HeaderMainInfo() {
  return (
    <div className="flex flex-col justify-center items-center mt-15">
        <div className=" text-9xl text-center">WORK WITH PROFESSIONALS</div>
        <div className="text-sm text-center text-gray-400 w-96">Lorem lpsum dolar sit arnet consectetur. Neque dolor in semper aliqmenr facilsis tristique placerat sit</div>
        <div className="flex justify-center items-center gap-3 mt-3">
            <Button text="START NOW" style=" bg-[#d6fd52] shadow-[3px_1px_15px_1px_rgba(214,253,82,255)] text-black rounded-3xl px-3 py-1 text-sm"/>
            <Button text="Learn More" isIcon style=" text-sm"/>
        </div>
        <div className=" flex justify-center items-center gap-2 mt-4">
        <i className="fa-solid fa-circle-chevron-left text-3xl"></i>
        <i className="fa-solid fa-circle-chevron-right text-3xl"></i>
        </div>
    </div>
  )
}

import Header from "./Header";
import HeaderMainInfo from "./HeaderMainInfo";

export default function HeaderContainer() {
  return (
    <div className="relative h-[40rem] ">
      <div className="absolute inset-0 opacity-15 bg-cover bg-[url(/mainphoto.jpg)]" />
      <div className="relative">
        <Header />
        <HeaderMainInfo />
      </div>
    </div>
  );
}

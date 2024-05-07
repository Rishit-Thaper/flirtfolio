import Image from "next/image";
import logo from "@/assets/logo_high.png";
const Header = () => {
  return (
    <>
      <div className="header">
        <Image src={logo} alt="logo" width={200}></Image>
      </div>
    </>
  );
};

export default Header;

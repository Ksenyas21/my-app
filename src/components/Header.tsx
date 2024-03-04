import Image from "next/image";
import logo from "../assets/WORK_HQ_Logo.svg";
const Header = () => {
    return (
        <header className="flex flex-row items-center sticky space-x-0 top-0 justify-between w-full p-4 bg-white">
            <div>
                <Image src={logo} alt="Logo" width={100} height={100} />
            </div>
        </header>
    );
};

export default Header;

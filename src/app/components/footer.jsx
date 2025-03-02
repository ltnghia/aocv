import Image from "next/image";
import { imagePrefix } from "../../constant.js";
const Footer = () => {
    return (
        <footer className="h-[10em] ">
            <div className="flex flex-row justify-between w-[70em] px-2">
                <div className="flex flex-col justify-center">
                    <Image src={`${imagePrefix}/hcmus-logo-white.png`} alt="HCMUS" width={150} height={50} className="sm:w-[7em] w-[4em]"/>
                </div>
            </div>

        </footer>
    );
}
export default Footer;

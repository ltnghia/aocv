import Image from "next/image";
const Footer = () => {
    return (
        <footer className="h-[10em] ">
            <div className="flex flex-row justify-between w-[70em] px-2">
                <div className="flex flex-col justify-center">
                    <Image src="/tokyo.png" alt="footer" width={110} height={200} className="sm:w-[5em] w-[4em]" />
                </div>
                <div className="flex flex-col justify-center">
                    <Image src="/NII.png" alt="footer" width={100} height={50} className="sm:h-[5em] h-[3em]" />
                </div>
                <div className="flex flex-col justify-center">
                    <Image src="/hcmus-logo-white.png" alt="footer" width={150} height={50} className="sm:w-[7em] w-[4em]"/>
                </div>
                <div className="flex flex-col justify-center">
                    <Image src="/softbank.png" alt="footer" width={200} height={200} className="sm:w-[13em] w-[6em]" />
                </div>

            </div>

        </footer>
    );
}
export default Footer;
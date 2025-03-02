
const Header = ()=>{
    const highlight = "underline font-bold text-white"
    return (
        <div className="header">
            <div className="justify-center flex flex-col sm:text-[2em] text-[1.5em] text-[#f5f5f5]  font-medium ">
                <div className="text-white text-center text-[1.7em]">
                     <span className="text-white tracking-[0.35em] font-semibold">AOCV </span>
                </div>
                <div className="text-[0.8em] text-center mt-2">
                    ACM Multimedia 2025 Workshop on  
                </div>
                <div className="text-[0.8em] text-center ">
                    Ambiguous Object Analysis in Computer Vision 
                </div>
                <div className="text-[0.55em]  text-white text-center mt-5">
                    Dublin, Ireland 27 - 31.10.2025
                </div>
            </div>
           
           
        </div>
    );
}
export default Header;

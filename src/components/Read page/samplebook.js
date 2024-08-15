import { FaArrowLeft } from "react-icons/fa6";
import { MdKeyboardArrowLeft,MdKeyboardArrowRight } from "react-icons/md";
export default function Samplebooks(props){
    return(
        <>
        <div className="w-full h-full fixed top-0 backdrop-filter backdrop-brightness-50 z-50 flex items-center justify-center">
    
           <div className="w-[800px] h-max px-[30px] py-[30px]s rounded-[20px] flex justify-center">
           <div>
           <div className="flex items-center  justify-center gap-[25px]">
              <div className="text-[30px] font-medium text-black flex justify-start"><MdKeyboardArrowLeft/></div>
              <div className="w-[800px] h-screen bg-[#D9D9D9] px-[20px] py-[20px]">
                <div className="text-[20px] font-light text-black flex justify-start" onClick={props.handleshow}> <FaArrowLeft /></div>
              </div>
              <div className="text-[30px] font-medium text-black flex justify-start"><MdKeyboardArrowRight/></div>
           </div>
           </div>
           </div>

        </div>
        </>
    )
}
import Sidebar from "./Sidebar";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineFileDownload } from "react-icons/md";
export default function Contact(){
    return(
        <>
            
            <div className="w-full h-max lg:px-[50px] px-[20px] lg:mt-[200px] mt-[100px] pb-[20px] bg-[#FFFFFF] absolute">
              {/* Add button */}

              <div className="flex lg:gap-[100px] md:gap-[20px] border-[1px] border-[#94a3b8] shadow-lg px-[20px] py-[40px]">
                <div className="basis-1/5"><Sidebar/></div>

                <div className="basis-4/5 lg:ml-[80px] md:ml-[80px] ml-[140px]">
                   
                <div className="text-[28px] text-[#000000] font-Klee font-normal mb-[15px]">ACTIVE PAYMENTS</div>
                {/* card */}
                <div className="max-w-[1000px] h-[80px] border-[1px] rounded-[15px] border-[#9D9D9D] flex items-center px-[20px] mb-[10px] shadow-lg">
                   <div className="w-full text-[28px] text-[#000000] font-Klee font-normal">Course Name</div>
                   {/* button */}
                   <div className="w-full flex items-center justify-end mb-[40px]"><button className="lg:w-[176px] md:w-[130px] w-[100px] h-[52px] bg-[#C6AB64] text-white text-[20px] flex items-center justify-center mt-[30px] rounded-[20px] shadow-md hover:shadow-lg font-medium font-Montserrat">
                   PAY NOW       
                   </button></div>
                </div>

                {/* card */}
                <div className="max-w-[1000px] h-[80px] border-[1px] rounded-[15px] border-[#9D9D9D] flex items-center px-[20px] shadow-lg">
                   <div className="w-full text-[28px] text-[#000000] font-Klee font-normal">Course Name</div>
                   {/* button */}
                   <div className="w-full flex items-center justify-end mb-[40px]"><button className="lg:w-[176px] md:w-[130px] w-[100px] h-[52px] bg-[#C6AB64] text-white text-[20px] flex items-center justify-center mt-[30px] rounded-[20px] shadow-md hover:shadow-lg font-medium font-Montserrat">
                   PAY NOW       
                   </button></div>
                </div>


                <div className="text-[28px] text-[#000000] font-Klee font-normal mb-[15px] mt-[20px]">CURRENT SUBSCRIPTION</div>
                {/* card */}
                <div className="max-w-[1000px] h-[80px] border-[1px] rounded-[15px] border-[#9D9D9D] flex items-center px-[20px] mb-[10px] shadow-lg">
                   <div className="w-full text-[28px] text-[#000000] font-Klee font-normal">Course Name</div>
                   {/* button */}
                   <div className="w-full flex items-center justify-end text-[#C6AB64] text-[30px]"><MdOutlineFileDownload/></div>
                </div>

                {/* card */}
                <div className="max-w-[1000px] h-[80px] border-[1px] rounded-[15px] border-[#9D9D9D] flex items-center px-[20px] shadow-lg">
                   <div className="w-full text-[28px] text-[#000000] font-Klee font-normal">Course Name</div>
                   {/* button */}
                   <div className="w-full flex items-center justify-end text-[#C6AB64] text-[30px]"><MdOutlineFileDownload/></div>
                </div>

                <div className="text-[28px] text-[#000000] font-Klee font-normal mb-[15px] mt-[20px]">PAYMENT HISTORY</div>
                {/* card */}
                <div className="max-w-[1000px] h-[80px] border-[1px] rounded-[15px] border-[#9D9D9D] flex items-center px-[20px] mb-[10px] shadow-lg">
                   <div className="w-full text-[28px] text-[#000000] font-Klee font-normal">Course Name</div>
                   {/* button */}
                   <div className="w-full flex items-center justify-end text-[#C6AB64] text-[30px]"><MdOutlineFileDownload/></div>
                </div>

                {/* card */}
                <div className="max-w-[1000px] h-[80px] border-[1px] rounded-[15px] border-[#9D9D9D] flex items-center px-[20px] shadow-lg">
                   <div className="w-full text-[28px] text-[#000000] font-Klee font-normal">Course Name</div>
                   {/* button */}
                   <div className="w-full flex items-center justify-end text-[#C6AB64] text-[30px]"><MdOutlineFileDownload/></div>
                </div>

                </div>
              </div>
            </div>
        </>
    )
}
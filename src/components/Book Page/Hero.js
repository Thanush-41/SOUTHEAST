import Sidebar from "./Sidebar";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
export default function Hero(){
    return(
        <>
           
            <div className="relative">
            
            <div className="w-full h-max lg:px-[50px] px-[20px] lg:mt-[100px] mt-[100px] pb-[20px] bg-[#FFFFFF] absolute">
              {/* Add button */}

              <div className="flex lg:gap-[100px] md:gap-[20px]">
                <div className="basis-1/5"><Sidebar/></div>

                <div className="basis-4/5 lg:ml-[80px] md:ml-[80px] ml-[140px] mt-[100px]">
                   
                   
                   {/* flex  */}
                   <div className="w-full flex">
                   <div className="text-[#828282] text-[50px] font-Montserrat font-bold mb-[30px] basis-1/2 justify-start">Books</div>
                   <div className="basis-1/2 flex justify-end items-center">
                   <div className="text-[24px] h-[54px] w-[188px] text-[#646464] border-[1px] border-[#646464] font-Klee font-normal bg-white flex items-center justify-evenly rounded-[20px] ">
                   Genre <IoIosArrowDown />
                   </div>
                   </div>
                   </div>

                   <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-[100px] gap-y-[60px]">
                      {/* child */}
                      <div>
                      <div className="max-w-[518px] h-[564px] rounded-[20px] bg-[#646464]"></div>
                      <div className="text-[50px] text-[#646464] font-Montserrat font-semibold mt-[5px] text-center">THE ARCHER</div>
                      <div className="text-[25px] text-[#646464] font-Montserrat font-medium mt-[3px] text-center">Coolen Hoover</div>
                      </div>
                      {/* child */}
                      <div>
                      <div className="max-w-[518px] h-[564px] rounded-[20px] bg-[#646464]"></div>
                      <div className="text-[50px] text-[#646464] font-Montserrat font-semibold mt-[5px] text-center">THE ARCHER</div>
                      <div className="text-[25px] text-[#646464] font-Montserrat font-medium mt-[3px] text-center">Coolen Hoover</div>
                      </div>
                      {/* child */}
                      <div>
                      <div className="max-w-[518px] h-[564px] rounded-[20px] bg-[#646464]"></div>
                      <div className="text-[50px] text-[#646464] font-Montserrat font-semibold mt-[5px] text-center">THE ARCHER</div>
                      <div className="text-[25px] text-[#646464] font-Montserrat font-medium mt-[3px] text-center">Coolen Hoover</div>
                      </div>
                      {/* child */}
                      <div>
                      <div className="max-w-[518px] h-[564px] rounded-[20px] bg-[#646464]"></div>
                      <div className="text-[50px] text-[#646464] font-Montserrat font-semibold mt-[5px] text-center">THE ARCHER</div>
                      <div className="text-[25px] text-[#646464] font-Montserrat font-medium mt-[3px] text-center">Coolen Hoover</div>
                      </div>
                   </div>

                   <div className="w-full h-full fixed z-40">
                     <div className="w-[50px] h-[50px] bg-[#C6AB64] rounded-full flex items-center justify-center text-white">
                     <FaPlus size={30}/>
                     </div>
                   </div>

                </div>
              </div>
            </div>
            </div>
        </>
    )
}
import { useState } from "react";
import { IoClose } from "react-icons/io5";
export default function Schedule(props){
  return (
   <>
    <div className="w-full h-full fixed top-0 backdrop-filter backdrop-brightness-50 z-50 flex items-center justify-center">
    
         <div className="w-[1000px] h-max px-[30px] py-[30px] bg-[#FFFFFF] rounded-[20px] flex justify-center">
            <div>
            <div className="text-[40px] text-[#C6AB64] flex justify-end" onClick={props.handleshow}> <IoClose /></div>
            <div className="text-[40px] text-[#C6AB64] font-bold font-Montserrat text-center mb-[20px]">Schedule a meet</div>
            <form>
                {/* Input */}
                <div className="mb-[15px] lg:w-[800px] md:w-[500px]">
                  <label className="block text-[22px] font-medium text-black font-Klee mb-2" for="username">
                  Topic
                  </label>
                  <input
                    className="bg-transparent border border-[#cbd5e1] bg-[#F2EEEE] rounded-[10px] w-full h-[35px] py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="email"
                  />
                </div>
                {/* grid */}
                <div className="grid grid-cols-2 gap-[20px] lg:w-[800px] md:w-[500px]">
                    {/* Input */}
                    <div className="mb-[15px]">
                     <label className="block text-[22px] font-medium text-black font-Klee mb-2" for="username">
                     Date
                     </label>
                     <input
                       className="bg-transparent border border-[#cbd5e1] bg-[#F2EEEE] rounded-[10px] w-full h-[35px] py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                       id="username"
                       type="date"
                     />
                   </div>
                   {/* Input */}
                   <div className="mb-[15px]">
                     <label className="block text-[22px] font-medium text-black font-Klee mb-2" for="username">
                     Time
                     </label>
                     <input
                       className="bg-transparent border border-[#cbd5e1] bg-[#F2EEEE] rounded-[10px] w-full h-[35px] py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                       id="username"
                       type="text"
                     />
                   </div>
                </div>
                {/* Input */}
                <div className="mb-[15px] lg:w-[800px] md:w-[500px]">
                  <label className="block text-[22px] font-medium text-black font-Klee mb-2" for="username">
                    Description
                  </label>
                  <input
                    className="bg-transparent border border-[#cbd5e1] bg-[#F2EEEE] rounded-[10px] w-full h-[150px] py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="password"
                  />
                </div>
                {/* button */}
                <div className="w-full flex items-center justify-center mb-[40px]"><button className="lg:w-[201px] md:w-[150px] w-[100px] h-[52px] bg-[#C6AB64] text-white text-[20px] flex items-center justify-center mt-[30px] rounded-[20px] shadow-md hover:shadow-lg font-medium font-Klee">
                Schedule      
                </button></div>
              </form>
              </div>
         </div>
    </div>
   </>
  )
}



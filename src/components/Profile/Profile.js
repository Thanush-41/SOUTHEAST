import Sidebar from "./Sidebar";
import Image from "next/image";
import Link from "next/link";
export default function Payment(){
    return(
        <>
            
            <div className="w-full h-max lg:px-[50px] px-[20px] lg:mt-[200px] mt-[100px] pb-[20px] bg-[#FFFFFF] absolute">
              {/* Add button */}

              <div className="flex lg:gap-[100px] md:gap-[20px] border-[1px] border-[#94a3b8] shadow-lg px-[20px] py-[40px]">
                <div className="basis-1/5"><Sidebar/></div>

                <div className="basis-4/5 lg:ml-[80px] md:ml-[80px] ml-[140px]">
                   
                <form>
                {/* Input */}
                <div className="mb-[15px] max-w-[700px]">
                  <label className="block text-[22px] font-medium text-black font-Montserrat mb-2" for="username">
                  Name
                  </label>
                  <input
                    className="bg-transparent border border-[#cbd5e1] rounded-[10px] w-full h-[35px] py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="email"
                  />
                </div>
                {/* grid */}
                <div className="grid grid-cols-2 gap-[20px] max-w-[700px]">
                    {/* Input */}
                    <div className="mb-[15px]">
                     <label className="block text-[22px] font-medium text-black font-Montserrat mb-2" for="username">
                     Age
                     </label>
                     <input
                       className="bg-transparent border border-[#cbd5e1] rounded-[10px] w-full h-[35px] py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                       id="username"
                       type="text"
                     />
                   </div>
                   {/* Input */}
                   <div className="mb-[15px]">
                     <label className="block text-[22px] font-medium text-black font-Montserrat mb-2" for="username">
                     Date of Birth
                     </label>
                     <input
                       className="bg-transparent border border-[#cbd5e1] rounded-[10px] w-full h-[35px] py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                       id="username"
                       type="date"
                     />
                   </div>
                </div>
                {/* grid */}
                <div className="grid grid-cols-2 gap-[20px] max-w-[700px]">
                    {/* Input */}
                    <div className="mb-[15px]">
                     <label className="block text-[22px] font-medium text-black font-Montserrat mb-2" for="username">
                     Phone
                     </label>
                     <input
                       className="bg-transparent border border-[#cbd5e1] rounded-[10px] w-full h-[35px] py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                       id="username"
                       type="number"
                     />
                   </div>
                   {/* Input */}
                   <div className="mb-[15px]">
                     <label className="block text-[22px] font-medium text-white font-Montserrat mb-2" for="username">
                       Sex
                     </label>
                     <input
                       className="bg-transparent border border-[#cbd5e1] rounded-[10px] w-full h-[35px] py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                       id="username"
                       type="text"
                     />
                   </div>
                </div>
                {/* Input */}
                <div className="mb-[15px] max-w-[700px]">
                  <label className="block text-[22px] font-medium text-black font-Montserrat mb-2" for="username">
                    E-mail
                  </label>
                  <input
                    className="bg-transparent border border-[#cbd5e1] rounded-[10px] w-full h-[35px] py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="email"
                  />
                </div>
                {/* Input */}
                <div className="mb-[15px] max-w-[700px]">
                  <label className="block text-[22px] font-medium text-black font-Montserrat mb-2" for="username">
                  New Password
                  </label>
                  <input
                    className="bg-transparent border border-[#cbd5e1] rounded-[10px] w-full h-[35px] py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="password"
                  />
                </div>
                {/* Input */}
                <div className="mb-[15px] max-w-[700px]">
                  <label className="block text-[22px] font-medium text-black font-Montserrat mb-2" for="username">
                  Re-enter Password
                  </label>
                  <input
                    className="bg-transparent border border-[#cbd5e1] rounded-[10px] w-full h-[35px] py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="password"
                  />
                </div>
                {/* button */}
                <div className="w-full flex items-center justify-center mb-[40px]"><button className="lg:w-[201px] md:w-[150px] w-[100px] h-[52px] bg-[#C6AB64] text-white text-[20px] flex items-center justify-center mt-[30px] rounded-[20px] shadow-md hover:shadow-lg font-medium font-Montserrat">
                UPDATE       
                </button></div>
              </form>

                </div>
              </div>
            </div>
        </>
    )
}
import Sidebar from "./Sidebar";
import Image from "next/image";
import Link from "next/link";
export default function Contact(){
    return(
        <>
            
            <div className="w-full h-max lg:px-[50px] px-[20px] lg:mt-[200px] mt-[100px] pb-[20px] bg-[#FFFFFF] absolute">
              {/* Add button */}

              <div className="flex lg:gap-[100px] md:gap-[20px] border-[1px] border-[#94a3b8] shadow-lg px-[20px] py-[40px]">
                <div className="basis-1/5"><Sidebar/></div>

                <div className="basis-4/5 lg:ml-[80px] md:ml-[80px] ml-[140px]">
                    
                <div className="text-[#000000] text-[32px] font-Klee text-center">CONTACT US</div>
                <form>
                {/* Input */}
                <div className="mb-[30px] max-w-[900px]">
                  <label className="block text-[22px] font-medium text-black font-Montserrat mb-10" for="username">
                  Email
                  </label>
                  <input
                    className="bg-transparent border border-[#cbd5e1]  w-full h-[45px] py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="email"
                  />
                </div>
                {/* Input */}
                <div className="mb-[30px] max-w-[900px]">
                  <label className="block text-[22px] font-medium text-black font-Montserrat mb-10" for="username">
                  Message
                  </label>
                  <input
                    className="bg-transparent border border-[#cbd5e1]  w-full h-[200px] py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                  />
                </div>
                {/* button */}
                <div className="w-full flex items-center justify-center mb-[40px]"><button className="lg:w-[201px] md:w-[150px] w-[100px] h-[52px] bg-[#C6AB64] text-white text-[20px] flex items-center justify-center mt-[30px] rounded-[20px] shadow-md hover:shadow-lg font-medium font-Montserrat">
                SEND
                            
                </button></div>
              </form>

                </div>
              </div>
            </div>
        </>
    )
}
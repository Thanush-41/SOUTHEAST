import Sidebar from "./Sidebar";
import author from "@/assets/Music/author.png";
import Image from "next/image";
export default function Hero(){
    return(
        <>
            <div className="w-full h-max lg:px-[50px] px-[20px] lg:mt-[100px] mt-[100px] pb-[20px] bg-[#FFFFFF]">
              <div className="flex lg:gap-[100px] md:gap-[20px]">
                <div className="basis-1/5"><Sidebar/></div>

                <div className="basis-4/5 lg:ml-[20px] ml-[50px] mt-[100px]">
                  
                   <div className="text-[#828282] text-[50px] font-Montserrat font-bold mb-[30px]">Recent Posts</div>

                   <div className="grid lg:grid-cols-2 grid-cols-1 gap-[40px]">
                      <div className="max-w-[538px] h-[441px] rounded-[20px] bg-[#646464]"></div>
                      <div className="max-w-[538px] h-[441px] rounded-[20px] bg-[#646464]"></div>
                      <div className="max-w-[538px] h-[441px] rounded-[20px] bg-[#646464]"></div>
                      <div className="max-w-[538px] h-[441px] rounded-[20px] bg-[#646464]"></div>
                   </div>

                </div>
              </div>
            </div>
        </>
    )
}
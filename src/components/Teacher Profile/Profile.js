"use client";
import { useState } from "react";
import Sidebar from "./Sidebar";
import musicimg from "@/assets/Music/musicimg.png";
import author from "@/assets/Music/author.png";
import Popup from "./Schedule";
import Image from "next/image";
export default function Profile(){
  const [showmodal,setshowmodal]=useState(false);
  const handleshow = ()=>{
    setshowmodal(!showmodal);
  }
    return(
        <>
             {showmodal && <Popup handleshow={handleshow}/>}
            <div className="w-full h-max lg:px-[50px] px-[20px] lg:mt-[100px] mt-[100px] pb-[20px] bg-[#FFFFFF]">
             
              <div className="flex lg:gap-[100px] md:gap-[20px]">
                <div className="basis-1/5"><Sidebar/></div>

                {/* author profile */}
                <div className="basis-4/5 lg:ml-[50px] ml-[120px] mt-[100px]">
                  
                   <div className="w-full flex">
                       
                       <div className="w-full flex items-center justify-start">
                       <div className="lg:w-[130px] md:w-[100px] lg:h-[130px] md:h-[100px] relative">
                         <Image src={author} alt="Author Image" fill></Image>
                       </div>
                   
                       <div className="ml-[15px] md:mr-[20px]">
                        <div className="lg:text-[50px] text-[30px] text-[#000000] font-medium  font-Klee mb-[8px]">Olivia Morris</div>
                        <div className="lg:text-[40px] text-[20px] text-[#646464] font-Klee font-light">Writer</div>
                       </div>
                       </div>
                       
                       <div className="w-full lg:flex items-center justify-end">
                       
                       {/* button */}
                       <button className="w-max h-[53px] px-[20px] py-[5px] lg:text-[30px] text-[20px] text-[#FFC700] font-Klee font-medium bg-white border-[1px] border-[#FFC700] rounded-[20px] flex items-center justify-center"
                       onClick={handleshow}>
                       Schedule a meet
                       </button>
                       </div>
                   </div>

                   {/* About */}
                   <div className="lg:text-[35px] text-[25px] text-[#000000] font-light font-Klee my-[20px]">About</div>
                   <div className="text-[30px] text-[#000000] font-Klee font-normal text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>

                    {/* Posts */}
                   <div className="lg:text-[35px] text-[25px] text-[#000000] font-light font-Klee my-[50px]">Posts</div>
                   <div className="lg:grid md:grid grid-cols-2 gap-[20px]">
                    <div className="max-w-[370px] h-[370px] bg-[#D9D9D9] rounded-[20px]"></div>
                    <div className="max-w-[370px] h-[370px] bg-[#D9D9D9] rounded-[20px]"></div>
                    <div className="max-w-[370px] h-[370px] bg-[#D9D9D9] rounded-[20px]"></div>
                    <div className="max-w-[370px] h-[370px] bg-[#D9D9D9] rounded-[20px]"></div>
                    <div className="max-w-[370px] h-[370px] bg-[#D9D9D9] rounded-[20px]"></div>
                   </div>

                </div>
              </div>
            </div>
        </>
    )
}
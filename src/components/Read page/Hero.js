"use client";
import { useState } from "react";
import Sidebar from "../Podcast/Sidebar";
import Image from "next/image";
import Popup from "./samplebook"
import { IoIosArrowDown } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import read from "@/assets/read/read.png";
export default function Hero(){
    const [showmodal,setshowmodal]=useState(false);
    const handleshow = ()=>{
      setshowmodal(!showmodal);
    }
    return(
        <>
             {showmodal && <Popup handleshow={handleshow}/>}
            <div className="relative">
            
            <div className="w-full h-max lg:px-[50px] px-[20px] lg:mt-[100px] mt-[100px] pb-[20px] bg-[#FFFFFF] absolute">
              {/* Add button */}

              <div className="flex lg:gap-[100px] md:gap-[20px]">
                <div className="basis-1/5"><Sidebar/></div>

                <div className="basis-4/5 lg:ml-[80px] md:ml-[80px] ml-[140px] mt-[100px]">
                   
                   
                   {/* flex  */}
                   <div className="w-full flex gap-[30px]">
                   {/* basis */}
                   <div className="lg:min-w-[300px] min-w-[200px] lg:h-[490px] md:h-[390px] relative">
                    <Image src={read} alt="Books image" fill></Image>
                   </div>
                   {/* basis */}
                   <div className="max-w-[752px]">
                    <div className="lg:text-[50px] text-[35px] text-[#353535] font-Montserrat font-bold">The Lord of Rings</div>
                    <div className="lg:text-[30px] text-[25px] text-[#646464] font-Montserrat font-normal mt-[10px] text-justify">The Lord of the Rings is an epic[1] high fantasy novel[a] by the English author and scholar J. R. R. Tolkien. Set in Middle-earth, the story began as a sequel to Tolkien`&apos;`s 1937 children`&apos;`s book The Hobbit, but eventually developed into a much larger work. Written in stages between 1937 and 1949.</div>
                   </div>
                   </div>

                   {/* Content */}
                   <div className="mt-[30px] mx-[30px]">
                    <div className="lg:text-[50px] text-[35px] text-[#646464] font-Montserrat font-bold mb-[30px]">Contents</div>

                    {/* chapters */}
                    <div className=" w-full h-[91px] bg-[#D0D0D0] border-[1px] border-black rounded-[20px] flex items-center justify-center mb-[30px] shadow-lg">
                    <div className="lg:text-[30px] text-[25px] text-[#646464] font-Klee font-normal basis-1/2 lg:ml-[50px] ml-[20px]">Chapter 1</div>
                    {/* button */}
                    <div className="w-full h-full flex items-center justify-end basis-1/2 mr-[20px]"><button className="lg:w-[201px] md:w-[150px] w-[100px] h-[52px] bg-[#C6AB64] text-white text-[20px] flex items-center justify-center rounded-lg shadow-md hover:shadow-lg font-Klee"
                    onClick={handleshow}>
                        Read More
                    </button></div>
                    </div>

                    {/* chapters */}
                    <div className=" w-full h-[91px] bg-[#D0D0D0] border-[1px] border-black rounded-[20px] flex items-center justify-center mb-[30px] shadow-lg">
                    <div className="lg:text-[30px] text-[25px] text-[#646464] font-Klee font-normal basis-1/2 lg:ml-[50px] ml-[20px]">Chapter 1</div>
                    {/* button */}
                    <div className="w-full h-full flex items-center justify-end basis-1/2 mr-[20px]"><button className="lg:w-[201px] md:w-[150px] w-[100px] h-[52px] bg-[#C6AB64] text-white text-[20px] flex items-center justify-center rounded-lg shadow-md hover:shadow-lg font-Klee"
                    onClick={handleshow}>
                        Read More
                    </button></div>
                    </div>

                    {/* chapters */}
                    <div className=" w-full h-[91px] bg-[#D0D0D0] border-[1px] border-black rounded-[20px] flex items-center justify-center mb-[30px] shadow-lg">
                    <div className="lg:text-[30px] text-[25px] text-[#646464] font-Klee font-normal basis-1/2 lg:ml-[50px] ml-[20px]">Chapter 1</div>
                    {/* button */}
                    <div className="w-full h-full flex items-center justify-end basis-1/2 mr-[20px]"><button className="lg:w-[201px] md:w-[150px] w-[100px] h-[52px] bg-[#C6AB64] text-white text-[20px] flex items-center justify-center rounded-lg shadow-md hover:shadow-lg font-Klee"
                    onClick={handleshow}>
                        Read More
                    </button></div>
                    </div>

                   </div>

                   

                </div>
              </div>
            </div>
            </div>
        </>
    )
}
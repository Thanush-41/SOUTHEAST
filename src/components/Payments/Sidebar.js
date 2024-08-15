"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import author from "@/assets/Music/author.png";
import { LuPen } from "react-icons/lu";
export default function Sidebar(){
    const [button , selectbutton]=useState(2);
    return(
        <>  
        <div className="flex items-center justify-end">
        <div>
        <div className="w-[164px] h-[164px] relative"><Image src={author} fill alt="Image"></Image></div>
        <div className="flex">
            <div className="text-[28px] text-[#000000] font-Klee flex items-center justify-end">John Wick <LuPen className="ml-[5px]"/></div>
        </div>
        </div>
        </div>
            <div className="lg:w-max md:w-[200px] h-max rounded-[20px] bg-white lg:px-[60px] px-[10px] py-[10px] mt-[50px]">
                {/* routes */}
               <Link href={"/profile"} onClick={()=>{selectbutton(1)}}><div className="flex items-center justify-start gap-[25px] my-[20px] delay-100 duration-500 transition hover:scale-105">
                <div><div className={`text-[28px]  ${button==1?"text-[#C6AB64]":"text-[#000000]"} font-Klee font-medium`}>Profile</div>
                </div>
               </div></Link>

               {/* routes */}
               <Link href={"/payment"} onClick={()=>{selectbutton(2)}}><div className="flex items-center justify-start gap-[25px] my-[20px] delay-100 duration-500 transition hover:scale-105">
                <div><div className={`text-[28px]  ${button==2?"text-[#C6AB64]":"text-[#000000]"} font-Klee font-medium`}>Payments</div>
                </div>
               </div></Link>

               {/* routes */}
               <Link href={"/contactus"} onClick={()=>{selectbutton(3)}}><div className="flex items-center justify-start gap-[25px] my-[20px] delay-100 duration-500 transition hover:scale-105">
                <div><div className={`text-[28px]  ${button==3?"text-[#C6AB64]":"text-[#000000]"} font-Klee font-medium`}>Support</div>
                </div>
               </div></Link>

               {/* routes */}
               <Link href={"#"} onClick={()=>{selectbutton(4)}}><div className="flex items-center justify-start gap-[25px] my-[20px] delay-100 duration-500 transition hover:scale-105">
                <div><div className={`text-[28px]  ${button==4?"text-[#C6AB64]":"text-[#000000]"} font-Klee font-medium`}>Sign out</div>
                </div>
               </div></Link>

            </div>
        </>
    )
}
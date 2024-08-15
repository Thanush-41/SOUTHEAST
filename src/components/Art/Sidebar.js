"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import headphone from "@/assets/Music/headphone.png";
import mic from "@/assets/Music/mic.png";
import pen from "@/assets/Music/pen.png";
import edit from "@/assets/Music/edit.png";
import book from "@/assets/Music/book.png"; 
export default function Sidebar(){
    const [button , selectbutton]=useState(3);
    return(
        <>
            <div className="lg:w-max md:w-[200px] h-max rounded-[20px] bg-[#F0F0F0] lg:px-[60px] px-[10px] py-[10px] mt-[40px] fixed">
                {/* routes */}
               <Link href={"/music"} onClick={()=>{selectbutton(1)}}><div className="flex items-center justify-start gap-[25px] my-[15px] delay-100 duration-500 transition hover:scale-105">
                <div className="w-[29px] h-[29px] relative"><Image src={headphone} alt="Routes" fill></Image></div>
                <div><div className="text-[32px] text-[#000000] font-Klee font-medium">Music</div>
                <div className={`w-[90px] h-[4px] bg-[#C6AB64] ${button==1?" ":"hidden"}`}></div>
                </div>
               </div></Link>

               {/* routes */}
               <Link href={"/podcast"} onClick={()=>{selectbutton(2)}}><div className="flex items-center justify-start gap-[25px] my-[15px] delay-100 duration-500 transition hover:scale-105">
                <div className="w-[29px] h-[29px] relative"><Image src={mic} alt="Routes" fill></Image></div>
                <div><div className="text-[32px] text-[#000000] font-Klee font-medium">Podcasts</div>
                <div className={`w-[140px] h-[4px] bg-[#C6AB64] ${button==2?" ":"hidden"}`}></div>
                </div>
               </div></Link>

               {/* routes */}
               <Link href={"/art"} onClick={()=>{selectbutton(3)}}><div className="flex items-center justify-start gap-[25px] my-[15px] delay-100 duration-500 transition hover:scale-105">
                <div className="w-[29px] h-[29px] relative"><Image src={pen} alt="Routes" fill></Image></div>
                <div><div className="text-[32px] text-[#000000] font-Klee font-medium">Art</div>
                <div className={`w-[50px] h-[4px] bg-[#C6AB64] ${button==3?" ":"hidden"}`}></div>
                </div>
               </div></Link>

               {/* routes */}
               <Link href={"/notes"} onClick={()=>{selectbutton(4)}}><div className="flex items-center justify-start gap-[25px] my-[15px] delay-100 duration-500 transition hover:scale-105">
                <div className="w-[29px] h-[29px] relative"><Image src={edit} alt="Routes" fill></Image></div>
                <div><div className="text-[32px] text-[#000000] font-Klee font-medium">Notes</div>
                <div className={`w-[90px] h-[4px] bg-[#C6AB64] ${button==4?" ":"hidden"}`}></div>
                </div>
               </div></Link>

               {/* routes */}
               <Link href={"/books"} onClick={()=>{selectbutton(5)}}><div className="flex items-center justify-start gap-[25px] my-[15px] delay-100 duration-500 transition hover:scale-105">
                <div className="w-[29px] h-[29px] relative"><Image src={book} alt="Routes" fill></Image></div>
                <div><div className="text-[32px] text-[#000000] font-Klee font-medium">Books</div>
                <div className={`w-[90px] h-[4px] bg-[#C6AB64] ${button==5?" ":"hidden"}`}></div>
                </div>
               </div></Link>

            </div>
        </>
    )
}
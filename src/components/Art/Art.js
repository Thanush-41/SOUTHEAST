import Sidebar from "./Sidebar";
import Head from "./Head";
import musicimg from "@/assets/Music/musicimg.png";
import author from "@/assets/Music/author.png";
import { FaRegHeart } from "react-icons/fa";
import { PiTelegramLogo } from "react-icons/pi";
import { FiMessageCircle } from "react-icons/fi";
import Image from "next/image";
export default function Music(){
    const music=[
        {
            img:musicimg,
            author:"Olivia Morris",
            authorimg:author
        },
        {
            img:musicimg,
            author:"Olivia Morris",
            authorimg:author
        },
        {
            img:musicimg,
            author:"Olivia Morris",
            authorimg:author
        },
        {
            img:musicimg,
            author:"Olivia Morris",
            authorimg:author
        }
    ];
    return(
        <>
            <div className="w-full h-max lg:px-[50px] px-[20px] lg:mt-[100px] mt-[100px] pb-[20px] bg-[#FFFFFF]">
              <div className="flex lg:gap-[100px] md:gap-[20px]">
                <div className="basis-1/5"><Sidebar/></div>

                <div className="basis-4/5 lg:ml-[50px] ml-[120px]">
                    <Head/>
                    <div className="flex flex-col gap-[40px] lg:mt-[150px] mt-[100px]">
                    {music.map((element,index)=>{
                    return(
                    <div key={index} className="max-w-screen h-[450px] rounded-[20px] flex items-center gap-[40px]">
                       <div className="basis-5/6"><div className="w-full lg:h-[450px] h-[350px] relative">
                         <Image src={element.img} alt="Image" fill></Image>
                         <div className="flex flex-row absolute inset-0 bg-black opacity-50 rounded-[42px]"></div>
                            {/* inner flex author info */}
                            <div className="w-full flex flex-row absolute  px-[30px] py-[20px]">
                            <div className="basis-4/5 flex gap-[30px]">
                            <div className="lg:w-[60px] w-[40px] lg:h-[60px] h-[40px] relative"><Image src={element.authorimg} alt="Author Image" fill></Image></div>
                            <div className="lg:text-[32px] text-[24px] text-[#FFFFFF] font-medium font-Klee">{element.author}</div>
                            </div>
                            {/* button */}
                            <div className="flex">
                           
                               <div className="lg:text-[30px] text-[24px] text-[#FFFFFF] font-medium font-Klee lg:w-[182px] w-[120px] h-[42px] border-[1px] border-[#FFFAFA] flex items-center justify-center rounded-[20px]">Pursue</div>
                            
                            </div>
                            </div>
                       </div>
                       </div>
                       <div className="basis-1/6 text-[35px] text-[#828282] flex flex-col gap-[40px] justify-center">
                       <FaRegHeart />
                       <PiTelegramLogo />
                       <FiMessageCircle />
                       </div>
                    </div>
                    )
                    })}
                    </div>
                </div>
              </div>
            </div>
        </>
    )
}
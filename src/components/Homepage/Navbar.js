import Image from "next/image";
import Logo from "@/assets/Homepage/logo.png";
import Link from "next/link";
export default function Navbar(){
    return(
        <>
            <div className="w-full h-max mb-[100px] z-[40] fixed top-0 lg:px-[100px] md:px-[80px] px-[20px] lg:py-[20px] md:py-[20px] py-[20px] bg-[#000000] bg-opacity-75">

            <div className="flex flex-row">
              <div className="basis-1/2">
               <div className="lg:w-[295px] md:w-[200px] w-[150px] lg:h-[103px] md:h-[90px] h-[60px] relative">
                <Image src={Logo} alt="Logo Image" fill></Image>
               </div>
              </div>
              <div className="basis-1/2">
               <div className="flex flex-row-reverse items-center gap-[40px] lg:mt-[20px] md:mt-[15px] mt-[15px]">
                <Link href='/signup'>
                <buttton className="lg:text-[25px] md:text-[28px] text-[20px] text-[#C6AB64] font-Klee">Dive in</buttton></Link>
                <button className="lg:text-[25px] md:text-[28px] text-[20px] text-[#C6AB64] font-Klee">About us</button>
               </div>
              </div>
            </div>

            </div>
        </>
    )
}
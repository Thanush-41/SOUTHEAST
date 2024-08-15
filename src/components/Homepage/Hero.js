import Image from "next/image";
import Heroimg from "@/assets/Homepage/hero.png";
import Link from "next/link";
export default function Hero(){
    return(
        <>
            <div className="w-full h-max lg:px-[100px] md:px-[50px] px-[20px] lg:pt-[20px] lg:pb-[40px] md:py-[20px] py-[20px] bg-[#000000]">

            <div className="lg:grid md:grid lg:grid-cols-2 md:grid-cols-2 lg:mt-[150px] md:mt-[100px] mt-[100px]">
              {/* child */}
              <div className="lg:mt-[80px] md:mt-[40px]">
              <h1 className="lg:text-[35px] md:text-[40px] text-[30px] font-semibold font-Montserrat mb-[20px] text-[#C6AB64]">
              Unleash your <span className="text-white">talent,</span> <span className="text-white">Share</span> your skill.
              </h1>

              <p className="lg:text-[24px] md:text-[20px] text-[18px] text-[#646464] text-justify font-Klee pb-[20px]">Unleash your brilliance, showcase your talents, and inspire others 
                                                                                 to shine. Every skill shared is a lesson learned, and together, we elevate 
                                                                                 the world&apos;s collective mastery.Join the community where talent meets 
                                                                                 teaching, and every individual is a mentor in the making.</p>
              
              {/* button */}
              <Link href={"/signup"}><div className="lg:w-[150px] md:w-[150px] w-[100px] h-[44px] bg-[#000000] border-[2px] border-[#C6AB64] text-[#C6AB64] font-Klee text-[18px] flex items-center justify-center mt-[30px] rounded-lg shadow-md hover:text-[#000000] hover:shadow-lg hover:bg-[#C6AB64] transition hover:ease-in delay-150 duration-400">
                        Dive in
                        
              </div></Link>
              
              </div>
              {/* child */}
              <div className="md:w-full md:h-max flex lg:justify-end justify-center">
               <div className="lg:w-[500px] md:w-[400px] sm:w-[400px] w-full lg:h-[400px] md:h-[500px] h-[500px] relative"><Image src={Heroimg} alt="Image" fill></Image></div>
              </div>
              </div>

            </div>
        </>
    )
}
import Image from "next/image";
import detail1 from "@/assets/Homepage/about1.png";
import detail2 from "@/assets/Homepage/about2.png";
import detail3 from "@/assets/Homepage/about3.png";
import detail4 from "@/assets/Homepage/about4.png";
import detail5 from "@/assets/Homepage/about5.png";
import Link from "next/link";
export default function About(){
    return(
        <>
            <div className="w-full h-max lg:px-[100px] md:px-[60px] px-[20px] lg:py-[50px] md:py-[50px] py-[20px] bg-[#000000]">
            <div className="grid grid-rows-5 gap-[60px]">
              
              {/* grid1 */}
              <div className="lg:grid md:grid lg:grid-cols-2 md:grid-cols-2 flex flex-col-reverse">
               {/* child */}
               <div className="md:w-full md:h-max flex lg:justify-start justify-center">
               <div className="lg:w-[400px] md:w-[300px] sm:w-[300px] w-full lg:h-[455px] md:h-[400px] h-[400px] relative flex justify-center">
                <Image src={detail1} alt="Image" fill></Image>
               </div>
               </div>
               {/* child */}
               <div className="w-full  mt-[40px]">
                <div className="lg:text-[50px] md:text-[35px] text-[27px] text-white font-bold font-Montserrat">Elevate your <span className="text-[#C6AB64]">skills, one chord</span> at a time.</div>
                <p className="lg:text-[22px] md:text-[20px] text-[18px] text-[#646464] text-justify font-Klee pb-[20px]">Dive into the rhythm of progress! Our music section is 
                                                                                                                           your personal concerto conductor. Level up your skills, 
                                                                                                                           embrace the harmony, and compose your own destiny.</p>
               </div>
              </div>

              {/* grid2 */}
              <div className="lg:grid md:grid lg:grid-cols-2 md:grid-cols-2 gap-[40px]">
               
               {/* child */}
               <div className="w-full  mt-[40px]">
                <div className="lg:text-[50px] md:text-[35px] text-[27px] text-white font-bold font-Montserrat">Post your <span className="text-[#C6AB64]">drawings,inspire</span> others.</div>
                <p className="lg:text-[22px] md:text-[20px] text-[18px] text-[#646464] text-justify font-Klee pb-[20px]">Express, create, share. Join our drawing community and 
                showcase your talent to the world. Your canvas, your rules.</p>
               </div>

               {/* child */}
               <div className="md:w-full md:h-max flex lg:justify-end justify-center">
               <div className="lg:w-[400px] md:w-[300px] sm:w-[300px] w-full lg:h-[455px] md:h-[400px] h-[400px] relative flex justify-center">
                <Image src={detail2} alt="Image" fill></Image>
               </div>
               </div>
              </div>

              {/* grid3 */}
              <div className="lg:grid md:grid lg:grid-cols-2 md:grid-cols-2 flex flex-col-reverse">
               {/* child */}
               <div className="md:w-full md:h-max flex lg:justify-start justify-center">
               <div className="lg:w-[400px] md:w-[300px] sm:w-[300px] w-full lg:h-[455px] md:h-[400px] h-[400px] relative flex justify-center">
                <Image src={detail3} alt="Image" fill></Image>
               </div>
               </div>
               {/* child */}
               <div className="w-full  mt-[40px]">
                <div className="lg:text-[50px] md:text-[35px] text-[27px] text-white font-bold font-Montserrat"><span className="text-[#C6AB64]">Fuel</span> your curiosity with the power of <span className="text-[#C6AB64]">podcasts !!</span></div>
                <p className="lg:text-[22px] md:text-[20px] text-[18px] text-[#646464] text-justify font-Klee pb-[20px]">Don’t just listen, immerse yourself. Our podcast section is the 
                 ultimate destination for podcasts that will transport you, educate you,and entertain you. Your auditory adventure starts here!</p>
               </div>
              </div>

              {/* grid4 */}
              <div className="lg:grid md:grid lg:grid-cols-2 md:grid-cols-2">
               
               {/* child */}
               <div className="w-full  mt-[40px]">
                <div className="lg:text-[50px] md:text-[35px] text-[27px] text-white font-bold font-Montserrat">Your one-stop<span className="text-[#C6AB64]"> destination for educational</span> enlightenment!</div>
                <p className="lg:text-[22px] md:text-[20px] text-[18px] text-[#646464] text-justify font-Klee pb-[20px]">Notes tailored for brilliance. Unleash your academic potential with our 
                  thoughtfully curated educational content.</p>
               </div>

               {/* child */}
               <div className="md:w-full md:h-max flex lg:justify-end justify-center">
               <div className="lg:w-[400px] md:w-[300px] sm:w-[300px] w-full lg:h-[455px] md:h-[400px] h-[400px] relative flex justify-center">
                <Image src={detail4} alt="Image" fill></Image>
               </div>
               </div>
              </div>

              {/* grid5 */}
              <div className="lg:grid md:grid lg:grid-cols-2 md:grid-cols-2 flex flex-col-reverse">
               {/* child */}
               <div className="md:w-full md:h-max flex lg:justify-start justify-center">
               <div className="lg:w-[400px] md:w-[300px] sm:w-[300px] w-full lg:h-[455px] md:h-[400px] h-[400px] relative flex justify-center">
                <Image src={detail5} alt="Image" fill></Image>
               </div>
               </div>
               {/* child */}
               <div className="w-full  mt-[40px] flex justify-end">
               <div>
                <div className="lg:text-[50px] md:text-[35px] text-[27px] text-white font-bold font-Montserrat">Escape reality <span className="text-[#C6AB64]">and dive into a world of</span> endless stories.</div>
                <p className="lg:text-[22px] md:text-[20px] text-[18px] text-[#646464] text-justify font-Klee pb-[20px]">Words have the power to transport. Let our stories section be your 
                ticket to a multitude of worlds waiting to be explored.</p>
               </div>
               </div>
              </div>

            </div>

            <div className="lg:text-[60px] md:text-[40px] text-[30px] text-white font-bold font-Montserrat text-center mt-[30px]">Elevate <span className="text-[#C6AB64]">Your Expertise,</span> Empower <span className="text-[#C6AB64]">Others.</span></div>
            
            {/* button */}
            <Link href={"/signup"}><div className="w-full flex items-center justify-center mb-[80px]"><button className="lg:w-[201px] md:w-[150px] w-[100px] h-[52px] bg-[#C6AB64] text-white text-[20px] flex items-center justify-center mt-[30px] rounded-lg shadow-md hover:shadow-lg font-Montserrat">
                        SIGN UP
                        
              </button></div></Link>
            </div>
        </>
    )
}
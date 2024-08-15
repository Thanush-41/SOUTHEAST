import Image from "next/image";
import Logo from "@/assets/Homepage/logo.png";
import ellipse1 from "@/assets/authenticate/ellipse1.png";
import ellipse2 from "@/assets/authenticate/ellipse2.png";
import ellipse3 from "@/assets/authenticate/ellipse3.png";
import ellipse4 from "@/assets/authenticate/ellipse4.png";
import Link from "next/link";

export default function Signupteacher(){
    return(
        <>
            <div className="w-full xl:h-screen bg-[#000000] relative overflow-x-hidden">
 
            
            <div className="lg:w-[295px] md:w-[200px] w-[150px] lg:h-[103px] md:h-[90px] h-[60px] relative">
                <Image src={Logo} alt="Logo Image" fill></Image>
            </div>

            <div className="flex justify-center pb-[40px] px-[30px]">
            
            {/* input */}
            <div className="flex justify-center z-[40] lg:pt-[150px] md:pt-[150] pt-[100px] pb-[100px] absolute">
            <div className="lg:w-[721px] md:w-[721px] sm:w-[650px] w-screen lg:h-max md:h-max h-max bg-white bg-opacity-20 rounded-[10px] lg:px-[40px] md:px-[40px] px-[10px] lg:py-[30px] md:py-[30px] py-[20px]">
              <div className="text-[32px] text-white font-Montserrat  font-bold text-center mb-[50px]">Sign up <span className="text-[#C6AB64]">as a Teacher !!</span></div>
              <form>
                {/* grid */}
                <div className="grid grid-cols-2 gap-[20px]">
                    {/* Input */}
                    <div className="mb-[15px]">
                     <label className="block text-[22px] font-light text-white font-Montserrat mb-2" for="username">
                       First Name
                     </label>
                     <input
                       className="bg-transparent border border-[#C6AB64] rounded-[10px] w-full h-[35px] py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                       id="username"
                       type="text"
                     />
                   </div>
                   {/* Input */}
                   <div className="mb-[15px]">
                     <label className="block text-[22px] font-light text-white font-Montserrat mb-2" for="username">
                       Last Name
                     </label>
                     <input
                       className="bg-transparent border border-[#C6AB64] rounded-[10px] w-full h-[35px] py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                       id="username"
                       type="text"
                     />
                   </div>
                </div>
                {/* Input */}
                <div className="mb-[15px]">
                  <label className="block text-[22px] font-light text-white font-Montserrat mb-2" for="username">
                    E-mail
                  </label>
                  <input
                    className="bg-transparent border border-[#C6AB64] rounded-[10px] w-full h-[35px] py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="email"
                  />
                </div>
                {/* grid */}
                <div className="grid grid-cols-2 gap-[20px]">
                    {/* Input */}
                    <div className="mb-[15px]">
                     <label className="block text-[22px] font-light text-white font-Montserrat mb-2" for="username">
                       Date
                     </label>
                     <input
                       className="bg-transparent border border-[#C6AB64] rounded-[10px] w-full h-[35px] py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                       id="username"
                       type="date"
                     />
                   </div>
                   {/* Input */}
                   <div className="mb-[15px]">
                     <label className="block text-[22px] font-light text-white font-Montserrat mb-2" for="username">
                       City
                     </label>
                     <input
                       className="bg-transparent border border-[#C6AB64] rounded-[10px] w-full h-[35px] py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                       id="username"
                       type="text"
                     />
                   </div>
                </div>
                {/* Input */}
                <div className="mb-[15px]">
                  <label className="block text-[22px] font-light text-white font-Montserrat mb-2" for="username">
                    Password
                  </label>
                  <input
                    className="bg-transparent border border-[#C6AB64] rounded-[10px] w-full h-[35px] py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="password"
                  />
                </div>
                {/* button */}
                <div className="w-full flex items-center justify-center mb-[40px]"><button className="lg:w-[201px] md:w-[150px] w-[100px] h-[52px] bg-[#C6AB64] text-white text-[20px] flex items-center justify-center mt-[30px] rounded-[20px] shadow-md hover:shadow-lg font-medium font-Montserrat">
                            Login
                            
                </button></div>
                <Link href='/signin'>
                <p className="text-[22px] text-[#FFFFFF] font-Montserrat font-medium text-center">Already a user ?<button className="text-[#C6AB64]">Login.</button> </p></Link>
              </form>
            </div>
            </div>

            <div className="flex justify-center">
            <div className="lg:w-[900px] md:w-[900px] w-full h-max"><div className="w-full grid grid-cols-2 ml-[20px] gap-[200px]">
            <div className="w-[121px] h-[121px] relative">
                <Image src={ellipse4} alt="Background style" fill></Image>
            </div>

            <div className="w-[313px] h-[313px] relative">
                <Image src={ellipse3} alt="Background style" fill></Image>
            </div>
            </div>

            <div className="w-full grid grid-cols-2 mt-[400px] gap-[200px]">
            <div className="lg:w-[313px] md:w-[313px] w-[0px] h-[313px] relative">
                <Image src={ellipse1} alt="Background style" fill></Image>
            </div>

            <div className="w-[121px] h-[121px] relative">
                <Image src={ellipse2} alt="Background style" fill></Image>
            </div>

            </div></div>
            

            </div>
            </div>

            </div>
        </>
    )
}
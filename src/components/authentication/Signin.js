"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Logo from "@/assets/Homepage/logo.png";
import ellipse1 from "@/assets/authenticate/ellipse1.png";
import ellipse2 from "@/assets/authenticate/ellipse2.png";
import ellipse3 from "@/assets/authenticate/ellipse3.png";
import ellipse4 from "@/assets/authenticate/ellipse4.png";

export default function Signin() {
  const router = useRouter();

  const handleLogin = (event) => {
    event.preventDefault();
    router.push("/homepage");
  };

  const handleForgotPassword = (event) => {
    event.preventDefault();
    router.push("/homepage");
  };

  return (
    <div className="w-full xl:h-screen bg-[#000000] relative overflow-x-hidden">
      <div className="lg:w-[295px] md:w-[200px] w-[150px] lg:h-[103px] md:h-[90px] h-[60px] relative">
        <Image src={Logo} alt="Logo Image" fill />
      </div>

      <div className="flex justify-center pb-[40px] px-[30px]">
        <div className="flex justify-center z-[40] lg:pt-[150px] md:pt-[150px] pt-[100px] pb-[100px] absolute">
          <div className="lg:w-[721px] md:w-[721px] sm:w-[650px] w-screen lg:h-max md:h-max h-max bg-white bg-opacity-20 rounded-[10px] lg:px-[40px] md:px-[40px] px-[10px] lg:py-[30px] md:py-[30px] py-[20px]">
            <div className="text-[32px] text-white font-Montserrat font-bold text-center mb-[80px]">
              Log <span className="text-[#C6AB64]">in</span>
            </div>
            <form onSubmit={handleLogin}>
              <div className="mb-[20px]">
                <label className="block text-[22px] font-light text-white font-Montserrat mb-2" htmlFor="email">
                  E-mail
                </label>
                <input
                  className="bg-transparent border border-[#C6AB64] rounded-[10px] w-full h-[56px] py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                />
              </div>
              <div className="mb-[20px]">
                <label className="block text-[22px] font-light text-white font-Montserrat mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  className="bg-transparent border border-[#C6AB64] rounded-[10px] w-full h-[56px] py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                />
              </div>
              <div className="w-full flex items-center justify-center mb-[40px]">
                <button
                  type="submit"
                  className="lg:w-[201px] md:w-[150px] w-[100px] h-[52px] bg-[#C6AB64] text-white text-[20px] flex items-center justify-center mt-[30px] rounded-[20px] shadow-md hover:shadow-lg font-medium font-Montserrat"
                >
                  Login
                </button>
              </div>
              <p className="text-[22px] text-[#FFFFFF] font-Montserrat font-medium text-center">
                <button onClick={handleForgotPassword}>Forgot password?</button>
              </p>
            </form>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="lg:w-[900px] md:w-[900px] w-full h-max">
            <div className="w-full grid grid-cols-2 ml-[20px] gap-[200px]">
              <div className="w-[121px] h-[121px] relative">
                <Image src={ellipse4} alt="Background style" fill />
              </div>

              <div className="w-[313px] h-[313px] relative">
                <Image src={ellipse3} alt="Background style" fill />
              </div>
            </div>

            <div className="w-full grid grid-cols-2 mt-[200px] gap-[200px]">
              <div className="lg:w-[313px] md:w-[313px] w-[0px] h-[313px] relative">
                <Image src={ellipse1} alt="Background style" fill />
              </div>

              <div className="w-[121px] h-[121px] relative">
                <Image src={ellipse2} alt="Background style" fill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

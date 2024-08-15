export default function Auth(){
    return(
        <>
            <div className="w-full h-max bg-[#FFFFFF] px-[20px]">
            <div className="flex justify-center"><div className="w-[721px] h-max bg-[#A1A1A138] bg-opacity-20 py-[20px] px-[20px] rounded-lg mt-[200px]">
               <div className="text-[40px] text-[#646464] font-Klee text-center mb-[80px]">Authentication</div>
               <form>
                  {/* Input */}
                <div className="mb-[20px]">
                  <label className="block text-[22px] font-light text-[#000000] font-Montserrat mb-2" for="username">
                  University E-mail 
                  </label>
                  <input
                    className="bg-transparent border border-[#C6AB64] rounded-[10px] w-full h-[56px] py-2 px-3 text-[#000000] leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="email"
                  />
                </div>
                {/* Input */}
                <div className="mb-[20px]">
                  <label className="block text-[22px] font-light text-[#000000] font-Montserrat mb-2" for="username">
                    Password
                  </label>
                  <input
                    className="bg-transparent border border-[#C6AB64] rounded-[10px] w-full h-[56px] py-2 px-3 text-[#000000] leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="password"
                  />
                </div>
                {/* button */}
                <div className="w-full flex items-center justify-center mb-[40px]"><button className="lg:w-[201px] md:w-[150px] w-[150px] h-[52px] bg-[#C6AB64] text-white text-[20px] flex items-center justify-center mt-[30px] rounded-[20px] shadow-md hover:shadow-lg font-medium font-Montserrat">
                Authenticate
                            
                </button></div>
               </form>
            </div></div>
            </div>
        </>
    )
}
"use client"; // Add this line at the top

import Image from "next/image";
import Logo from "@/assets/Homepage/logo1.png";
import { useState } from "react";
import { FaRegBell, FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
export default function Auth() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="w-full h-max lg:px-[50px] md:px-[30px] px-[20px] lg:py-[20px] md:py-[20px] py-[20px] bg-[#FFFFFF] fixed z-30">
        <div className="flex flex-row">
          <div className="basis-1/2 flex flex-row gap-[30px]">
            <Link href={"/"}><div className="lg:w-[295px] md:w-[200px] w-[150px] lg:h-[103px] md:h-[90px] h-[60px] relative">
              <Image src={Logo} alt="Logo Image" fill></Image>
            </div></Link>
            <div className="relative mt-[30px]">
              <input
                type="text"
                placeholder="Search"
                className="px-4 py-2 lg:w-[350px] md:-w-[200px] h-[54px] rounded-[15px] border border-[#646464] absolute lg:grid hidden"
              />
              <FaSearch className="relative mt-[20px] lg:ml-[300px] md:ml-[200px] lg:grid hidden" />
            </div>
          </div>
          <div className="basis-1/2 mt-[20px]">
            <div className="flex flex-row justify-end items-start gap-[20px]">
              <div className="lg:text-[22px] md:text-[20px] text-[18px] text-[#000000] font-Klee font-bold mt-[15px] ml-[10px]">
                Home
              </div>
              <FaRegBell className="lg:size-[20px] size-[15px] lg:mt-[20px] md:mt-[10px] ml-[10px]" />
              <div className="flex flex-row relative">
                <div className="lg:w-[70px] md:w-[60px] w-[50px] lg:h-[70px] md:h-[60px] h-[50px] rounded-full bg-gray-300"></div>
                <IoIosArrowDown
                  className="lg:mt-[25px] md:mt-[20px] mt-[15px] lg:ml-[20px] md:ml-[15px] ml-[5px] cursor-pointer"
                  onClick={toggleDropdown}
                />
                {isDropdownOpen && (
                  <div className="absolute top-[100%] right-0 mt-2 w-[150px] bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                    <ul className="py-1">
                      <Link href={"/profile"}><li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</li></Link>
                      <Link href={"/payment"}><li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Payments</li></Link>
                      <Link href={"/contactus"}><li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Support</li></Link>
                      <Link href={"/signin"}><li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Sign out</li></Link>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
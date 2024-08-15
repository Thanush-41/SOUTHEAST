"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import { IoIosArrowDown } from "react-icons/io";

export default function Hero() {
  const [showSubjectDropdown, setShowSubjectDropdown] = useState(false);
  const [showModuleDropdown, setShowModuleDropdown] = useState(false);

  const toggleSubjectDropdown = () => {
    setShowSubjectDropdown(!showSubjectDropdown);
    setShowModuleDropdown(false); // Close module dropdown if open
  };

  const toggleModuleDropdown = () => {
    setShowModuleDropdown(!showModuleDropdown);
    setShowSubjectDropdown(false); // Close subject dropdown if open
  };

  const dropdownOptions = ["Category 1", "Category 2", "Category 3"];

  return (
    <>
      <div className="w-full h-max lg:px-[50px] px-[20px] lg:mt-[100px] mt-[100px] pb-[20px] bg-[#FFFFFF]">
        <div className="flex lg:gap-[100px] md:gap-[20px]">
          <div className="basis-1/5"><Sidebar /></div>

          <div className="basis-4/5 lg:ml-[80px] md:ml-[80px] ml-[140px] mt-[100px]">
            {/* flex */}
            <div className="w-full flex">
              <div className="text-[#828282] text-[50px] font-Montserrat font-bold mb-[30px] basis-1/2 justify-start">Notes</div>
              {/* buttons */}
              <div className="basis-1/2 lg:flex md:flex justify-end items-center lg:gap-[20px] gap-[10px]">
                <div 
                  className="relative text-[24px] h-[54px] lg:w-[188px] w-[140px] text-[#646464] border-[1px] border-[#646464] font-Klee font-normal bg-white flex items-center justify-evenly rounded-[20px] mb-[10px] cursor-pointer"
                  onClick={toggleSubjectDropdown}
                >
                  Subject <IoIosArrowDown />
                  {showSubjectDropdown && (
                    <div className="absolute top-full mt-[10px] w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                      {dropdownOptions.map((option, index) => (
                        <div 
                          key={index} 
                          className="p-2 hover:bg-gray-200 cursor-pointer"
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                {/* buttons */}
                <div 
                  className="relative text-[24px] h-[54px] lg:w-[188px] w-[140px] text-[#646464] border-[1px] border-[#646464] font-Klee font-normal bg-white flex items-center justify-evenly rounded-[20px] mb-[10px] cursor-pointer"
                  onClick={toggleModuleDropdown}
                >
                  Module <IoIosArrowDown />
                  {showModuleDropdown && (
                    <div className="absolute top-full mt-[10px] w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                      {dropdownOptions.map((option, index) => (
                        <div 
                          key={index} 
                          className="p-2 hover:bg-gray-200 cursor-pointer"
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-[100px] gap-y-[60px]">
              {/* child */}
              <div>
                <div className="max-w-[518px] h-[558px] bg-[#646464]"></div>
              </div>
              {/* child */}
              <div>
                <div className="max-w-[518px] h-[558px] bg-[#646464]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

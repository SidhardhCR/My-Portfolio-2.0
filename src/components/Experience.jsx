import React from 'react';

function Experience() {
  return (
    <div className=" bg-[#EFEDED] h-screen " id='experience'>
      <div className="p-8 md:p-32 reveal">
        <h3 className="mont text-black font-bold text-lg md:text-2xl">
          <span className="mont text-[#571DB5]">/ </span>MY EXPERIENCE
        </h3>
        <div className="w-full m-auto">
          <div className="w-full bg-[#4A5365] h-[1.1px] mt-8 md:mt-24"></div>
          <div className="flex flex-col md:flex-row mt-8 md:mt-20 justify-between items-start md:items-center">
            <div className="w-full md:w-auto mb-4 md:mb-0">
              <img src="/tezon_logo 1.png" alt="Tezon Logo" className="w-24 md:w-32" />
            </div>
            <div className="w-full md:w-auto mb-4 md:mb-0 r md:text-left">
              <h3 className="popp-bold text-black text-xl md:text-2xl lg:text-[32px]">Web Developer Intern</h3>
            </div>
            <div className="w-full md:w-auto  md:text-right">
              <h5 className="popp-bold text-[#707070] text-lg md:text-xl lg:text-[24px]">Jul 2024 <span className="popp-bold text-[#571DB5]"> / </span> Present</h5>
            </div>
          </div>
          <div className="w-full bg-[#4A5365] h-[1.1px] mt-8 md:mt-24"></div>
        </div>
      </div>
    </div>
  );
}

export default Experience;

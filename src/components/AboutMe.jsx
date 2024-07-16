import React from 'react';

function AboutMe() {
  return (
    <div className="bg-[#EFEDED]" id='about'>
      <div className="p-8 md:p-32 reveal">
        <h3 className="mont text-black font-bold text-lg md:text-2xl">
          <span className="mont text-[#571DB5]">/ </span>ABOUT ME
        </h3>
        <div className="pt-4 md:pt-9 flex flex-col md:flex-row">
          <div className="flex-1">
            <h1 className="popp font-extrabold text-2xl md:text-5xl leading-8 md:leading-[4rem]">
              I’ve been developing <br /> websites since 2021
            </h1>
            <p className="popp text-justify pt-4 md:pt-5 font-light text-[#707070] text-sm md:text-[14px] leading-6 md:leading-[1.7rem] w-full md:w-4/6">
              I have been deeply immersed in the world of web development, honing my skills and expertise in creating dynamic and user-friendly websites. Over the years, I've worked with various technologies and frameworks, from HTML, CSS, and JavaScript to more advanced tools like React and Node.js. My journey has been marked by continuous learning and adaptation, allowing me to stay updated with the latest trends and best practices in the industry. This experience has equipped me with the ability to build responsive, accessible, and aesthetically pleasing websites that cater to diverse user needs.
            </p>
          </div>
          <div className="flex mt-8 md:mt-0 gap-x-8 md:gap-x-14 flex-wrap">
            <div className="flex items-center">
              <h1 className="mont text-[#571DB5] text-4xl md:text-[64px] font-bold">2</h1>
              <p className="popp font-bold pl-3 text-sm md:text-[16px]">years of <br />experience</p>
            </div>
            <div className="flex items-center">
              <h1 className="mont text-[#571DB5] text-4xl md:text-[64px] font-bold">20+</h1>
              <p className="popp font-bold pl-3 text-sm md:text-[16px]">projects <br />completed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;

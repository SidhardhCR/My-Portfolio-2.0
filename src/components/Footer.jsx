import React from 'react';

function Footer() {
  return (
    <div className="bg-black-500/[0.93]">
      <div className="p-8 md:p-32 md:pb-10">
        <div className="flex flex-col md:flex-row justify-between">
          <h3 className="mont text-white font-bold text-lg md:text-2xl">
            <span className="mont text-[#571DB5]">/ </span>CONTACT ME
          </h3>
          <div className="flex gap-2 mt-4 md:mt-0">
            <h3 className="popp-bold text-white text-lg md:text-[24px]">Get in touch </h3>
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 32 32">
                <path fill="#571DB5" d="m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10z"></path>
              </svg>
            </span>
          </div>
        </div>

        <div className="mt-12 md:mt-28">
          <div className="flex flex-col md:flex-row justify-between md:mr-72 items-center">
            <div className="flex flex-col md:flex-row items-center md:items-start">
              <div className="flex gap-8 items-center pb-8 md:pb-0">
                <div className='flex flex-col'>
                  <img src="home-mob-pic.png" alt="Profile Picture" width={116} height={116} />
                  <div className="flex gap-4 pt-8 md:pt-">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
                      <path fill="white" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 16 16">
                      <path fill="white" d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518a3.3 3.3 0 0 0 1.447-1.817a6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429a3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218a3.2 3.2 0 0 1-.865.115a3 3 0 0 1-.614-.057a3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 1024 1024">
                      <path fill="white" d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3S645.3 585.4 645.3 512S585.4 378.7 512 378.7M911.8 512c0-55.2.5-109.9-2.6-165c-3.1-64-17.7-120.8-64.5-167.6c-46.9-46.9-103.6-61.4-167.6-64.5c-55.2-3.1-109.9-2.6-165-2.6c-55.2 0-109.9-.5-165 2.6c-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6c46.9 46.9 103.6 61.4 167.6 64.5c55.2 3.1 109.9 2.6 165 2.6c55.2 0 109.9.5 165-2.6c64-3.1 120.8-17.7 167.6-64.5c46.9-46.9 61.4-103.6 64.5-167.6c3.2-55.1 2.6-109.8 2.6-165M512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9S717.1 398.5 717.1 512S625.5 717.1 512 717.1m213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9s47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
                      <path fill="white" d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 16 16">
                      <path fill="white" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"></path>
                    </svg>
                  </div>
                </div>
                <div className="text-center  md:text-left">
                  <h4 className="popp-bold text-white text-lg md:text-[24px]">Sidhardh C R</h4>
                  <p className="mont text-[#BFBEBE] text-sm md:text-[14px]">Web Developer</p>
                </div>
              </div>
            </div>

            <div className="mt-8 md:mt-0 pb-8 text-center md:text-left">
              <h5 className="mont text-white text-lg md:text-[20px]">Email me:</h5>
              <br />
              <div className="flex md:flex-row gap-2 justify-center md:justify-start">
                <h5 className="mont text-white text-lg md:text-[20px] underline decoration-[#571DB5] underline-offset-[15px]">
                  sidhardhcr007@gmail.com
                </h5>
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 32 32">
                    <path fill="#571DB5" d="m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10z"></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-[#4A5365] h-[1.1px] mt-8 md:mt-32"></div>
        <div className="text-center md:text-right">
          <h5 className="mont text-white text-[16px] md:text-[20px] m-8 ">
            Copyright @ Sidhardh C R | Designed by Sidhardh C R
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Footer;

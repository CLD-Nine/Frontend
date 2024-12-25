import React from "react";

import { caffeineAnhydrous } from "@/assets";

const Elements = ({ type, text }) => {
  return (
    <div>
      {type == "overview" ? (
        <div className='bg-black w-fit h-fit py-[10px] px-[20px] text-[18px] font-light tracking-tight text-white rounded-[16px]'>
          {text}
          <span className='text-[#FF8000]'>.</span>
        </div>
      ) : (
        <div
          className='bg-black w-fit h-fit py-[10px] px-[20px] text-[18px] font-light tracking-tight text-white rounded-[16px]'
          style={{
            backgroundImage: `url(${caffeineAnhydrous.src})`,
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
            backgroundClip: "border-box",
            WebkitBackgroundClip: "border-box",
            WebkitTextFillColor: "white",
          }}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default Elements;

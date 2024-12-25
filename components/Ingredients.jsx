import React, { useContext } from "react";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import CloudContext from "@/context/CloudContext";
import { RainbowButton } from "./ui/rainbow-button";
import { useRouter } from "next/router";

const Ingredients = () => {
  const { currentPage, setCurrentPage } = useContext(CloudContext);

  const router = useRouter();

  return (
    <div className='flex flex-col'>
      <div class='text-[64px] font-semibold tracking-tight bg-gradient-to-r from-cyan-500 via-orange/60 to-orange text-transparent bg-clip-text mb-[20px] text-center'>
        Lastly, are there any ingredients you would like to <br /> include?
        Otherwise, we can formulate.
      </div>

      <div className='flex flex-col items-center gap-[5px]'>
        <Input
          type='text'
          placeholder='Type in your answer here.'
          className='w-[650px] bg-[#F2F2F2] placeholder:tracking-tighter placeholder:text-[#888] mb-[15px] border-[1px] border-[#DADADA] placeholder:font-light '
          // onChange={(e) => setBoxName(e.target.value)}
        />

        <div className='w-[650px] flex flex-row justify-end'>
          <RainbowButton
            className='bg-white text-black'
            onClick={() => router.push("/product/personal")}
          >
            Generate Formula
          </RainbowButton>
        </div>
      </div>
    </div>
  );
};

export default Ingredients;

import React, { useContext } from "react";
import Image from "next/image";
import { toast } from "sonner";

import { Input } from "./ui/input";
import CloudContext from "@/context/CloudContext";
import {
  focus,
  gain,
  longevity,
  loss,
  muscle,
  performance,
  pot,
  testosterone,
} from "@/assets";

const InitialButton = ({ btnText, icon, apiText }) => {
  const {
    userId,
    isLoading,
    setIsLoading,
    setCurrentPage,
    apiResponse,
    setApiResponse,
  } = useContext(CloudContext);

  const handleClick = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("http://13.59.194.186:80/cld9aiv2", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_input: apiText,
          user_id: userId,
        }),
      });

      if (res.ok) {
        const resText = await res.json();

        setApiResponse(resText.cld9ai);
        resText && setCurrentPage(5);
      } else {
        toast.error("Something went wrong!");
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        className='px-[20px] py-[10px] rounded-full border-[#dadada] border-[1px] hover:bg-[#f2f2f2] transition-all duration-200 ease-in-out flex flex-row items-center justify-center gap-[10px] disabled:hover:bg-white disabled:cursor-not-allowed'
        onClick={handleClick}
        disabled={isLoading}
      >
        <Image src={icon} height={16} />
        <span>{btnText}</span>
      </button>
    </>
  );
};

const Welcome = () => {
  const { userId } = useContext(CloudContext);

  return (
    <div className='flex flex-col'>
      <div class='text-[96px] font-semibold tracking-tight bg-gradient-to-r from-cyan-500 via-orange/60 to-orange text-transparent bg-clip-text mb-[20px]'>
        Welcome to CLD-9 AI.
      </div>

      <div className='flex flex-col items-center gap-[5px]'>
        <p className='text-[48px] font-light tracking-tight'>
          How can we help you today?
        </p>

        <Input
          type='text'
          placeholder='What are you trying to get out of supplementation?'
          className='w-[650px] bg-[#F2F2F2] placeholder:tracking-tighter border-[1px] border-[#DADADA] placeholder:text-[#888] placeholder:font-light mb-[15px]'
        />

        <div className='w-[800px] flex flex-row items-center justify-center flex-wrap gap-[20px]'>
          <InitialButton
            btnText='Build Muscle'
            icon={muscle}
            apiText='I want to gain more muscle'
          />
          <InitialButton
            btnText='Increase Longevity'
            icon={longevity}
            apiText='I want better longevity'
          />
          <InitialButton
            btnText='Testosterone'
            icon={testosterone}
            apiText="I'm looking for testosterone support"
          />
          <InitialButton
            btnText='Weight Loss'
            icon={loss}
            apiText="I'm looking to lose weight"
          />
          <InitialButton
            btnText='Performance'
            icon={performance}
            apiText='I want better performance in my sport'
          />
          <InitialButton
            btnText='Focus'
            icon={focus}
            apiText="I'm having issues with focus"
          />
          <InitialButton
            btnText='Weight Gain'
            icon={gain}
            apiText="I'm looking to gain weight"
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;

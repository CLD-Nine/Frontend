import React, { useContext, useState, useEffect } from "react";
import { toast } from "sonner";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import CloudContext from "@/context/CloudContext";
import TypingAnimation from "./ui/typing-animation";

const Sleep = () => {
  const {
    apiResponse,
    setApiResponse,
    apiReplyUser,
    setApiReplyUser,
    setIsLoading,
    isLoading,
    userId,
  } = useContext(CloudContext);

  const [visibleText, setVisibleText] = useState("");

  const handleClick = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("http://13.59.194.186:80/cld9aiv2", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_input: apiReplyUser,
          user_id: userId,
        }),
      });

      if (res.ok) {
        const resText = await res.json();
        console.log("Response: ", resText.cld9ai);

        if (resText?.cld9ai) {
          setApiResponse(resText.cld9ai);
          setApiReplyUser("");
          // resText && setCurrentPage(5);
        }
      } else {
        toast.error("Something went wrong");
      }
      setIsLoading(false);
    } catch (error) {
      console.log("cld-9-subscription error, ", error);
      setIsLoading(false);
    } finally {
      setApiReplyUser("");
    }
  };

  useEffect(() => {
    let timeout;
    if (apiResponse) {
      setVisibleText("");

      let currentIndex = -1;
      const typewriter = () => {
        if (currentIndex < apiResponse.length - 1) {
          setVisibleText((prev) => prev + apiResponse[currentIndex]);
          currentIndex++;
          timeout = setTimeout(typewriter, 50); // Adjust the speed here
        }
      };
      typewriter();
    }

    return () => clearTimeout(timeout); // Cleanup timeout on unmount
  }, [apiResponse]);

  return (
    <div className='flex flex-col max-w-[1400px] h-[70vh] max-h-[80vh] items-center justify-center'>
      <div className='overflow-y-auto p-[20px]'>
        <div class='text-[50px] bg-gradient-to-r font-medium tracking-tight from-cyan-500 via-orange/60 to-orange text-transparent bg-clip-text text-center bg-red-400 leading-[65px]'>
          {/* <TypingAnimation
            text={apiResponse}
            duration={300}
            className='font-medium tracking-tight'
          /> */}
          {visibleText}
        </div>
      </div>

      <div className='flex flex-col items-center gap-[5px] mt-[20px]'>
        <Input
          type='text'
          placeholder='Type in your answer here.'
          className='w-[650px] bg-[#F2F2F2] placeholder:tracking-tighter placeholder:text-[#888] mb-[15px] border-[1px] border-[#DADADA] placeholder:font-light'
          value={apiReplyUser}
          onChange={(e) => {
            setApiReplyUser(e.target.value);
          }}
        />

        <div className='w-[650px] flex flex-row justify-end'>
          {visibleText.includes("Lastly") ? (
            <Button
              variant='next'
              size='lastly'
              onClick={handleClick}
              className='lastly text-[18px] font-light tracking-tight disabled:cursor-not-allowed
            '
            >
              Click here to formulate.
            </Button>
          ) : (
            <Button
              variant='next'
              className='text-[18px] font-light tracking-tight disabled:cursor-not-allowed'
              size='next'
              onClick={handleClick}
              disabled={isLoading}
            >
              Next
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sleep;

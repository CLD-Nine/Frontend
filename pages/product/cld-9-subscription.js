import React, { useContext } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { useRouter } from "next/router";

import { Input } from "@/components/ui/input";
import CloudContext from "@/context/CloudContext";
import { Button } from "@/components/ui/button";
import { box, boxGrad } from "@/assets";
import { Separator } from "@/components/ui/separator";
import { staggerContainer } from "@/lib/motion";
import TypingAnimation from "@/components/ui/typing-animation";

const Subscription = () => {
  const { boxName, setBoxName } = useContext(CloudContext);
  const router = useRouter();

  const savetoLocal = (fullName) => {
    localStorage.setItem("customerName", fullName);
  };

  return (
    <>
      <div>
        {/* MIDDLE TEXT */}
        <motion.div
          className='flex justify-center items-start flex-col gap-[20px] h-[calc(100vh-80px)]'
          variants={staggerContainer}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.25 }}
        >
          <div className='flex flex-row w-full h-full items-center gap-[25px]'>
            {/* box picture */}
            <motion.div
              className=' flex-1 h-fit w-fit items-center justify-items-end'
              initial={{
                opacity: 0,
                translateX: "500px",
              }}
              animate={{ opacity: 100, translateX: "0px" }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <div className='relative'>
                <Image src={box} height={700} className='' alt='box' />

                <div className='absolute top-[50px] left-[18px] bg-gradient-to-b from-gray-900 via-gray-800 to-teal-700 h-[510px] w-[200px] rounded-[20px] flex flex-col justify-between items-center'>
                  <p className=' mt-[24px] text-[20px] font-light leading-[25px] tracking-[-0.7px] text-white w-[85%] ml-auto mr-auto border-b-[1px] border-b-white pb-[10px]'>
                    {boxName || "Your Name"}
                  </p>

                  <div className='w-[85%] mb-[20px]'>
                    <div className='flex flex-col w-full gap-[10px]'>
                      <div className='w-full'>
                        <Separator />
                      </div>

                      <div className='flex flex-row items-center justify-between'>
                        <Button
                          variant='gradient'
                          className='px-[10px] tracking-[-0.6px] font-normal text-[11px] text-[#FF8000] bg-white rounded-[20px] border-white border-[1px] h-fit'
                        >
                          Orange Citrus
                        </Button>

                        <Button className='px-[10px] tracking-[-0.6px] font-light text-[11px] text-white rounded-[20px] border-white border-[1px] h-fit'>
                          20 servings
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <Image
                  src={boxGrad}
                  // height={450}
                  width={245}
                  className='absolute top-[45px] left-[0px] h-[500px] max-w-[245px] bg-red-600'
                  alt='boxgrad'
                /> */}
              </div>
            </motion.div>

            {/* right column text */}
            <div className='flex-1'>
              <div className='flex flex-col text-[48px] font-normal'>
                <div className='-mb-[20px] flex flex-row items-start leading-normal -tracking-[2px]'>
                  <TypingAnimation text='Lets get started' />
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 100 }}
                    transition={{ delay: 3.5, ease: "easeInOut" }}
                    className='text-[#FF8000]'
                  >
                    .
                  </motion.span>{" "}
                </div>
                <div className='flex flex-row items-start leading-normal -tracking-[2px]'>
                  <TypingAnimation text='Enter in your name' />
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 100 }}
                    transition={{ delay: 4, ease: "easeInOut" }}
                    className='text-[#FF8000]'
                  >
                    .
                  </motion.span>
                </div>
              </div>

              {/* input name */}
              <motion.div
                initial={{ filter: "blur(10px)", opacity: 0 }}
                animate={{ filter: "blur(0px)", opacity: 100 }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 2 }}
              >
                <Input
                  type='text'
                  placeholder='Enter your name'
                  className='w-[50%] bg-[#F2F2F2] placeholder:text-[#888] '
                  onChange={(e) => setBoxName(e.target.value)}
                />
              </motion.div>

              {/* next button */}
              <motion.div
                initial={{ filter: "blur(10px)", opacity: 0 }}
                animate={{ filter: "blur(0px)", opacity: 100 }}
                transition={{ duration: 1.2, ease: "easeInOut", delay: 2.5 }}
                className='mt-[10px] w-[50%] flex items-center justify-end'
              >
                <Button
                  variant='next'
                  className='text-[18px] font-light tracking-tight'
                  onClick={() => {
                    savetoLocal(boxName);
                    router.push("/product/metrics");
                  }}
                  disabled={boxName.length == 0}
                >
                  Next
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Subscription;

import React, { useContext } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import CloudContext from "@/context/CloudContext";
import { box } from "@/assets";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const Checkout = () => {
  const { boxName } = useContext(CloudContext);

  return (
    <div className='h-[calc(100vh-94px)] w-full px-[25px] flex items-center justify-center overflow-hidden'>
      <div className='w-[85%] h-full'>
        <p className='text-[64px] font-light tracking-tight'>
          Checkout <span className='-ml-[10px] text-[#FF8000]'>.</span>
        </p>

        <div className='flex flex-row mt-[10px] items-center justify-center'>
          <div className='flex-[2] h-[682px] min-w-[999px] bg-black rounded-[20px]'></div>
          <div className='flex-[1]'>
            <motion.div
              className=' flex-1 h-fit w-fit items-center justify-items-end ml-[100px]'
              initial={{
                opacity: 0,
                scale: 0.7,
              }}
              animate={{ opacity: 100, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

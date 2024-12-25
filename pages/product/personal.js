import React, { useContext } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";

import { box } from "@/assets";
import { Button } from "@/components/ui/button";
import CloudContext from "@/context/CloudContext";
import { goldPattern } from "@/assets";
import { Separator } from "@/components/ui/separator";

const Metrics = () => {
  const { currentPage, setCurrentPage, getItemFromLocal } =
    useContext(CloudContext);

  const name = getItemFromLocal("customerName");
  const router = useRouter();

  return (
    <div className='h-[calc(100vh-94px)] w-full flex flex-col items-center justify-center'>
      <div className='text-[#2c2c2c] text-[64px] tracking-tight font-normal'>
        Made exclusively for{" "}
        <span
          style={{
            backgroundImage: `url(${goldPattern.src})`,
            backgroundSize: "200%",
            backgroundRepeat: "repeat",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
          }}
        >
          {name}
        </span>
      </div>

      <motion.div
        className=' flex-1 h-fit w-fit items-center justify-items-end -mt-[10px]'
        initial={{
          opacity: 0,
          scale: 0.7,
          // translateX: "500px",
        }}
        animate={{ opacity: 100, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className='relative overflow-visible'>
          <Image src={box} height={650} alt='box' className='relative z-20' />
          {/* box shadow */}
          <div className='absolute h-[590px] w-[219px] top-[30px] shadow-2xl z-10' />

          <div className='absolute top-[45px] left-[15px] bg-gradient-to-b from-gray-900 via-gray-800 to-teal-700 h-[470px] w-[190px] rounded-[20px] flex flex-col justify-between items-center z-20'>
            <p className=' mt-[24px] text-[20px] font-light leading-[25px] tracking-[-0.7px] text-white w-[85%] ml-auto mr-auto border-b-[1px] border-b-white pb-[10px]'>
              {name || " "}
            </p>

            <div className='w-[85%] mb-[20px]'>
              <div className='flex flex-col w-full gap-[10px]'>
                <div className='w-full'>
                  <Separator />
                </div>

                <div className='flex flex-row items-center justify-between'>
                  <Button
                    variant='gradient'
                    className='px-[10px] tracking-[-0.6px] font-normal text-[10px] text-[#FF8000] bg-white rounded-[20px] border-white border-[1px] h-fit'
                  >
                    Orange Citrus
                  </Button>

                  <Button className='px-[10px] tracking-[-0.6px] font-light text-[10px] text-white rounded-[20px] border-white border-[1px] h-fit'>
                    20 servings
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Button
          variant='next'
          className='text-[18px] font-light tracking-tighter w-[219px] mb-[20px]'
          onClick={() => {
            router.push("/product/your-formula");
          }}
        >
          View Insights
        </Button>
      </motion.div>
    </div>
  );
};

export default Metrics;

import React, { useContext } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

import CloudContext from "@/context/CloudContext";
import { logo } from "@/assets";

const Navbar = () => {
  const { currentPage } = useContext(CloudContext);

  const router = useRouter();

  return (
    <div className='p-[25px] w-full flex items-center justify-center sticky'>
      <div className='bg-[#5757570d] w-[85%] flex gap-[10px] px-[10px] py-[7px] rounded-[20px]'>
        <Image
          src={logo}
          height={30}
          width={30}
          alt='logo'
          onClick={() => {
            router.push("/product/cld-9-subscription");
          }}
          className='hover:cursor-pointer'
        />

        {/* Loader */}
        <>
          {currentPage == 1 && router.pathname == "/product/metrics" && (
            <div
              className='w-[30px] h-[30px] rounded-full bg-gradient-to-r from-white via-peach
         to-orange'
            />
          )}
          {currentPage == 2 && router.pathname == "/product/metrics" && (
            <>
              <motion.div
                initial={{
                  width: "30px",
                  height: "30px",
                }}
                animate={{ width: "200px" }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className='rounded-full bg-gradient-to-r from-slate-100/50 via-peach
         to-orange h-[30px] w-[200px]'
              />
            </>
          )}
          {currentPage == 3 && router.pathname == "/product/metrics" && (
            <>
              <motion.div
                initial={{
                  width: "200px",
                  height: "30px",
                }}
                animate={{ width: "400px" }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className='rounded-full bg-gradient-to-r from-slate-100/50 via-peach
         to-orange h-[30px] w-[400px]'
              />
            </>
          )}
          {currentPage == 4 && router.pathname == "/product/metrics" && (
            <>
              <motion.div
                initial={{
                  width: "400px",
                  height: "30px",
                }}
                animate={{ width: "600px" }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className='rounded-full bg-gradient-to-r from-slate-100/50 via-peach
         to-orange h-[30px] w-[600px]'
              />
            </>
          )}
          {currentPage == 5 && router.pathname == "/product/metrics" && (
            <>
              <motion.div
                initial={{
                  width: "600px",
                  height: "30px",
                }}
                animate={{ width: "800px" }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className='rounded-full bg-gradient-to-r from-slate-100/50 via-peach
         to-orange h-[30px] w-[800px]'
              />
            </>
          )}
          {currentPage == 6 && router.pathname == "/product/metrics" && (
            <>
              <motion.div
                initial={{
                  width: "800px",
                  height: "30px",
                }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className='rounded-full bg-gradient-to-r from-slate-100/50 via-peach
         to-orange h-[30px] w-[100%]'
              />
            </>
          )}
        </>
      </div>
    </div>
  );
};

export default Navbar;
